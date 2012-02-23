/**
 * Copyright: 2012 Christoph Dorn <christoph@christophdorn.com>
 * License: MIT
 */

// TODO: Get this working in a portable way without relying on `r.js` running on NodeJS.
//	     We can do this by writing an adapter for `r.js` like it has for Java using `sourcemint/stdlib-js` once implemented.

var FS = require("fs"),
	PATH = require("path"),
	Q = require("q"),
	REQUIREJS = require("requirejs"),
	BUNDLER = require("sourcemint-platform-nodejs/lib/bundler");


// TODO: Use helper function from bundler where possible.

REQUIREJS.config({
    nodeRequire: require,
	baseUrl: FS.realpathSync(__dirname + "/../packages/github.com/jrburke/r.js/1/build/jslib"),
});


exports.bundle = BUNDLER.bundle;


exports.parseModule = function(path)
{
	var deferred = Q.defer();

	Q.call(function()
	{
		var report = {};

        if (/\.js$/.test(path))
        {
            REQUIREJS(["parse"], function(PARSE)
            {
    			var code = FS.readFileSync(path).toString();

    			report.staticLinks = {};
    			
    			// TODO: Look for `require([])` separately. At the moment they get included below creating
    			//       a static link were we should really be creating a dynamic link.
    			
    			PARSE.findDependencies(path, code).filter(function(name)
    			{
    				// We don't care about the CommonJS dependencies at this point.
    				if (name === "require" || name === "exports" || name === "module") return false;

    				// Look for certain plugin prefixes and remove.
    				var m;
    				if ((m = name.match(/^([^!]*)!(.*)$/)))
    				{
    				    if (m[1] === "text")
    				    {
    	                    report.staticLinks[name] = m[2];
    				    }
    				    else
    				    {
    				        throw new Error("The '" + m[1] + "' RequireJS plugin is not supported!");
    				    }
    				}
    				else
    				{
    	                report.staticLinks[name] = name;
    				}
    				return true;
    			});
            });
        }

        deferred.resolve(report);

	}).fail(function(err)
	{
        err.stack = "Error '" + err.message + "' while parsing module: " + path + "\n" + err.stack;
        deferred.reject(err);
    });

	return deferred.promise;
}


exports.resolveUri = function(uri)
{
	return Q.call(function()
	{
        if (PATH.existsSync(uri + ".js"))
        {
            return FS.realpathSync(uri + ".js");
        }
		else
        if (PATH.existsSync(uri))
        {
            return FS.realpathSync(uri);
        }
		else
		{
			throw new Error("Could not find file at path: " + uri);
		}
	});
}


exports.remapSources = function(report)
{
	return Q.call(function()
	{
		// We do nothing by default.

		return report;
	});
}


exports.getBundleHeader = function()
{
	return [
	    'function define(id, dependencies, moduleInitializer)',
	    '{',
	    '    return function(require, exports, module) {',
        // @see http://requirejs.org/docs/api.html#cjsmodule
	    '        if (typeof moduleInitializer === "function") {',
	    '            return moduleInitializer.apply(moduleInitializer, dependencies.map(function(name) {',
	    '                if (name === "require") return require;',
	    '                if (name === "exports") return exports;',
	    '                if (name === "module") return module;',
	    '                return require(name);',
	    '            }))',
	    '        } else',
	    // @see http://requirejs.org/docs/api.html#defsimple
        '        if (typeof dependencies === "object") {',
        '            return dependencies;',
        '        }',
	    '    }',
	    '}'
	].join('\n');
}


exports.encodeModule = function(path, canonicalId, staticLinks)
{
	var deferred = Q.defer();

	REQUIREJS(["build", "parse"], function(BUILD, PARSE)
	{
		var originalCode = FS.readFileSync(path).toString(),
		    code;
		
		// Check if module is an ASCII resource file.
        if ([
            "txt",
            "text"
        ].indexOf(PATH.basename(path).replace(/^.*?\.([^\.]*)$/, "$1")) >= 0)
        {
            code = '"' + encodeURIComponent(originalCode) + '"';
        }
        else
        {
            code = BUILD.toTransport(BUILD.makeAnonDefRegExp(""), "", "", path, originalCode, false);
    		
    		// TODO: Do this properly in the step above instead of replacing code below.
    		PARSE.findDependencies(path, originalCode).filter(function(name)
            {
                // We don't care about the CommonJS dependencies at this point.
                if (name === "require" || name === "exports" || name === "module") return false;

                // Look for certain plugin prefixes and remove.
                var m;
                if ((m = name.match(/^([^!]*)!(.*)$/)))
                {
                    if (m[1] === "text")
                    {
                        var re = new RegExp("(['\"]{1})" + escapeRegExp(name) + "(['\"]{1})", "g");
                        code = code.replace(re, "$1" + m[2] + "$2");
                    }
                }
                return true;
            });    		

    		code = code.replace(/;[\s\n]*$/, "");
        }

		deferred.resolve(code);
	});

	return deferred.promise;
}


// @credit http://simonwillison.net/2006/Jan/20/escape/
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
