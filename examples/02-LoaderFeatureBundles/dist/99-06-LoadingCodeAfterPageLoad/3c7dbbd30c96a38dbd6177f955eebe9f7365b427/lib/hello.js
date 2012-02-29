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