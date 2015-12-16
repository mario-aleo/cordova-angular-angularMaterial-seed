"use strict";

angular.module("ngapp", [ /*"ngTouch",*/ "ui.router", "ngMdIcons", "ngMaterial", "ngCordova", "ngStorage" ])

.run(function($rootScope, $cordovaDevice, $cordovaStatusbar){
  document.addEventListener("deviceready", function () {
    $cordovaStatusbar.overlaysWebView(false);
    $cordovaStatusbar.backgroundColorByName("black");
  }, false);
  /*document.addEventListener("backbutton", function (e) {
      if($state.is('init')){
        navigator.app.exitApp();
      }  else{
        e.preventDefault();
      }
    }, false);*/
})

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
});
