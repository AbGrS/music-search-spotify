/// <reference path="../views/Home.html" />
/**
 * Created by RahulD1 on 23-02-2016.
 */
(function () {

    'use strict';

    angular.module('Home', ['ui.router']);

    angular.module('Home').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                controller: 'MusicController as musicCtrl',
                templateUrl: '../views/Music.html'
            });

    });

    angular.module('Home').filter('unsafe', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });


})();