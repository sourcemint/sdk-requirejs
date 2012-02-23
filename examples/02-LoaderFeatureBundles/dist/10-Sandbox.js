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