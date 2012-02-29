// @sourcemint-bundle-partition-map: {"report":[1251,2684]}                                                                                                                           
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
    require.memoize("/main.js", define('',['require','exports','module'],function(require, exports, module)
    {
        return {
            main: function(options)
            {
                module.log("Hello from 02-ReturnExports!");
            }
        };
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports/main.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports/main.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/02-LoaderFeatureBundles/dist/02-ReturnExports.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/02-ReturnExports/main.js"}}}
