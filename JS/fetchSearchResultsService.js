/**
 * Created by RahulD1 on 04-03-2016.
 */
(function() {
    'use strict';

    /**
     *  Module
     *
     * Description
     */
    angular
        .module('Home')
        .service('fetchSearchResults', [ '$http','$httpParamSerializerJQLike', fetchSearchResults]);

    function fetchSearchResults($http, $httpParamSerializerJQLike) {
        // function getMyData(data){
      
        return{
            getData: function(data,url){
                   return $http({
                                method:'GET',
                                url:url || 'https://api.spotify.com/v1/albums',
                                params:data,
                                cache:true

                    });
            }
        
        };
        
    }
    })();

    // $http({
    //     method : "GET",
    //     url : "welcome.htm"
    // }).then