const dom = require('dts-dom');

const convert = (phaserModuleDOM, userfulDocData) => {
	userfulDocData.forEach((docObj) => {
		switch (docObj.kind) {
			case 'function':
				convertFunction(phaserModuleDOM, docObj);
				break;
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
		case "array":
			return dom.type.array(dom.type.any);
	}
}

const convertMember = () => {

}

const convertFunction = (phaserModuleDOM, docObj) => {

	const params = (params) => {
		let paramsDOM = [];
		if (params && params.length > 0) {
			paramsDOM = params.map((param) => {
				return dom.create.parameter(param.name, param.type.names[0]);
			})
		}
		return paramsDOM;
	}

	const returns = (returns) => {
		let returnsDOM = dom.type.void;
		if (returns && returns.length > 0) {
			returnsDOM = convertType(returns[0].type.names[0]);
		}
		return returnsDOM;
	}

	phaserModuleDOM.members.find((elm) => {
		return elm.name == 'Actions';
	})
	.members.push(dom.create.method(
		docObj.name,
		params(docObj.params),
		returns(docObj.returns),
		dom.DeclarationFlags.Static // scope:
	));

};

module.exports = convert;