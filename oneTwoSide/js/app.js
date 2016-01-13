// app.js

(function (){
    "use strict";

    var module = angular.module("OneTwoSideConnection", []);

    module.controller("OneTwoSideConnectionCtrl", function($scope){

        $scope.items = [{name: "item 1", value: "1"},
            {name: "item 1", value: "1"},
            {name: "item 2", value: "2"},
            {name: "item 3", value: "3"}
        ];

    });

}());