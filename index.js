const parser = require('jsdoc3-parser');
const jsdocParse = require('jsdoc-parse');
const dom = require('dts-dom');
const fs = require('fs');
const path = require('path');
const testParser = require('./src/parser');

// Create standard wrapper declarations.
const phaserPkgModuleDOM = dom.create.module('phaser');
const phaserClassDOM = dom.create.class('Phaser');
const phaserModuleDOM = dom.create.namespace('Phaser');

// Phaser source namespaces.
const phaserSrcNs = [
	'Actions', 
	'Animation', 
	'Cache', 
	'Cameras', 
	'Class', 
	'Create', 
	'Curves', 
	'Data', 
	'Display', 
	'DOM', 
	'EventEmitter', 
	'Game',
	'GameObjects', 
	'Geom', 
	'Input', 
	'Loader', 
	'Math', 
	'Physics', 
	'Scene', 
	'Scenes', 
	'Sound', 
	'Structs', 
	'Textures', 
	'Tilemaps', 
	'Time', 
	'Tweens', 
	'Utils'
];

const readPhaserSrc = (dir) =>
  fs.readdirSync(dir)
    .reduce((files, file) =>
      fs.statSync(path.join(dir, file)).isDirectory() ?
        files.concat(readPhaserSrc(path.join(dir, file))) :
        files.concat(path.join(dir, file)),
			[]);
			
const convertJS = (jsFile) => {
	console.log(`Converting ${jsFile}`);

	parser(jsFile, function(error, jsdocOutput) {
		const usefulData = jsdocParse(jsdocOutput);
		console.log(usefulData);
	});
}

const transpile = (usefulData) => {
	
	usefulData.forEach((docObj) => {
		//console.log(docObj.params[0])
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

const promiseTest = () => {
	return new Promise((resolve, reject) => {
		resolve(dom.emit(phaserModuleDOM));
	});
}


const transpiler = (() => {

	//readPhaserSrc("./phaser-src/").forEach((jsFile) => {
	//	convertJS(jsFile);
	//});

	// Create namespace for each src namespace.
	phaserSrcNs.forEach((cls) => {
		phaserModuleDOM.members.push(dom.create.class(cls, 0));
	});
	
	var srcFileName = readPhaserSrc("./phaser-src/")[0];

	testParser(srcFileName).then(result => {
		const usefulData = JSON.parse(result.stdout);
		transpile(usefulData);
		//console.log(phaserModuleDOM.members);
		console.log(dom.emit(phaserModuleDOM));
	})

	/*
	console.log(dom.emit(phaserPkgModuleDOM));
	console.log(dom.emit(phaserClassDOM));
	console.log(dom.emit(phaserModuleDOM));)
	*/
})();