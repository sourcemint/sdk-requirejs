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
    require.memoize("3846e7cb8c5068a3a8f59043bfdaaa96897b089e/greetings.js", define('',['require','exports','module','package/hello'],function(require, exports, module)
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
    require.memoize("3846e7cb8c5068a3a8f59043bfdaaa96897b089e/logger.js", define('',['require','exports','module'],function(require, exports, module)
    {
        exports.log = function(message)
        {
            module.log(message);
        }
    }));
    require.memoize("85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/words/hello.js", define('',['require','exports','module','package/greetings','letters/H'],function(require, exports, module)
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
    require.memoize("d454d868fdea8af72464fd166ca6969dae684108/H.js", define('',['require','exports','module'],function(require, exports, module)
    {
        exports.getLetter = function()
        {
            return "H";
        }
    }));
    require.memoize("/package.json", {"main":"/main.js","mappings":{"helpers":"3846e7cb8c5068a3a8f59043bfdaaa96897b089e"},"directories":{"lib":""}});
    require.memoize("3846e7cb8c5068a3a8f59043bfdaaa96897b089e/package.json", {"mappings":{"package":"85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3"},"directories":{"lib":""}});
    require.memoize("85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/package.json", {"mappings":{"package":"3846e7cb8c5068a3a8f59043bfdaaa96897b089e","letters":"d454d868fdea8af72464fd166ca6969dae684108"},"directories":{"lib":"words"}});
    require.memoize("d454d868fdea8af72464fd166ca6969dae684108/package.json", {"directories":{"lib":""},"mappings":{}});
});