"use strict";

angular.module("ngapp").controller("NotificationController", function(global, notificationService, $state){
    
    var ctrl = this;
    
    var notificationList = function(){
        notificationService.notification({"key": global.info.key, "usuID": global.info.usuID, "grpID": global.info.grpID})
        .success(function(data){
            if(data.value == 0){
                alert("Sem Notificações");
                $state.go("main");
            } else{
                ctrl.listNotification = data.objects;
            }
        })
        .error(function(err){
            alert("Sem Notificações");
            $state.go("main");
        });
    };
    
    notificationList();
});