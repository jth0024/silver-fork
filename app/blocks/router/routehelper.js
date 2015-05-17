
/* Help configure the state-base ui.router */
(function() {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routehelper', routerHelperProvider);

    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {

        var config = {
            resolveAlways: {}
        };

        //$locationProvider.html5Mode(true);

        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        this.$get = RouterHelper;

        function RouterHelper($location, $rootScope, $state) {

            var service = {
                setStates: setStates,
                go: go
            };

            init();

            return service;

            ///////////////

            function setStates(states) {
                states.forEach(function(state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
            }

            function go(stateName) {
                $state.go(stateName);
            }

            function handleRoutingErrors() {
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        $location.path('/');
                    }
                );

                $rootScope.$on('$stateNotFound', function(event) {
                    event.preventDefault();
                    $state.go('404');
                });

                $urlRouterProvider.otherwise('/');
            }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess', function (event, next, nextParams) {
                    var title = next.title;
                    $rootScope.title = title;
                })
            }


            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

        }
    }
})();
