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
                                url:url || 'https://api.spotify.com/artist/',
                                params:data,
                                cache:true

                    })
            },
            setRating: function(data,url){
                 return $http({
                                method:'POST',
                                url:url||'http://api.nationposts.com/api/ratings',
                                data:$httpParamSerializerJQLike(data),
                                 headers: {
                                      'Content-Type': 'application/x-www-form-urlencoded'
                                }

                    }).then(function(response){
                        console.log(response);
                    });
            }
        
        };
        
    }
    })();

    // $http({
    //     method : "GET",
    //     url : "welcome.htm"
    // }).then