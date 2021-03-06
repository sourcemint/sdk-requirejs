// @sourcemint-bundle-ignore: 
require.bundle("", function(require)
{
// @sourcemint-bundle-header: {}
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
// @sourcemint-bundle-module: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js","fileMtime":1329942248000,"id":"/main.js"}
require.memoize("/main.js", 
define('',['require','exports','module','helpers/greetings','helpers/logger'],function(require, exports, module)
{
    // One-way dependency.
    var GREETINGS = require("helpers/greetings"),
        LOGGER = require("helpers/logger");

    exports.main = function(options)
    {
        LOGGER.log(GREETINGS.getGreeting());
    }
})
);
// @sourcemint-bundle-module: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/greetings.js","fileMtime":1329942243000,"id":"3846e7cb8c5068a3a8f59043bfdaaa96897b089e/greetings.js"}
require.memoize("3846e7cb8c5068a3a8f59043bfdaaa96897b089e/greetings.js", 
define('',['require','exports','module','package/hello'],function(require, exports, module)
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
})
);
// @sourcemint-bundle-module: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/logger.js","fileMtime":1329942261000,"id":"3846e7cb8c5068a3a8f59043bfdaaa96897b089e/logger.js"}
require.memoize("3846e7cb8c5068a3a8f59043bfdaaa96897b089e/logger.js", 
define('',['require','exports','module'],function(require, exports, module)
{
    exports.log = function(message)
    {
        module.log(message);
    }
})
);
// @sourcemint-bundle-module: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/words/hello.js","fileMtime":1329942272000,"id":"85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/words/hello.js"}
require.memoize("85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/words/hello.js", 
define('',['require','exports','module','package/greetings','letters/H'],function(require, exports, module)
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
})
);
// @sourcemint-bundle-module: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/H.js","fileMtime":1329942281000,"id":"d454d868fdea8af72464fd166ca6969dae684108/H.js"}
require.memoize("d454d868fdea8af72464fd166ca6969dae684108/H.js", 
define('',['require','exports','module'],function(require, exports, module)
{
    exports.getLetter = function()
    {
        return "H";
    }
})
);
// @sourcemint-bundle-descriptor: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/package.json","id":"/package.json"}
require.memoize("/package.json", 
{"main":"/main.js","mappings":{"helpers":"3846e7cb8c5068a3a8f59043bfdaaa96897b089e"},"directories":{"lib":""}}
);
// @sourcemint-bundle-descriptor: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/package.json","id":"3846e7cb8c5068a3a8f59043bfdaaa96897b089e/package.json"}
require.memoize("3846e7cb8c5068a3a8f59043bfdaaa96897b089e/package.json", 
{"mappings":{"package":"85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3"},"directories":{"lib":""}}
);
// @sourcemint-bundle-descriptor: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/package.json","id":"85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/package.json"}
require.memoize("85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/package.json", 
{"mappings":{"package":"3846e7cb8c5068a3a8f59043bfdaaa96897b089e","letters":"d454d868fdea8af72464fd166ca6969dae684108"},"directories":{"lib":"words"}}
);
// @sourcemint-bundle-descriptor: {"file":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/package.json","id":"d454d868fdea8af72464fd166ca6969dae684108/package.json"}
require.memoize("d454d868fdea8af72464fd166ca6969dae684108/package.json", 
{"directories":{"lib":""},"mappings":{}}
);
// @sourcemint-bundle-ignore: 
});
// @sourcemint-bundle-report: {"sourceReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js":{"staticLinks":{"helpers/greetings":"helpers/greetings","helpers/logger":"helpers/logger"},"fileMtime":1329942248000,"treatAs":"js-module"}},"mappings":{"helpers":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/greetings.js":{"staticLinks":{"package/hello":"package/hello"},"fileMtime":1329942243000,"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/logger.js":{"staticLinks":{},"fileMtime":1329942261000,"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/words/hello.js":{"staticLinks":{"package/greetings":"package/greetings","letters/H":"letters/H"},"fileMtime":1329942272000,"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA","letters":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/H.js":{"staticLinks":{},"fileMtime":1329942281000,"treatAs":"js-module"}},"mappings":{}}}},"mappedReport":{"mainPackage":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies","packages":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies":{"mainModule":{"path":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js"},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js":{"staticLinks":{"helpers/greetings":"helpers/greetings","helpers/logger":"helpers/logger"},"fileMtime":1329942248000,"treatAs":"js-module"}},"mappings":{"helpers":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/greetings.js":{"staticLinks":{"package/hello":"package/hello"},"fileMtime":1329942243000,"treatAs":"js-module"},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/logger.js":{"staticLinks":{},"fileMtime":1329942261000,"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/words/hello.js":{"staticLinks":{"package/greetings":"package/greetings","letters/H":"letters/H"},"fileMtime":1329942272000,"treatAs":"js-module"}},"mappings":{"package":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA","letters":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC"}},"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC":{"mainModule":{},"modules":{"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/H.js":{"staticLinks":{},"fileMtime":1329942281000,"treatAs":"js-module"}},"mappings":{}}}},"bundleReport":{"mainBundle":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/03-SDKFeatures/01-BundlerMiddleware/dist/05-CrossPackageDependencies.js","packages":{"3846e7cb8c5068a3a8f59043bfdaaa96897b089e":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA","85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB","d454d868fdea8af72464fd166ca6969dae684108":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC"},"modules":{"/main.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/main.js","3846e7cb8c5068a3a8f59043bfdaaa96897b089e/greetings.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/greetings.js","3846e7cb8c5068a3a8f59043bfdaaa96897b089e/logger.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageA/logger.js","85a2f7604f8fee58ccf82a84aedd37ca20f9a9d3/words/hello.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageB/words/hello.js","d454d868fdea8af72464fd166ca6969dae684108/H.js":"/pinf/workspaces/github.com/sourcemint/sdk-requirejs/0/examples/01-LoaderFeatures/05-CrossPackageDependencies/packages/packageC/H.js"}}}
