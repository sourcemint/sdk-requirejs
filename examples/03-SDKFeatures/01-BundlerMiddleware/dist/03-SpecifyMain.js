// @sourcemint-bundle-partition-map: {"report":[1214,2639]}                                                                                                                           
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
    require.memoize("/init.js", define('',['require','exports','module'],function(require, exports, module)
    {
        exports.main = function(options)
        {
            module.log("Hello from 03-SpecifyMain!");
        }
    }));
    require.memoize("/package.json", {"main":"/init.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain/init.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain/init.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain/init.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain/init.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/03-SDKFeatures/01-BundlerMiddleware/dist/03-SpecifyMain.js","packages":{},"modules":{"/init.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/03-SpecifyMain/init.js"}}}
