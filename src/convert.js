const dom = require('dts-dom');

const convert = (phaserModuleDOM, usefulDocData) => {
	usefulDocData.forEach((docObj) => {
		if(!docObj.undocumented && docObj.memberof) {
			switch (docObj.kind) {
				case 'function':
					convertFunction(phaserModuleDOM, docObj);
					break;
			}
		}
	});
}

const convertType = (docType) => {
	switch (docType) {
		case "number":
			return dom.type.number;
		case "integer":
			return dom.type.number;
		case "string":
			return dom.type.string;
		case "boolean":
			return dom.type.boolean;
		case "void":
			return dom.type.void;
		case "object":
			return dom.type.any;
		case "function":
			return dom.type.any;
		case "array":
			return dom.type.array(dom.type.any);
		default:
			return docType;
	}
}

const convertDecFlag = () => {
}

const convertMember = () => {
}

const convertFunction = (phaserModuleDOM, docObj) => {

	const convertParams = (params) => {
		let paramsDOM = [];
		if (params && params.length > 0) {
			paramsDOM = params.map((param) => {
				return dom.create.parameter(param.name, convertType(param.type.names[0]));
			})
		}
		// Returns an array of parameters.
		return paramsDOM;
	}

	const convertReturns = (returns) => {
		let returnsDOM = dom.type.void;
		if (returns && returns.length > 0) {
			returnsDOM = convertType(returns[0].type.names[0]);
		}
		// Returns a single return type.
		return returnsDOM;
	}

	phaserModuleDOM.members.find((elm) => {
		return elm.name == 'Actions';
	})
	.members.push(dom.create.method(
		docObj.name,
		convertParams(docObj.params),
		convertReturns(docObj.returns),
		dom.DeclarationFlags.Static // scope:
	));

};

module.exports = convert;