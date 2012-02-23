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
        exports.main = function(options)
        {			
        	module.log("Hello from 12-Environment!");
        	
        	if (module.id !== "/main.js")
        	{
        		throw new Error("`module.id` has incorrect value!");
        	}
        	
        	if (typeof require !== "function")
        	{
        		throw new Error("`require` is not a function!");
        	}
        
        	if (typeof require.id !== "function")
        	{
        		throw new Error("`require.id` is not a function!");
        	}
        
        	if (typeof require.async !== "function")
        	{
        		throw new Error("`require.async` is not a function!");
        	}
        
        	if (typeof require.sandbox !== "function")
        	{
        		throw new Error("`require.sandbox` is not a function!");
        	}
        	
        	if (typeof require.sandbox.id !== "string")
        	{
        		throw new Error("`require.sandbox.id` is not a string!");
        	}
        }
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});