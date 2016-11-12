var app = angular.module("challenge", ['ngRoute']);


app.service(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/details', {
            templateUrl: "views/details.html",
            controller: "DetailsController"
        })
        .when('/education', {
            templateUrl: "views/education.html",
            controller: "EducationController"
        })
        .when("/employment",{
            templateUrl: "views/employment.html",
            controller: "EmploymentController"
        })
        .otherwise('/details');
}]);