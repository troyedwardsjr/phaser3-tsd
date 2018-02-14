const dom = require('dts-dom');

const convertMethods = () => ({

	params: (params) => {
		let paramsDOM = [];
		if (params) {
			paramsDOM = params.map((param) => {
				return dom.create.parameter(param.name, param.type.names[0]);
			})
		}
		return paramsDOM;
	},

	returns: (returns) => {
		let returnsDOM = dom.type.void;
		if (returns) {
			returnsDOM = rtn.type.names[0];//rtn.type.names[0]
		}
		return returnsDOM;
	}

});

const convert = (phaserModuleDOM, usefulData) => {
	usefulData.forEach((docObj) => {
		switch (docObj.kind) {
			case 'function':
				phaserModuleDOM.members.find((elm) => {
					return elm.name == 'Actions';
				})
				.members.push(dom.create.method(
					docObj.name,
					convertMethods().params(docObj.params),
					convertMethods().returns(docObj.returns),
					dom.DeclarationFlags.Static // scope:
				));
				//.members.push(dom.create.const(docObj.name, 'any'));
				break;
		}
	});
}
/*
[dom.create.parameter('x', dom.type.number)],
					dom.type.void,
					dom.DeclarationFlags.Optional));
					*/

module.exports = convert;


/*
const convertJS = (jsFile) => {
	console.log(`Converting ${jsFile}`);

	parser(jsFile, function(error, jsdocOutput) {
		const usefulData = jsdocParse(jsdocOutput);
		console.log(usefulData);
	});
}
*/