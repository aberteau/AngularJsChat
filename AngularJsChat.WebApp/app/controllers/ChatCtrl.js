'use strict';

app.controller('ChatCtrl', ['$scope', 'chatHubService', 'randomGeneratorService', function ($scope, chatHubService, randomGeneratorService) {
    $scope.userName = randomGeneratorService.generateUserName();
    $scope.userId = randomGeneratorService.generateUserId();
    $scope.textToSend = '';
    $scope.messages = [];
    $scope.isReadyToSend = false;

    var updateReceveivedMessage = function (senderId, senderName, date, body) {
        var isMine = false;
        if (senderId == $scope.userId) {
            isMine = true;
        }

        var newMessage =
        {
            "date": date,
            "senderId": senderId,
            "senderName": senderName,
            "text": body,
            "isMine": isMine
        };

        $scope.messages.push(newMessage);
        $scope.$apply();
    };

    $scope.$watch("textToSend", function (newValue, oldValue) {
        if (!$scope.textToSend || $scope.textToSend === '')
            $scope.isReadyToSend = false;
        else
            $scope.isReadyToSend = true;
    });

    chatHubService.init(updateReceveivedMessage);

    $scope.send = function () {
        if (!$scope.isReadyToSend)
            return;

        chatHubService.sendMessage($scope.userId, $scope.userName, $scope.textToSend);
        $scope.textToSend = '';
    };
}]);