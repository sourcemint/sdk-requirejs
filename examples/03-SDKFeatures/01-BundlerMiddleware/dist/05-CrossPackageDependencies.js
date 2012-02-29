// @sourcemint-bundle-partition-map: {"report":[3420,10217]}                                                                                                                          
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
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js":{"staticLinks":{"helpers/greetings":"helpers/greetings","helpers/logger":"helpers/logger"},"treatAs":"js-module"}},"mappings":{"helpers":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/greetings.js":{"staticLinks":{"package/hello":"package/hello"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/logger.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/words/hello.js":{"staticLinks":{"package/greetings":"package/greetings","letters/H":"letters/H"},"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA","letters":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/H.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js":{"staticLinks":{"helpers/greetings":"helpers/greetings","helpers/logger":"helpers/logger"},"treatAs":"js-module"}},"mappings":{"helpers":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/greetings.js":{"staticLinks":{"package/hello":"package/hello"},"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/logger.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/words/hello.js":{"staticLinks":{"package/greetings":"package/greetings","letters/H":"letters/H"},"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA","letters":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/H.js":{"staticLinks":{},"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/03-SDKFeatures/01-BundlerMiddleware/dist/05-CrossPackageDependencies.js","packages":{"3846e7cb8c5068a3a8f59043bfdaaa96897b089e":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA","85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB","d454d868fdea8af72464fd166ca6969dae684108":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC"},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js","3846e7cb8c5068a3a8f59043bfdaaa96897b089e/greetings.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/greetings.js","3846e7cb8c5068a3a8f59043bfdaaa96897b089e/logger.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/logger.js","85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/words/hello.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/words/hello.js","d454d868fdea8af72464fd166ca6969dae684108/H.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/H.js"}}}
