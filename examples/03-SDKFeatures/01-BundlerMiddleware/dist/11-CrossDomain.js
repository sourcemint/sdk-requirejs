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
        
        	module.log("Hello from 11-CrossDomain!");
        
            return Q.all([
        		"https://raw.github.com/sourcemint/loader-js/master/examples/11-CrossDomain/CrossDomainBundle.js",
        		// TODO: Point to `http://sourcemint.com/` URL
        		"http://static.cadorn.net/CrossDomainBundle.js"
        	].map(function(url) {
        		var result = Q.defer();
        
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
            }));
        }
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});