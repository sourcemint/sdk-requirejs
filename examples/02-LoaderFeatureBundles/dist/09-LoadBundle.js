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
    
            module.log("Hello from 09-LoadBundle!");
    
            var extraModuleID = "./ExtraModule";
    
            require.async(extraModuleID, function(EXTRA_MODULE)
            {
                EXTRA_MODULE.init();
    
                result.resolve();
            });
    
            return result.promise;
        }
    
        exports.getExtraModuleGreeting = function()
        {
            return "Hello from 09-LoadBundle/ExtraModule!";
        }
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});