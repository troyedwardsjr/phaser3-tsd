const path = require('path');
const fs = require('fs');

const jsdocParse = require('jsdoc-parse');
const dom = require('dts-dom');

const parser = require('./src/parser');
const convert = require('./src/convert')

// Create standard wrapper declarations.
const phaserPkgModuleDOM = dom.create.module('phaser');
const phaserClassDOM = dom.create.class('Phaser');
const phaserModuleDOM = dom.create.module('Phaser');

// Phaser source namespaces.
const phaserSrcNs = [
	'Actions', 
	'Animations', 
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

const transpile = (memberList) => {
	var srcFiles = readPhaserSrc("phaser-src/animations/");
	let promiseBuf = [];
	let promiseIndex = 0;

	srcFiles.forEach((filePath) => {
		promiseBuf.push(parser(filePath));

		console.log(`Promises created: ${promiseIndex}`);
		console.log(`File name: ${srcFiles[promiseIndex - 1]}`);

		promiseIndex += 1;
	});

	Promise.all(promiseBuf).then((procOutArray) => {

		procOutArray.forEach((result) => {
			const usefulDocData = JSON.parse(result.stdout);
			convert(phaserModuleDOM, usefulDocData, memberList);
		})

		const domOutput = dom.emit(phaserPkgModuleDOM) + dom.emit(phaserClassDOM) + dom.emit(phaserModuleDOM);
		const outPath = 'out/phaser.d.ts';

		console.log(domOutput);

		fs.writeFile(outPath, domOutput, (err) => {
				if(err) {
						return console.log(err);
				}
				console.log(`File was written to ${outPath}`);
		});
		
	});
}

const transpiler = (() => {
	const memberList = new Map();
	// Create namespace for each src namespace.
	phaserSrcNs.forEach((cls) => {
		const domClass = dom.create.module(cls, 0);
		phaserModuleDOM.members.push(domClass);
		memberList.set(cls, domClass);
	});
	transpile(memberList);
})();