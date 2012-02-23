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
    require.memoize("/main.js", // @see http://requirejs.org/docs/api.html#funcmodule
    
    define('',["module", "./word"], function(module, WORD)
    {
        return {
            main: function(options)
            {
                module.log(WORD() + " from 99-04-DefineaModuleAsAFunction!");
            }
        };
    }));
    require.memoize("/word.js", define('',[],function()
    {
        return function()
        {
            return "Hello";
        };
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});