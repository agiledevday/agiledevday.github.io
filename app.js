angular.module('add', ['ui.router'])
    .controller('MainCtrl', function ($scope) {
        $scope.name = 'World';
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/2014coderetreat");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home.html"
            })
            .state('coderetreat', {
                url: "/coderetreat",
                templateUrl: "partials/coderetreat.html"
            })
            .state('2011', {
                url: "/2011",
                templateUrl: "partials/2011.html"
            })
            .state('2012', {
                url: "/2012",
                templateUrl: "partials/2012.html"
            })
            .state('2013', {
                url: "/2013",
                templateUrl: "partials/2013.html"
            })
            .state('2014', {
                url: "/2014",
                templateUrl: "partials/2014.html"
            })
            .state('2014coderetreat', {
                url: "/2014coderetreat",
                templateUrl: "partials/2014coderetreat.html"
            })
        ;
    });
