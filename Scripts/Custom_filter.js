/// <reference path="angular.js" />

var MyApp = angular
    .module("myModule", [])
    .filter("gender", function () {
        return function (gender) {
            switch (gender) {
                case 1:
                    return "Male";
                case 2:
                    return "Female";
                case 3:
                    return "Transgender";
            }
        }

    })
    .controller("myController", function ($scope) {
        var Members = [
            { Name: "Nadeem", gen: 1, salary: 25000 },
            { Name: "Rashmi", gen: 2, salary: 24000 },
            { Name: "Nimish", gen: 1, salary: 35000 },
            { Name: "Subah", gen: 2, salary: 45000 },
            { Name: "Shyam", gen: 3, salary: 55000 }
        ];
        $scope.x = Members;
    });