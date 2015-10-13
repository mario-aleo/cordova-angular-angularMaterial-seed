"use strict";

angular.module("ngapp").service("notificationService", function(jsonrpc){
    var service = jsonrpc.newService("login", "http://rastrear.golsat.com.br/wsi/mobilev5/delegates.ashx?test");
    this.notification = service.createMethod("ConsultaNotificacoes");
});