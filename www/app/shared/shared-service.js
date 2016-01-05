"use strict";

angular.module("ngapp").service("shared", function(){ // One of The Ways To Share Informations Across the Controllers

    this.info = {
        title: "cordova-angular-angularMaterial-seed",
        auth: "Mario Aleo"
    };
});
