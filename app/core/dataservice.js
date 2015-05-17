(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('dataservice', dataservice);

	function dataservice($http, mockserver) {

		var service = {
			getLocalDeals: getLocalDeals,
		};

		return service;



		function sendPostRequest(message, url) {
			message = JSON.stringify(message);
			console.log("MESSAGE:");
			console.log(message);
			return $http({
					method: 'POST',
					url: url,
					data: "message=" + message,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
				.then(function(response) {
					console.log(response);
					return response.data;
				});    
		}

		function sendGetRequest(url) {
			return $http({
				method: 'GET',
				url: url,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.then(function(response) {
				return response.data;
			});
			/*$http.get(url).then(function(response) {
				return response.data;
			})*/
		}

		function getLocalDeals() {
			var url = 'http://45.55.252.241/api/results.php?country=united%20kingdom&city=reading';
			return sendGetRequest(url);
			//return mockserver.getLocalDeals();
		}


		/*function login(credentials) {
			var message = {
				request_type: 'log_in',
				username: credentials.username,
				password: credentials.password
			};
			return sendPostRequest(message);
		}*/

	}
})();
