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
    require.memoize("/main.js", define('',['require','exports','module','pkg/lib/from.txt'],function(require, exports, module)
    {
        exports.main = function(options)
        {
            var deferred = require.API.Q.defer();
    
            
            var uri1 = require.nameToUrl("./hello.txt");
    
            if (uri1 !== (require.sandbox.id + require.id("./hello.txt")))
            {
                throw new Error("Resolved URIs do not match!");
            }
            
            
            // Link the sub-package so it is included in the bundle (because we just have a text file in it
            // and no modules that are linked elsewhere).
            require("pkg/lib/from.txt");
            // Now we can resolve a URI to it.
            var uri2 = require.nameToUrl("pkg/lib/from.txt")
            if (uri2 !== (require.sandbox.id + require.id("pkg/lib/from.txt")))
            {
                throw new Error("Resolved URIs do not match!");
            }
    
    
            require.API.JQUERY(function($)
            {
                $.get(uri1, function(data1)
                {
                    $.get(uri2, function(data2)
                    {
                        require.API.Q.call(function()
                        {
                            if (data1 !== "Hello")
                            {
                                throw new Error("Loaded resource does not have correct content!");
                            }
                            if (data2 !== "from")
                            {
                                throw new Error("Loaded resource does not have correct content!");
                            }
        
                            module.log(data1 + " " + data2 + " 08-ResourceURI!");
        
                        }).then(deferred.resolve, deferred.reject);
                    });
                });
            });
            
            return deferred.promise;
        }
    }));
    require.memoize("436d50079c55540d6e700629655409d32218625e/lib/from.txt", "from");
    require.memoize("/package.json", {"main":"/main.js","mappings":{"pkg":"436d50079c55540d6e700629655409d32218625e"},"directories":{"lib":""}});
    require.memoize("436d50079c55540d6e700629655409d32218625e/package.json", {"directories":{"lib":"lib"},"mappings":{}});
});