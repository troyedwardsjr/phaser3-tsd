"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dom = require("dts-dom");
const dts_dom_1 = require("dts-dom");
const fs = require("fs");
const path = require("path");
var compare = require("node-version-compare");
class JSDocTsdParser {
    constructor(config) {
        this.accessFlagMap = {
            public: dom.DeclarationFlags.None,
            private: dom.DeclarationFlags.Private,
            protected: dom.DeclarationFlags.Protected,
        };
        this.config = {};
        this.rejectedItems = [];
        this.resultItems = {};
        if (config) {
            this.config = config;
        }
        if (!this.config.ignoreScopes) {
            this.config.ignoreScopes = [];
        }
        if (typeof this.config.ignorePrivateMembers === "undefined") {
            this.config.ignorePrivateMembers = false;
        }
        if (typeof this.config.versionComparator !== "function" && (typeof this.config.versionComparator !== "string" || this.config.versionComparator === "")) {
            this.config.versionComparator = (taggedVersion, latestVersion) => {
                if (taggedVersion.match(/v?([0-9]+\.){2}[0-9]+/i)) {
                    if (typeof latestVersion === "string" && latestVersion.match(/v?([0-9]+\.){2}[0-9]+/i)) {
                        let result = compare(latestVersion, taggedVersion);
                        return result >= 0;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return true;
                }
            };
        }
        else if (typeof this.config.versionComparator === "function") {
            // test for errors
            try {
                var result = this.config.versionComparator("", "");
                if (typeof result !== "boolean") {
                    throw new Error("The versionComparator-function has to return a boolean, instead got " + typeof result);
                }
            }
            catch (err) {
                if (err instanceof ReferenceError || err instanceof SyntaxError || err instanceof TypeError) {
                    throw new Error("Invalid valueComparator-function: " + err);
                }
                console.log(err);
            }
        }
        else {
            if (this.config.versionComparator.indexOf("{") > 0) {
                let functionBody = this.config.versionComparator.substr(this.config.versionComparator.indexOf("{") + 1);
                functionBody = functionBody.substr(0, functionBody.length - 1).trim();
                this.config.versionComparator = new Function("param1", "param2", functionBody);
            }
            else if (fs.existsSync(this.config.versionComparator)) {
                if (path.extname(this.config.versionComparator) !== ".js") {
                    throw new Error(this.config.versionComparator + " must be a JavaScript file");
                }
                this.config.versionComparator = require(this.config.versionComparator);
            }
            else {
                throw new Error("versionComparator must contain a valid path or a valid function as string");
            }
            // test for errors
            try {
                var result = this.config.versionComparator("", "");
                if (typeof result !== "boolean") {
                    throw new Error("The versionComparator-function has to return a boolean, instead got " + typeof result);
                }
            }
            catch (err) {
                if (err instanceof ReferenceError || err instanceof SyntaxError || err instanceof TypeError) {
                    throw new Error("Invalid valueComparator-function: " + err);
                }
                console.log(err);
            }
        }
    }
    getResultItems() {
        return this.resultItems;
    }
    parse(jsdocItems) {
        this.jsdocItems = [];
        jsdocItems.forEach((item) => {
            if (!this.evaluateSinceTag(item.since)) {
                this.rejectedItems.push(item.longname);
            }
            else if (!item.ignore && this.config.ignoreScopes.indexOf(item.scope) === -1 && !(this.config.ignorePrivateMembers && item.access === "private")) {
                let addItem = true;
                let addJsDocComment = true;
                let parsedItem = {};
                if (!this.resultItems[item.longname]) {
                    // only add overloaded items once to jsdocItems
                    // because of the two for-loops in prepareResults
                    this.jsdocItems.push(item);
                    // overloaded items are added to the same key
                    // in resultItems
                    this.resultItems[item.longname] = [];
                }
                switch (item.kind) {
                    case "function":
                        parsedItem = this.parseFunction(item);
                        break;
                    case "member":
                        if (item.isEnum) {
                            parsedItem = this.parseEnum(item);
                        }
                        else {
                            parsedItem = this.parseMember(item);
                        }
                        break;
                    case "namespace":
                        parsedItem = this.parseNamespace(item);
                        break;
                    case "typedef":
                        parsedItem = this.parseTypeDefinition(item);
                        break;
                    case "file":
                        // suppress warnings for this type
                        addItem = false;
                        break;
                    case "class":
                        // IClassDoclet with kind 'class'
                        if (this.resultItems[item.longname].length === 1) {
                            // class is already created, only add the constructor to the class
                            parsedItem = this.parseClass(item, this.resultItems[item.longname][0]);
                            // class is already added
                            addItem = false;
                        }
                        else {
                            // create new class
                            parsedItem = this.parseClass(item);
                        }
                        // jsDocComment is already added to the constructors
                        // @classdesc is alrady added to the class
                        addJsDocComment = false;
                        break;
                    case "interface":
                        // IClassDoclet with kind 'interface'
                        parsedItem = this.parseInterface(item);
                        break;
                    case "module":
                        parsedItem = this.parseModule(item);
                        break;
                    default:
                        if (item.kind !== "package") {
                            console.warn(`Unsupported jsdoc item kind: ${item.kind} (item name: ${item.longname})`);
                        }
                        addItem = false;
                        break;
                }
                if (addItem) {
                    if (addJsDocComment) {
                        parsedItem.jsDocComment = this.cleanJSDocComment(item.comment);
                    }
                    this.handleFlags(item, parsedItem);
                    this.resultItems[item.longname].push(parsedItem);
                }
            }
        });
    }
    prepareResults() {
        let domTopLevelDeclarations = {};
        for (let jsdocItem of this.jsdocItems) {
            let parentItem = this.findParentItem(jsdocItem, domTopLevelDeclarations);
            if (parentItem) {
                // add the items we parsed before as a member of the top level declaration
                for (let parsedItem of this.resultItems[jsdocItem.longname]) {
                    switch (parentItem.kind) {
                        case "namespace":
                            let namespaceMember = parsedItem;
                            switch (namespaceMember.kind) {
                                case "property":
                                    let variableDeclaration = dom.create.variable(namespaceMember.name, namespaceMember.type);
                                    if (!parsedItem.flags || 0 === (parsedItem.flags & dom.DeclarationFlags.Private)) {
                                        variableDeclaration.flags = dom.DeclarationFlags.Export;
                                    }
                                    variableDeclaration.comment = namespaceMember.comment;
                                    variableDeclaration.jsDocComment = namespaceMember.jsDocComment;
                                    parentItem.members.push(variableDeclaration);
                                    break;
                                case "function":
                                    if (!parsedItem.flags || 0 === (parsedItem.flags & dom.DeclarationFlags.Private)) {
                                        namespaceMember.flags = dom.DeclarationFlags.Export;
                                    }
                                    parentItem.members.push(namespaceMember);
                                    break;
                                case "interface":
                                case "class":
                                case "namespace":
                                case "const":
                                case "var":
                                    parentItem.members.push(namespaceMember);
                                    break;
                                default:
                                    console.warn(`Can't add member '${jsdocItem.longname}' to parent item '${parentItem.name}'. Unsupported member type: '${namespaceMember.kind}'`);
                                    break;
                            }
                            break;
                        case "class":
                            let classMember = parsedItem;
                            switch (classMember.kind) {
                                case "function":
                                    let functionDeclaration = classMember;
                                    classMember = dom.create.method(functionDeclaration.name, functionDeclaration.parameters, functionDeclaration.returnType, functionDeclaration.flags);
                                    classMember.typeParameters = functionDeclaration.typeParameters;
                                    classMember.comment = functionDeclaration.comment;
                                    classMember.jsDocComment = functionDeclaration.jsDocComment;
                                    break;
                            }
                            parentItem.members.push(classMember);
                            break;
                        case "enum":
                            // enum members can already exists
                            let foundItem = parentItem.members.filter((member) => {
                                return member.name === parsedItem.name;
                            }).length > 0;
                            if (!foundItem) {
                                parentItem.members.push(parsedItem);
                            }
                            break;
                        case "interface":
                            let objectTypeMember = parsedItem;
                            switch (objectTypeMember.kind) {
                                case "function":
                                    let functionDeclaration = objectTypeMember;
                                    objectTypeMember = dom.create.method(functionDeclaration.name, functionDeclaration.parameters, functionDeclaration.returnType, functionDeclaration.flags);
                                    objectTypeMember.typeParameters = functionDeclaration.typeParameters;
                                    objectTypeMember.comment = functionDeclaration.comment;
                                    objectTypeMember.jsDocComment = functionDeclaration.jsDocComment;
                                    break;
                                case "property":
                                    // ok, nothing to change
                                    break;
                                default:
                                    console.warn(`Can't add member '${jsdocItem.longname}' to parent item '${parentItem.longname}'. Unsupported member type: '${parentItem.kind}'`);
                                    break;
                            }
                            parentItem.members.push(objectTypeMember);
                            break;
                        case "module":
                            let moduleMember = parsedItem;
                            switch (moduleMember.kind) {
                                case "property":
                                    let variableDeclaration = dom.create.variable(moduleMember.name, moduleMember.type);
                                    if (!parsedItem.flags || 0 === (parsedItem.flags & dom.DeclarationFlags.Private)) {
                                        variableDeclaration.flags = dom.DeclarationFlags.Export;
                                    }
                                    variableDeclaration.comment = moduleMember.comment;
                                    variableDeclaration.jsDocComment = moduleMember.jsDocComment;
                                    parentItem.members.push(variableDeclaration);
                                    break;
                                case "function":
                                    if (!parsedItem.flags || 0 === (parsedItem.flags & dom.DeclarationFlags.Private)) {
                                        moduleMember.flags = dom.DeclarationFlags.Export;
                                    }
                                    parentItem.members.push(moduleMember);
                                    break;
                                case "interface":
                                case "class":
                                case "namespace":
                                case "const":
                                case "var":
                                    parentItem.members.push(moduleMember);
                                    break;
                                default:
                                    console.warn(`Can't add member '${jsdocItem.longname}' to parent item '${parentItem.longname}'. Unsupported member type: '${moduleMember.kind}'`);
                                    break;
                            }
                            break;
                        default:
                            // missing the top level declaration
                            // tslint:disable-next-line:max-line-length
                            console.warn(`Can't add member '${jsdocItem.longname}' to parent item '${parentItem.name}'. Unsupported parent member type: '${parentItem.kind}'. Insert this item as a top level declaration`);
                            if (!domTopLevelDeclarations[jsdocItem.longname]) {
                                domTopLevelDeclarations[jsdocItem.longname] = parsedItem;
                            }
                            break;
                    }
                }
            }
            else {
                // add this item as a top level declaration, if it has no parent or if the parent is missing
                // do not add this item, if the parent was rejected by the since comparator
                if (!jsdocItem.memberof || this.rejectedItems.indexOf(jsdocItem.memberof) < 0) {
                    if (jsdocItem.memberof) {
                        // missing the top level declaration
                        console.warn("Missing top level declaration '" + jsdocItem.memberof + "' for member '" + jsdocItem.longname + "'. Insert this member as a top level declaration.");
                    }
                    for (let parsedItem of this.resultItems[jsdocItem.longname]) {
                        if (!domTopLevelDeclarations[jsdocItem.longname]) {
                            domTopLevelDeclarations[jsdocItem.longname] = parsedItem;
                        }
                    }
                }
            }
        }
        return domTopLevelDeclarations;
    }
    resolveResults() {
        let output = "";
        let results = this.prepareResults();
        Object.keys(results).forEach((key) => {
            try {
                output += dom.emit(results[key]);
            }
            catch (err) {
                console.error(`Unexpected error. Please report this error on github!\nCan't emit item ${key}: ${err}\n\n${JSON.stringify(results[key], null, "\t")}`);
                let jsdocItems = this.jsdocItems.filter((elem) => {
                    return (elem.hasOwnProperty("name") && elem.name.endsWith(key)) || (elem.hasOwnProperty("longname") && elem.longname === key);
                });
                console.log(`JSDoc items: \n${JSON.stringify(jsdocItems, null, "\t")}`);
            }
        });
        return output;
    }
    cleanJSDocComment(comment, addExample = false) {
        let cleanLines = [];
        let descriptionLines = [];
        let exampleLines = [];
        let description = false;
        let example = false;
        let classdesc = false;
        if (comment) {
            for (let line of comment.split(/\r?\n/)) {
                let cleanedLine = line.trim()
                    .replace(/^\/\*\*\s?/, "") // JSDoc-Header ("/**")
                    .replace(/\s*\*\/\s?$/, "") // JSDoc-Footer ("*/")
                    .replace(/^\*\s?/, "") // Line ("*")
                    .replace(/@param\s\{[^\}]+\}/g, "@param") // Parameter-Types
                    .trim();
                // ignore everything that is not part of the function description in tsd-files
                // tslint:disable-next-line:max-line-length
                if (cleanedLine && (cleanedLine.startsWith("@param") || cleanedLine.startsWith("@throws") || cleanedLine.startsWith("@description") || cleanedLine.startsWith("@classdesc") || cleanedLine.startsWith("@example") || !cleanedLine.startsWith("@"))) {
                    if (cleanedLine.startsWith("@")) {
                        description = false;
                        example = false;
                        classdesc = false;
                    }
                    if (cleanedLine.startsWith("@description")) {
                        cleanedLine = cleanedLine.replace("@description ", "");
                        description = true;
                    }
                    else if (cleanedLine.startsWith("@example")) {
                        example = true;
                    }
                    else if (cleanedLine.startsWith("@classdesc")) {
                        classdesc = true;
                    }
                    if (description) {
                        descriptionLines.push(cleanedLine);
                    }
                    else if (example) {
                        exampleLines.push(cleanedLine);
                    }
                    else if (classdesc) {
                        // the class-description is correctly added to the class already
                    }
                    else {
                        cleanLines.push(cleanedLine);
                    }
                }
            }
        }
        let lines = "";
        if (descriptionLines.length > 0) {
            lines = lines + descriptionLines.join("\n");
        }
        if (cleanLines.length > 0) {
            if (lines !== "") {
                lines = lines + "\n";
            }
            lines = lines + cleanLines.join("\n");
        }
        if (addExample && exampleLines.length > 0) {
            if (lines !== "") {
                lines = lines + "\n";
            }
            lines = lines + exampleLines.join("\n");
        }
        return lines;
    }
    createDomParams(params, functionName) {
        let domParams = [];
        let typeDef;
        let propParam;
        for (let i = 0; i < params.length; i++) {
            let param = params[i];
            let paramIsProperty = (param.name.indexOf(".") > 0);
            let nextParamIsProperty = (i + 1 < params.length) && (params[i + 1].name.indexOf(".") > 0);
            let lastParam = (i + 1 === params.length);
            let domParam;
            // check the type of the parameter
            if (!paramIsProperty && nextParamIsProperty) {
                // the parameter is a parameter with properties
                // remember the parameter
                propParam = param;
                // create a new typedef
                typeDef = {
                    kind: "typedef",
                    type: param.type,
                    meta: param.meta,
                    name: functionName + "_" + param.name,
                    scope: "",
                    longname: functionName + "_" + param.name,
                    properties: []
                };
                this.jsdocItems.push(typeDef);
            }
            else if (paramIsProperty) {
                // the parameter is a property
                if (!typeDef || !typeDef.properties) {
                    throw `Parent of property ${param.name} is missing or incorrect`;
                }
                // add the property to the typedef
                let prop = {
                    type: param.type,
                    name: param.name.substr(param.name.indexOf(".") + 1),
                    description: param.description,
                    comment: param.comment
                };
                typeDef.properties.push(prop);
                if (lastParam || !nextParamIsProperty) {
                    // the parameter is the last property
                    if (!propParam) {
                        throw `Parent of property ${param.name} is missing or incorrect`;
                    }
                    // create an interface from the typedef
                    let domInterface = this.parseTypeDefinition(typeDef);
                    this.resultItems[typeDef.longname] = [domInterface];
                    // create the parameter with the interface as type
                    let interfaceType = dom.create.typeParameter(typeDef.name, domInterface);
                    domParam = dom.create.parameter(propParam.name, interfaceType);
                }
            }
            else if (param.type && param.type.names.length > 0) {
                // the param has a simple type
                domParam = dom.create.parameter(param.name, this.mapTypesToUnion(param.type.names));
            }
            else {
                // the param has no type => map to "any"
                domParam = dom.create.parameter(param.name, dom.type.any);
            }
            if (domParam) {
                if (param.optional) {
                    domParam.flags = dom.ParameterFlags.Optional;
                }
                this.handleFlags(param, domParam);
                domParams.push(domParam);
            }
        }
        return domParams;
    }
    evaluateSinceTag(sinceTag) {
        if (typeof sinceTag === "string" && sinceTag !== "") {
            return this.config.versionComparator(sinceTag, this.config.latestVersion);
        }
        else {
            return true;
        }
    }
    findParentItem(jsdocItem, domTopLevelDeclarations) {
        // we have to find the parent item
        let parentItem = null;
        if (jsdocItem.memberof) {
            let parentItemNames = jsdocItem.memberof.split(".");
            parentItemNames.forEach((name, index) => {
                if (index < 1) {
                    parentItem = domTopLevelDeclarations[name];
                    if (!parentItem) {
                        if (this.resultItems[name]) {
                            domTopLevelDeclarations[name] = this.resultItems[name][0];
                            parentItem = domTopLevelDeclarations[name];
                        }
                    }
                }
                else if (parentItem) {
                    let parentItemAsNamespace = parentItem;
                    let parentItemName = "";
                    for (let i = 0; i < index; i++) {
                        if (i > 0) {
                            parentItemName += ".";
                        }
                        parentItemName += parentItemNames[i];
                    }
                    let itemFound = parentItemAsNamespace.members.some((item) => {
                        if (item.name === name) {
                            parentItem = item;
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                }
            }, this);
        }
        return parentItem;
    }
    handleFlags(doclet, obj) {
        obj.flags = dom.DeclarationFlags.None;
        obj.flags |= this.accessFlagMap[doclet.access];
        obj.flags |= doclet.optional || doclet.defaultvalue !== undefined ? dom.ParameterFlags.Optional : dom.DeclarationFlags.None;
        obj.flags |= doclet.variable ? dom.ParameterFlags.Rest : dom.DeclarationFlags.None;
        obj.flags |= doclet.virtual ? dom.DeclarationFlags.Abstract : dom.DeclarationFlags.None;
        obj.flags |= doclet.readonly ? dom.DeclarationFlags.ReadOnly : dom.DeclarationFlags.None;
        obj.flags |= doclet.scope === "static" ? dom.DeclarationFlags.Static : dom.DeclarationFlags.None;
        let cast = obj;
        if (doclet.optional && cast.kind === "property" && cast.flags === dts_dom_1.ParameterFlags.Optional) {
            obj.flags = dom.DeclarationFlags.Optional;
        }
    }
    mapTypesToUnion(types) {
        let domTypes = [];
        types.forEach((type) => {
            domTypes.push(this.mapVariableType(type));
        });
        return dom.create.union(domTypes);
    }
    mapVariableType(variableType) {
        let matches = variableType.match(/(?:Array\.<([^>]+)>)|(?:([^\[]*)\[\])/i);
        if (matches) {
            let type = matches[1] || matches[2];
            if (type === "*" || type === "") {
                // wrong type definition
                return dom.type.any;
            }
            else {
                if (type === "bool") {
                    type = "boolean";
                }
                return dom.type.array(type);
            }
        }
        else {
            if (variableType.match(/array/i) || variableType === "*") {
                return dom.type.any;
            }
            else {
                if (variableType === "bool") {
                    variableType = "boolean";
                }
                if (variableType === "function") {
                    variableType = "Function";
                }
                return variableType;
            }
        }
    }
    parseClass(jsdocItem, domClass) {
        if (!domClass) {
            domClass = dom.create.class(jsdocItem.name);
            domClass.jsDocComment = jsdocItem.classdesc;
        }
        // Add the constructor
        let constructorDeclaration;
        if (jsdocItem.params && jsdocItem.params.length > 0) {
            constructorDeclaration = dom.create.constructor(this.createDomParams(jsdocItem.params));
        }
        else {
            // no params
            constructorDeclaration = dom.create.constructor([]);
        }
        constructorDeclaration.jsDocComment = this.cleanJSDocComment(jsdocItem.comment);
        domClass.members.push(constructorDeclaration);
        return domClass;
    }
    parseEnum(jsdocItem) {
        if (!jsdocItem.isEnum) {
            throw new Error(`item ${jsdocItem.longname} is not an enum`);
        }
        let domEnum = dom.create.enum(jsdocItem.name, (jsdocItem.kind === "constant"));
        if (jsdocItem.properties) {
            for (let property of jsdocItem.properties) {
                let domEnumMember = dom.create.enumValue(property.name, property.defaultvalue);
                domEnumMember.jsDocComment = this.cleanJSDocComment(property.description);
                domEnum.members.push(domEnumMember);
            }
        }
        return domEnum;
    }
    parseFunction(jsdocItem) {
        let functionReturnValue;
        if (jsdocItem.returns && jsdocItem.returns.length > 0) {
            if (jsdocItem.returns[0].type) {
                functionReturnValue = this.mapTypesToUnion(jsdocItem.returns[0].type.names);
            }
            else {
                // the jsdoc comment is incomplete, there is no type information for the return value
                functionReturnValue = dom.type.any;
            }
        }
        else {
            functionReturnValue = dom.type.void;
        }
        let domFunction;
        if (jsdocItem.params && jsdocItem.params.length > 0) {
            domFunction = dom.create.function(jsdocItem.name, this.createDomParams(jsdocItem.params, jsdocItem.name), functionReturnValue);
        }
        else {
            // no params => create a single function declaration
            domFunction = dom.create.function(jsdocItem.name, [], functionReturnValue);
        }
        return domFunction;
    }
    parseInterface(jsdocItem) {
        return dom.create.interface(jsdocItem.name);
    }
    parseMember(jsdocItem) {
        if (jsdocItem.isEnum) {
            throw new Error(`item ${jsdocItem.longname} is an enum`);
        }
        let propertyType = dom.type.any;
        if (jsdocItem.type && jsdocItem.type.names.length > 0) {
            let domTypes = [];
            jsdocItem.type.names.forEach((typeName) => {
                domTypes.push(this.mapVariableType(typeName));
            });
            propertyType = dom.create.union(domTypes);
        }
        return dom.create.property(jsdocItem.name, propertyType);
    }
    parseModule(jsdocItem) {
        return dom.create.module(jsdocItem.name);
    }
    parseNamespace(jsdocItem) {
        return dom.create.namespace(jsdocItem.name);
    }
    parseTypeDefinition(jsdocItem) {
        let domInterface = dom.create.interface(jsdocItem.name);
        if (jsdocItem.properties) {
            for (let property of jsdocItem.properties) {
                let propertyType = dom.type.any;
                if (property.type) {
                    propertyType = this.mapTypesToUnion(property.type.names);
                }
                let domProperty = dom.create.property(property.name, propertyType);
                domProperty.jsDocComment = this.cleanJSDocComment(property.comment) || property.description; // normally the property 'comment' is for these types empty
                this.handleFlags(property, domProperty);
                domInterface.members.push(domProperty);
            }
        }
        return domInterface;
    }
}
exports.JSDocTsdParser = JSDocTsdParser;
//# sourceMappingURL=jsdoc-tsd-parser.js.map