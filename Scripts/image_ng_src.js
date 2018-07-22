/// <reference path="angular.min.js" />


var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var image={
            name: "India",
            capital:"Delhi",
            flag: "/Images/flag.jpg"
        };
        $scope.image = image;
    });
console.log("Script executed");