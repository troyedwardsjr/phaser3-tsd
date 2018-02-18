const fs = require('fs')
const sceneProps = require('./scene-props.json');

const convertJSDoc = (err, contents) => {
	if(err) {
		return console.log(err);
	}

	const docData = JSON.parse(contents);
	const outPath = 'out/scene-props.d.ts';

	let outFile = "";

	for (var key in sceneProps) {
		const scenePropKey = key;
		const scenePropClass = sceneProps[key];
		for (i = 0; i < docData.length; i++) {
			const docObj = docData[i];
			if(docObj.name === scenePropClass && docObj.kind === "class") {
				outFile = outFile.concat(docObj.comment);
				outFile = outFile.concat(`\n${scenePropKey}: ${docObj.longname};\n\n`);
			}
		}
	}

	console.log(outFile);

	fs.writeFile(outPath, outFile, (err) => {
			if(err) {
					return console.log(err);
			}
			console.log(`File was written to ${outPath}`);
	});

}

fs.readFile('jsdoc-out/jsdoc.json', 'utf8', convertJSDoc);

/*
pluginManager.installLocal(this, GetPhysicsPlugins(this));

var jsonOut = {};
for(var key in this.add.scene) {
	jsonOut[key] = this.add.scene[key].constructor.name;
}
console.log(JSON.stringify(jsonOut));
*/