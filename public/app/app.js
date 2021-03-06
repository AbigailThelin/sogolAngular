angular.module('app', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/')


    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: './views/home.html',
            controller: 'mainCtrl'
        })
        .state('about',{
            url: '/about',
            templateUrl: './views/about.html',
            controller: 'mainCtrl'
        })
})