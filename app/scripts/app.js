'use strict';

/**
 * @ngdoc overview
 * @name taskApp
 * @description
 * # taskApp
 *
 * Main module of the application.
 */
angular
  .module('taskApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngSanitize'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider
      .when("", "/index")
      .otherwise('/index');
    $stateProvider
      .state('index', {
        url: '/index',
        views: {
          '': {
            templateUrl: 'layout/index.html'
          },
          'topbar@index': {
            templateUrl: 'layout/header.html'
          },
          'mains@index': {
            templateUrl: 'layout/main.html'
          },
          'foot@index': {
            templateUrl: 'layout/footer.html'
          }
        }
      })
      .state('index.about', {
        url: 'about',
        views: {
          'mains@index': {
            templateUrl: 'views/about.html'
          }
        }
      })

    //$routeProvider
    //  .when('/', {
    //    templateUrl: 'views/main.html',
    //    controller: 'MainCtrl',
    //    controllerAs: 'main'
    //  })
    //  .when('/about', {
    //    templateUrl: 'views/about.html',
    //    controller: 'AboutCtrl',
    //    controllerAs: 'about'
    //  })
    //  .otherwise({
    //    redirectTo: '/'
    //  });
  });
