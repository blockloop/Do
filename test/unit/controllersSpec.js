'use strict';

// it('should send a message', inject(function(chatService) {
// 	chatService.sendMsg({test:"Message"});
// }));

 var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe('unit: ChatCtrl', function () {
    var $scope = null;
    var ctrl = null;

    /* A mocked version of our service, someService
     * we're mocking this so we have total control and we're
     * testing this in isolation from any calls it might
     * be making.
     */
    var mockChatService = {
        sendMsg: function (msg) {
            console.log('Sent message: ' + JSON.stringify(msg));
        },
        getStatuses: function () { 
        	return ["status"];
        },
        setMessageHandler: function () {},
        setStatusHandler: function () {},
        subscribe: function () {}
    }

    var mockStorageService = {}
    var mockNotifyService = {}

    //you need to indicate your module in a test
    beforeEach(module('imApp'));
    beforeEach(module('storageService'));

    /* IMPORTANT!
     * this is where we're setting up the $scope and
     * calling the controller function on it, injecting
     * all the important bits, like our mockService */
    beforeEach(inject(function ($rootScope, $controller) {
        //create a scope object for us to use.
        $scope = $rootScope.$new();

        //now run that scope through the controller function,
        //injecting any services or other injectables we need.
        ctrl = $controller('ChatCtrl', {
            $scope: $scope,
            chatService: mockChatService,
            notifyService: mockNotifyService
        });
    }));

    /* Test 1: The simplest of the simple.
     * here we're going to test that some things were
     * populated when the controller function whas evaluated. */
    it('should start with fields populated', function () {

        expect($scope.statuses).not.to.be.null;
        expect($scope.me).not.to.be.null;
    });

    it('should send messages through the chatService', function () {

    });


});