"use strict";

angular.module("ngapp", [ "ngTouch", "ui.router", "ngMdIcons", "ngMaterial", "ngCordova" ])

.run(function($rootScope, $cordovaDevice){
    document.addEventListener("deviceready", function () {
        $rootScope.$watch("window.StatusBar", function(newValue, oldValue) {
            StatusBar.overlaysWebView(false);
            StatusBar.backgroundColorByName("black");
            $rootScope.$apply();
        }); 
    }, false);
    
});