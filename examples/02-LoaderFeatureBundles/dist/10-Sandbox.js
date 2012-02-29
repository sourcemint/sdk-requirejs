// @sourcemint-bundle-partition-map: {"report":[1807,3180]}                                                                                                                           
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
        var Q;
        
        exports.main = function(options)
        {
        	Q = require.API.Q;
        	
        	var result = Q.defer();
        
        	module.log("Hello from 10-Sandbox!");
        
        	var url = require.sandbox.id + require.id("./SandboxedExtraBundle");
        
        	require.sandbox(url, function(sandbox)
        	{
        		sandbox.main();
        
        		result.resolve();
        	}, {
        		onInitModule: function(moduleInterface, moduleObj)
        		{
        			moduleInterface.log = function()
        			{
        				module.logForModule(moduleObj, arguments);
        			}
        		}
        	});
        
        	return result.promise;
        }
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox/main.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox/main.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/02-LoaderFeatureBundles/dist/10-Sandbox.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/10-Sandbox/main.js"}}}
