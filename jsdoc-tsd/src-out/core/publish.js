"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const shelljs = require("shelljs");
const jsdoc_tsd_parser_1 = require("./jsdoc-tsd-parser");
/**
 * Entry-Point of jsdoc. Gets called by the jsdoc-module to generate the docs.
 * @param {TAFFY} data - The TaffyDB containing the data that jsdoc parsed.
 * @param {*} opts - Options passed into jsdoc.
 */
function publish(data, opts) {
    // remove undocumented stuff.
    data({ undocumented: true }).remove();
    // get the jsdoc results
    const jsdocResults = data().get();
    let parser;
    if (opts.configure) {
        parser = new jsdoc_tsd_parser_1.JSDocTsdParser(JSON.parse(fs.readFileSync(opts.configure, { encoding: "utf-8" })));
    }
    else {
        parser = new jsdoc_tsd_parser_1.JSDocTsdParser();
    }
    // parse the results
    parser.parse(jsdocResults);
    // Write the output
    var outputDir, outputFilePath;
    if (opts.destination.endsWith(".d.ts")) {
        outputFilePath = opts.destination;
        outputDir = path.dirname(outputFilePath);
    }
    else {
        outputDir = opts.destination;
        outputFilePath = path.join(outputDir, "jsdoc-results.d.ts");
    }
    if (!fs.existsSync(outputDir)) {
        try {
            shelljs.mkdir("-p", outputDir);
        }
        catch (err) {
            throw new Error("Can't create output directory '" + outputDir + "': " + err);
        }
    }
    try {
        fs.writeFileSync(outputFilePath, parser.resolveResults());
    }
    catch (err) {
        throw new Error("Can't write results to file '" + outputFilePath + "': " + err);
    }
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map