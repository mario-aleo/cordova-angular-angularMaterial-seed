"use strict";

angular.module("ngapp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise("/main");
    
    $stateProvider.state("main", {
        url: "/main",
        templateUrl: "app/components/main/main.html",
        title: "Seed",
        controller: "MainController",
        controllerAs: "main"
    });
    
}]);