'use strict';

define([], function () {
    var routeResolver, servicesApp;

    routeResolver = function () {

        //Providers must define $get factory method.
         this.$get = function () {
            return this;
        };

        this.routeDependencyResolver = function () {
        // Method to resolve and load dependencies of a route to facilitate dynamic loading
           var resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply()
                });

                return defer.promise;
            };

            return {
                resolveDependencies: resolveDependencies
            }
        }
    };

    servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()    
    servicesApp.provider('routeResolver', routeResolver);
});