// @sourcemint-bundle-partition-map: {"report":[1197,2959]}                                                                                                                           
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
    require.memoize("/lib/hello.js", define('',['require','exports','module'],function(require, exports, module)
    {
        exports.getHello = function()
        {
            return "Hello";
        }
    }));
    require.memoize("/package.json", {"directories":{"lib":"lib"},"main":"lib/hello.js","mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package/lib/hello.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package/lib/hello.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package/lib/hello.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package/lib/hello.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/02-LoaderFeatureBundles/dist/99-06-LoadingCodeAfterPageLoad/3c7dbbd30c96a38dbd6177f955eebe9f7365b427/lib/hello.js","packages":{},"modules":{"/lib/hello.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package/lib/hello.js"}}}
