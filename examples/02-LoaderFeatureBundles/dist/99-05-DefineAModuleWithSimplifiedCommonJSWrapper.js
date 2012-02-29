// @sourcemint-bundle-partition-map: {"report":[1513,3816]}                                                                                                                           
require.bundle("", function(require)
{
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
    require.memoize("/main.js", // @see http://requirejs.org/docs/api.html#cjsmodule
    
    define('',['require','exports','module','./word'],function(require, exports, module)
    {
        var WORD = require("./word");
    
        exports.main = function(options)
        {
            module.log(WORD() + " from 99-05-DefineAModuleWithSimplifiedCommonJSWrapper!");
        };
    }));
    require.memoize("/word.js", define('',[],function()
    {
        return function()
        {
            return "Hello";
        };
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/main.js":{"staticLinks":{"./word":"./word"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/word.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/main.js":{"staticLinks":{"./word":"./word"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/word.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/02-LoaderFeatureBundles/dist/99-05-DefineAModuleWithSimplifiedCommonJSWrapper.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/main.js","/word.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-05-DefineAModuleWithSimplifiedCommonJSWrapper/word.js"}}}
