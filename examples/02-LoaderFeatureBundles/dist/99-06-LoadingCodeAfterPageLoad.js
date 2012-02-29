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
    require.memoize("/main.js", // @see http://requirejs.org/docs/api.html#afterload
    
    define('',['require','exports','module'],function(require, exports, module)
    {
        var Q;
    
        exports.main = function(options)
        {
            Q = require.API.Q;
            
            var result = Q.defer();
    
            module.log("Hello from 99-06-LoadingCodeAfterPageLoad!");
    
            var extraModuleID = "./ExtraModule";
    
            require([extraModuleID], function(EXTRA_MODULE)
            {
                EXTRA_MODULE.init().then(result.resolve, result.reject);
            });
    
            return result.promise;
        }
    
        exports.getExtraModuleGreeting = function()
        {
            var result = Q.defer();
    
            var extraModuleID = "pkg/hello";
    
            require([extraModuleID], function(EXTRA_MODULE)
            {
                result.resolve(EXTRA_MODULE.getHello() + " from 99-06-LoadingCodeAfterPageLoad/ExtraModule!");
            });
    
            return result.promise;
        }
    }));
    require.memoize("/package.json", {"main":"/main.js","mappings":{"pkg":"3c7dbbd30c96a38dbd6177f955eebe9f7365b427"},"directories":{"lib":""}});
    require.memoize("3c7dbbd30c96a38dbd6177f955eebe9f7365b427/package.json", {"directories":{"lib":"lib"},"mappings":{}});
});