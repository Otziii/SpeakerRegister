var SR = angular.module('SR', ['ngRoute']);

SR.config(['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider, adalProvider) {
        $routeProvider
            .when("/register", {
                controller: "registerCtrl",
                templateUrl: "/Views/register.html"
            })
            /*
            .when("/speaker/:id", {
                controller: "speakerCtrl",
                templateUrl: "/Views/register.html"
            })
            */
            .otherwise({
                redirectTo: "/register"
            });
    }]);

SR.run(function () {
    
});