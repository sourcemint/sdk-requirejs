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
    require.memoize("/main.js", define('',['require','exports','module','./hello.js','./hello.txt'],function(require, exports, module)
    {
        var TEXT1 = require("./hello.js"),
            TEXT2 = require("./hello.txt");
    
        exports.main = function(options)
        {
            var TEXT = TEXT1 + TEXT2.replace(" \\ \" 0 - _ . ! ~ * ' ( ) ; , / ? : @ & = + $", "");
    
            if (TEXT.length != 5)
            {
                throw new Error("Text was not decoded properly!");
            }
    
            module.log(TEXT + " from 07-TextModule!");
        }
    }));
    require.memoize("/hello.js", "Hello");
    require.memoize("/hello.txt", "%20%5C%20%22%200%20-%20_%20.%20!%20~%20*%20'%20(%20)%20%3B%20%2C%20%2F%20%3F%20%3A%20%40%20%26%20%3D%20%2B%20%24");
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});