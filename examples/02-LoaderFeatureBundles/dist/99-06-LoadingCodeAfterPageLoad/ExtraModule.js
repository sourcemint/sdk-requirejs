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