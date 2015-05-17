(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun)

    function appRun(routehelper) {
        routehelper.setStates([
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404',
                    data: {
                    }              
                }
            }
        ]); 
    }

})();
