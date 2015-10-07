angular.module('add', ['ui.router'])
    .controller('MainCtrl', function ($scope) {
        $scope.name = 'World';
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                views:{
                    content:{
                        templateUrl: "partials/home.html"
                    }
                }
            })
            .state('coderetreat', {
                url: "/coderetreat",
                views:{
                    content:{
                        templateUrl: "partials/coderetreat.html"
                    }
                }
            })
            .state('2011', {
                url: "/2011",
                views:{
                    content:{
                        templateUrl: "partials/2011.html"
                    }
                }
            })
            .state('2012', {
                url: "/2012",
                views:{
                    content:{
                        templateUrl: "partials/2012.html"
                    }
                }
            })
            .state('2013', {
                url: "/2013",
                views:{
                    content:{
                        templateUrl: "partials/2013.html"
                    }
                }
            })
            .state('2014', {
                url: "/2014",
                views:{
                    content:{
                        templateUrl: "partials/2014.html"
                    }
                }
            })
            .state('2014coderetreat', {
                url: "/2014coderetreat",
                views:{
                    content:{
                        templateUrl: "partials/2014coderetreat.html"
                    }
                }
            })
 	        .state('2015', {
                url: "/2015",
                views:{
                    content:{
                        templateUrl: "partials/2015.html"
                    },
                    partners:{
                        templateUrl: 'partials/2015-partners.html'
                    }
                }
            })
        ;
    });
