var app = angular.module("RoleManagement", []);

//controller
app.controller("RoleController", 
	function($scope, $http) {
		$http.get('http://localhost:8080/roles')
			.then(function successCallback(response) {
				$scope.roles = response.data;
			});
	});