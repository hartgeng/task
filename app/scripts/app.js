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
      .state('index.course', {
        parent: 'index',
        url: '/course/:id',
        views: {
          'mains@index': {
            templateUrl: 'course/courseActive.html'
          },
        }
      })
      .state('university', {
        url: '/university',
        views: {
          '': {
            templateUrl: 'layout/index.html',
            controller: 'UniversityCtrl'
          },
          'topbar@university': {
            templateUrl: 'layout/header.html'
          },
          'mains@university': {
            templateUrl: 'university/view.html'
          },
          'foot@university': {
            templateUrl: 'layout/footer.html'
          }
        }
      })
      .state('university.list', {
        parent: 'university',
        url: '/:link',
        views: {
          'mains@university': {
            templateUrl: 'university/school.html'
          },
        }
      })
  });
