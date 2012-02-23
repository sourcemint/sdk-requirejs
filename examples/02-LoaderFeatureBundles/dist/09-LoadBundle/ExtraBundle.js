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
    require.memoize("/ExtraBundle.js", define('',['require','exports','module','./main.js'],function(require, exports, module)
    {
        var MAIN = require("./main.js");
    
        exports.init = function()
        {
            module.log(MAIN.getExtraBundleGreeting());
        }
    }));
    require.memoize("/package.json", {"main":"/ExtraBundle.js","directories":{"lib":""},"mappings":{}});
});