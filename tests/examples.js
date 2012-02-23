
var EXAMPLES = require("sourcemint-platform-nodejs/tests/examples");


exports.main = EXAMPLES.main;

exports.extraExamples = [
    "03-SDKFeatures/01-BundlerMiddleware"
];

if (require.main === module) {
    exports.main({
        packageBasePath: __dirname + "/..",
        extraExamples: exports.extraExamples
    });
}
