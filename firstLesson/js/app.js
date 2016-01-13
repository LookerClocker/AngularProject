// app,js

(function () {

    //model

    var model = {

        user: "Johnny",
        courses: [{name: "ReactJS", passed: false},
            {name: "HTML CSS", passed: true},
            {name: "Angular", passed: false},
            {name: "HTML CSS", passed: true}]
    };

    //module

    var module = angular.module("TeachModule", []);

    //controller

    module.controller("TeachModuleCtrl", function ($scope) {

        $scope.data = model;


        //behavior
        //add button

        $scope.AddCourse = function(){

            $scope.data.courses.push({
                name: $scope.courseName,
                passed: false
            });

            $scope.courseName = "";
        };

        $scope.SetStyle = function(passed) {
            return passed ? "color: green;" : "color: red;";
        };

        $scope.ShowText = function (passed) {
            return passed ? "Yes" : "No";
        };


    });


}());