'use strict';

app.service('chatHubService', function () {
    this.chatHub = null;

    this.init = function(messageReceivedCallback) {
        this.chatHub = $.connection.chatHub;
        this.chatHub.client.broadcastMessage = messageReceivedCallback;
        $.connection.hub.start();
    };

    this.sendMessage = function (userId, userName, text) {
        this.chatHub.server.send(userId, userName, new Date(), text);
    }
});