/**
 * Created by RahulD1 on 04-03-2016.
 */
(function () {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular
        .module('Home')
        .controller('musicSearchController', ['$scope','fetchSearchResults', musicSearchController]);

    function musicSearchController($scope, fetchSearchResults) {
       $scope.getSearchResults= function(){
         fetchSearchResults.getData({'id':'0OdUWJ0sBjDrqHygGUXeCF'}).then(function(response){
                console.log(response.data);        
            });
       };
    }
})();