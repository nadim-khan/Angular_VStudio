/// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var Employees = [
            { Name: "Nadeem", Dob: new Date("April 14,1994"), salary: 25000 },
            { Name: "Alpesh", Dob: new Date("May 14,1993"), salary: 125000 },
            { Name: "Shyam", Dob: new Date("july 15,1994"), salary: 325000 },
            { Name: "Nimish", Dob: new Date("April 24,1991"), salary: 30000 },
            { Name: "Rahul", Dob: new Date("August 02,1991"), salary: 165000 },
            { Name: "Vivek", Dob: new Date("April 24,1995"), salary: 26200 },
            { Name: "Ayushman", Dob: new Date("June 24,1981"), salary: 215000 },
            { Name: "Manish", Dob: new Date("May 24,1990"), salary: 115000 }
        ];

        $scope.Employees = Employees;

    }); 