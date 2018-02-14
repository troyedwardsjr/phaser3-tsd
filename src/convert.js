
const convert = (phaserModuleDOM, usefulData) => {
	usefulData.forEach((docObj) => {
		switch (docObj.kind) {
			case 'function':
				phaserModuleDOM.members.find((elm) => {
					return elm.name == 'Actions';
				})
				.members.push(dom.create.method(
					docObj.name,
					[dom.create.parameter('x', dom.type.number)],
					dom.type.void,
					dom.DeclarationFlags.Optional));
				//.members.push(dom.create.const(docObj.name, 'any'));
				break;
		}
	});
}

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