"use strict";

angular.module("ngapp", [ /*"ngTouch",*/ "ui.router", "ngMdIcons", "ngMaterial", "ngCordova", "ngStorage" ])

.run(function($rootScope, $cordovaDevice, $cordovaStatusbar){
  document.addEventListener("deviceready", function () {
    $cordovaStatusbar.overlaysWebView(false);
    $cordovaStatusbar.backgroundColorByName("black");
  }, false);
});
