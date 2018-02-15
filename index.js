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

const transpileLoop = (srcFiles) => {
	let promiseBuf = [];
	let fileIndex = 0;

	const processFiles = () => {
		// Create only 5 processes before converting in order not to flood.
		for (i = 0; i < fileIndex + 5; i++) {
			if (i >= srcFiles.length) {break;}
			// Push promise with src file name.
			promiseBuf.push(parser(srcFiles[i]));
		}
		fileIndex += 5;
		
		if (promiseBuf.length > 0) {
			Promise.all(promiseBuf).then((procOutArray) => {
				procOutArray.forEach((result) => {
					const usefulDocData = JSON.parse(result.stdout);
					convert(phaserModuleDOM, usefulDocData);
				});
				
				console.log(dom.emit(phaserModuleDOM));
				console.log(`Files processed: ${fileIndex}`);
				
				// Clear promise buffer and start process again.
				promiseBuf = [];
				processFiles();
			})
		}
	};

	processFiles();
}

const transpile = () => {
	//var srcFileName = readPhaserSrc("./phaser-src/")[0];
	var srcFiles = readPhaserSrc("./phaser-src/actions/");
	transpileLoop(srcFiles);
}

const transpiler = (() => {
	// Create namespace for each src namespace.
	phaserSrcNs.forEach((cls) => {
		phaserModuleDOM.members.push(dom.create.class(cls, 0));
	});

	transpile();
})();

