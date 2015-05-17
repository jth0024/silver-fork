(function() {
    'use strict';

    angular
        .module('app.home')
        .run(appRun)

    function appRun(routehelper) {
        routehelper.setStates([
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    controller: 'Home',
                    controllerAs: 'vm',
                    title: 'Home',
                    data: {
                    }              
                }
            }
        ]); 
    }

})();
