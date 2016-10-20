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
            templateUrl: 'layout/index.html',
            controller: 'IndexCtrl'
          },
          'topbar@index': {
            templateUrl: 'layout/header.html'
          },
          'aside@index': {
            templateUrl: 'layout/aside.html'
          },
          'mains@index': {
            templateUrl: 'course/courseList.html'
          },
          'foot@index': {
            templateUrl: 'layout/footer.html'
          }
        }
      })
      .state('index.all', {
        parent: 'index',
        url: '/:links',
        views: {
          'mains@index': {
            templateUrl: 'course/courseList.html'
          }
        }
      })

      .state('index.about', {
        url: '/about',
        views: {
          'mains@index': {
            templateUrl: 'views/about.html'
          }
        }
      })
  });
