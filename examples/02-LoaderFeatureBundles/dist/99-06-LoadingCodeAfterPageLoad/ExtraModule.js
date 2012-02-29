// @sourcemint-bundle-partition-map: {"report":[1552,4628]}                                                                                                                           
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
    require.memoize("/ExtraModule.js", define('',['require','exports','module','./main.js'],function(require, exports, module)
    {
        var MAIN = require("./main.js");
    
        exports.init = function()
        {
            return MAIN.getExtraModuleGreeting().then(function(msg)
            {
                module.log(msg);
            });
        }
    }));
    require.memoize("/package.json", {"main":"/ExtraModule.js","mappings":{"pkg":"3c7dbbd30c96a38dbd6177f955eebe9f7365b427"},"directories":{"lib":""}});
    require.memoize("3c7dbbd30c96a38dbd6177f955eebe9f7365b427/package.json", {"directories":{"lib":"lib"},"main":"/ExtraModule.js","mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/ExtraModule.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/ExtraModule.js":{"staticLinks":{"./main.js":"./main.js"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/main.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{"pkg":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package/ExtraModule.js"},"modules":{},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/ExtraModule.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/ExtraModule.js":{"staticLinks":{"./main.js":"./main.js"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/main.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{"pkg":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package/ExtraModule.js"},"modules":{},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/02-LoaderFeatureBundles/dist/99-06-LoadingCodeAfterPageLoad/./ExtraModule.js","packages":{"3c7dbbd30c96a38dbd6177f955eebe9f7365b427":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/sub-package"},"modules":{"/ExtraModule.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/99-06-LoadingCodeAfterPageLoad/ExtraModule.js"}}}
