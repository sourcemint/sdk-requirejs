// @sourcemint-bundle-ignore: 
require.bundle("", function(require)
{
// @sourcemint-bundle-header: {}
function define(id, dependencies, moduleInitializer)
{
    return function(require, exports, module) {
        if (typeof moduleInitializer === "function") {
            return moduleInitializer.apply(moduleInitializer, dependencies.map(function(name) {
                if (name === "require") return require;
                if (name === "exports") return exports;
                if (name === "module") return module;
                return require(name);
            }))
        } else
        if (typeof dependencies === "object") {
            return dependencies;
        }
    }
}
// @sourcemint-bundle-module: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/main.js","fileMtime":1329939469000,"id":"/main.js"}
require.memoize("/main.js", 
define('',['require','exports','module','./word'],function(require, exports, module)
{
    var WORD = require("./word").word;

    exports.main = function(options)
    {
        module.log(WORD + " from 06-JsonModule!");
    }
})
);
// @sourcemint-bundle-module: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/word.js","fileMtime":1329939505000,"id":"/word.js"}
require.memoize("/word.js", 
define('',{
    word: "Hello"
})
);
// @sourcemint-bundle-descriptor: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/package.json","id":"/package.json"}
require.memoize("/package.json", 
{"main":"/main.js","directories":{"lib":""},"mappings":{}}
);
// @sourcemint-bundle-ignore: 
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/main.js":{"staticLinks":{"./word":"./word"},"fileMtime":1329939469000,"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/word.js":{"staticLinks":{},"fileMtime":1329939505000,"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/main.js":{"staticLinks":{"./word":"./word"},"fileMtime":1329939469000,"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/word.js":{"staticLinks":{},"fileMtime":1329939505000,"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/03-SDKFeatures/01-BundlerMiddleware/dist/06-JsonModule.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/main.js","/word.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/06-JsonModule/word.js"}}}
