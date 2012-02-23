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
    require.memoize("/main.js", define('',['require','exports','module','helpers/greetings','helpers/logger'],function(require, exports, module)
    {
        // One-way dependency.
        var GREETINGS = require("helpers/greetings"),
            LOGGER = require("helpers/logger");
    
        exports.main = function(options)
        {
            LOGGER.log(GREETINGS.getGreeting());
        }
    }));
    require.memoize("98aad6c4bc1cf06acc410559835a0db7970fa44e/greetings.js", define('',['require','exports','module','package/hello'],function(require, exports, module)
    {
        var HELLO = require("package/hello");
    
        exports.getGreeting = function()
        {
            return HELLO.getWord() + " from " + HELLO.getName() + "!";
        }
    
        exports.getName = function()
        {
            return "05-CrossPackageDependencies";
        }
    }));
    require.memoize("98aad6c4bc1cf06acc410559835a0db7970fa44e/logger.js", define('',['require','exports','module'],function(require, exports, module)
    {
        exports.log = function(message)
        {
            module.log(message);
        }
    }));
    require.memoize("5ae58a6b31c0e12e4413600daae5dcbf52d7a541/words/hello.js", define('',['require','exports','module','package/greetings','letters/H'],function(require, exports, module)
    {
        var GREETINGS = require("package/greetings");
    
        exports.getWord = function()
        {
            return require("letters/H").getLetter() + "ello";
        }
    
        exports.getName = function()
        {
            return GREETINGS.getName();
        }
    }));
    require.memoize("a5b1eef28641e87e7e0e04557eed4e5f8abb2585/H.js", define('',['require','exports','module'],function(require, exports, module)
    {
        exports.getLetter = function()
        {
            return "H";
        }
    }));
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"98aad6c4bc1cf06acc410559835a0db7970fa44e"},"directories":{"lib":""}});
    require.memoize("98aad6c4bc1cf06acc410559835a0db7970fa44e/package.json", {"mappings":{"package":"5ae58a6b31c0e12e4413600daae5dcbf52d7a541"},"directories":{"lib":""}});
    require.memoize("5ae58a6b31c0e12e4413600daae5dcbf52d7a541/package.json", {"mappings":{"package":"98aad6c4bc1cf06acc410559835a0db7970fa44e","letters":"a5b1eef28641e87e7e0e04557eed4e5f8abb2585"},"directories":{"lib":"words"}});
    require.memoize("a5b1eef28641e87e7e0e04557eed4e5f8abb2585/package.json", {"directories":{"lib":""},"mappings":{}});
});