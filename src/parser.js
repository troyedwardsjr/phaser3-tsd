const fs = require('fs');
const os = require('os');
const path = require('path');
const child = require('child_process');

function locateJSDocCommand(dir) {
	var executable = os.platform() === 'win32' ? 'jsdoc.cmd' : 'jsdoc',
	cmd;
	
	dir = path.resolve(dir);
	
	while (dir) {
		try {
			cmd = path.join(dir, 'node_modules', '.bin', executable);
			// End the search if the command is found.
			// If not found, an exception is thrown.
			fs.statSync(cmd);
			break;
			
		} catch (ex) {
			cmd = null;
			
			// Otherwise, iterate to the parent directory, if possible.
			if (path.dirname(dir) === dir) {
				break;
			}
			
			dir = path.resolve(path.dirname(dir));
		}
	}
	
	return cmd;
}

function jsdocParser(filename, cb) {
	var cmd = locateJSDocCommand(__dirname);
	
	if (!cmd) {
		cb(new Error('Could not find jsdoc command.'), null);
		return;
	}

	fs.writeFile('jsdoc-out/jsdoc.json', "");

	const proc = child.spawn(cmd, ['-X', '-r', filename]);

	proc.stdout.on('data', function (data) {
		fs.appendFileSync('jsdoc-out/jsdoc.json', data);
	});

	proc.stderr.on('data', function (data) {
		//console.log('stderr: ' + data);
	});

	proc.on('close', function (code) {
			console.log('child process exited with code ' + code);
			cb();
	});

	console.log("Processing JSDocs...");
}

jsdocParser._onComplete = function(cb, error, stdout) {
	if (error) {
		cb(error, null);
		return;
	}
	
	var parsed;
	
	try {
		parsed = JSON.parse(stdout);
	} catch (ex) {
		parsed = null;
		error = ex;
	}
	
	cb(error, parsed);
};

module.exports = jsdocParser;