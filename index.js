const parser = require('jsdoc3-parser');
const jsdocParse = require('jsdoc-parse');
const dom = require('dts-dom');
const fs = require('fs');
const path = require('path');

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

const transpile = () => {

}

const transpiler = (() => {
	//readPhaserSrc("./phaser-src/").forEach((jsFile) => {
	//	convertJS(jsFile);
	//});
	
	parser(jsFile, function(error, jsdocOutput) {
		const usefulData = jsdocParse(readPhaserSrc("./phaser-src/")[0]);
		console.log(usefulData);
	});

	const phaserPkgModule = dom.create.module('phaser');
	const phaserClass = dom.create.class('Phaser');
	const phaserNamespace = dom.create.namespace('Phaser');
	
	console.log(dom.emit(phaserPkgModule));
	console.log(dom.emit(phaserClass));
	console.log(dom.emit(phaserNamespace));

	//phaserNamespace.members.push();
})();