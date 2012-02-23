
// @see http://requirejs.org/docs/api.html#afterload

define(function(require, exports, module)
{
    var Q;

    exports.main = function(options)
    {
        Q = require.API.Q;
        
        var result = Q.defer();

        module.log("Hello from 99-06-LoadingCodeAfterPageLoad!");

        var extraModuleID = "./ExtraModule";

        require([extraModuleID], function(EXTRA_MODULE)
        {
            EXTRA_MODULE.init();

            result.resolve();
        });

        return result.promise;
    }

    exports.getExtraModuleGreeting = function()
    {
        return "Hello from 99-06-LoadingCodeAfterPageLoad/ExtraModule!";
    }
});
