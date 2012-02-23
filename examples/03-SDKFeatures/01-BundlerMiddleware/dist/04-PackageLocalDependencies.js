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
    require.memoize("/main.js", define('',['require','exports','module','./greetings'],function(require, exports, module)
    {
    	// One-way dependency.
    	var GREETINGS = require("./greetings");
    
    	exports.main = function(options)
    	{
    		module.log(GREETINGS.getGreeting());
    	};
    }));
    require.memoize("/greetings.js", define('',['require','exports','module','./words/hello'],function(require, exports, module)
    {
    	// Circular dependency.
    	var HELLO = require("./words/hello");
    
    	exports.getGreeting = function()
    	{
    		return HELLO.getWord() + " from " + HELLO.getName() + "!";
    	}
    
    	exports.getName = function()
    	{
    		return "04-PackageLocalDependencies";
    	}
    }));
    require.memoize("/words/hello.js", define('',['require','exports','module','../greetings'],function(require, exports, module)
    {
    	// Circular dependency.
    	var GREETINGS = require("../greetings");
    
    	exports.getWord = function()
    	{
    		return "Hello";
    	}
    
    	exports.getName = function()
    	{
    		return GREETINGS.getName();
    	}
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});