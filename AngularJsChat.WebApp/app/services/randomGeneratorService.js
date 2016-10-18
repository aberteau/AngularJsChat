'use strict';

app.service('randomGeneratorService', function () {
    this.generateUserName = function () {
        return chance.name();
    };

    this.generateUserId = function () {
        return chance.hash();
    };
});