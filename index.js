const path = require('path');
const fs = require('fs');

const jsdocParse = require('jsdoc-parse');
const dom = require('dts-dom');

const parser = require('./src/parser');
const convert = require('./src/convert')

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

const transpiler = (() => {
	// Create namespace for each src namespace.
	phaserSrcNs.forEach((cls) => {
		phaserModuleDOM.members.push(dom.create.class(cls, 0));
	});
	
	var srcFileName = readPhaserSrc("./phaser-src/")[0];

	parser(srcFileName).then(result => {
		const usefulData = JSON.parse(result.stdout);
		convert(phaserModuleDOM, usefulData);
		//console.log(phaserModuleDOM.members);
		console.log(dom.emit(phaserModuleDOM));
	})
})();

/*
console.log(dom.emit(phaserPkgModuleDOM));
console.log(dom.emit(phaserClassDOM));
console.log(dom.emit(phaserModuleDOM));)
*/

//readPhaserSrc("./phaser-src/").forEach((jsFile) => {
//	convertJS(jsFile);
//});

/*
const promiseTest = () => {
	return new Promise((resolve, reject) => {
		resolve(dom.emit(phaserModuleDOM));
	});
}
*/