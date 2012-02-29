// @sourcemint-bundle-partition-map: {"report":[2104,4775]}                                                                                                                           
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
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/main.js":{"staticLinks":{"./greetings":"./greetings"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/greetings.js":{"staticLinks":{"./words/hello":"./words/hello"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/words/hello.js":{"staticLinks":{"../greetings":"../greetings"},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/main.js":{"staticLinks":{"./greetings":"./greetings"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/greetings.js":{"staticLinks":{"./words/hello":"./words/hello"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/words/hello.js":{"staticLinks":{"../greetings":"../greetings"},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/02-LoaderFeatureBundles/dist/04-PackageLocalDependencies.js","packages":{},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/main.js","/greetings.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/greetings.js","/words/hello.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/04-PackageLocalDependencies/words/hello.js"}}}
