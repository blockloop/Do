'use strict';

describe('Unit: services', function() {
    var $scope = null;
    var ctrl = null;

    /* A mocked version of our service, someService
     * we're mocking this so we have total control and we're
     * testing this in isolation from any calls it might
     * be making.
     */
    var mockProviderService = {}
    var mockStorageService = {}
    var mockNotifyService = {}
    var mockChatService = {}

    //you need to indicate your module in a test
    beforeEach(module('imApp'));
    beforeEach(module('storageService'));

    /* IMPORTANT!
     * this is where we're setting up the $scope and
     * calling the controller function on it, injecting
     * all the important bits, like our mockService */
     beforeEach(module(function($provide) {
     	$provide.provider('providerService', function() {
     		this.$get = function() {
     			return {
     				amqp: function () {}
     			};
     		};
     	});
     }));


	describe('storageService', function(){
		it('should set values', inject(function(storageService) {
			var key = 'key', value = 'value';
			storageService.put(key, value);
			expect(storageService.get(key)).to.equal(value);
		}));

		it('should get values as json', inject(function(storageService) {
			var key = 'key', value = {id:1};
			storageService.put(key, value);
			expect(storageService.get(key).id).to.equal(value.id);
		}));

		it('should erase values', inject(function(storageService) {
			var key = 'key', value = {id:1};
			storageService.put(key, value);
			storageService.erase(key);
			expect(storageService.get(key)).to.be.null;
		}));

		it('should reset values', inject(function(storageService) {
			var key = 'key', value = {id:1};
			storageService.put(key, value);
			storageService.reset();
			expect(storageService.get(key)).to.be.null;
		}));
	});

	describe('chatService', function() {
		it('should should get statuses', inject(function(chatService) {
			var statuses = chatService.getStatuses();
			expect(statuses).not.to.be.null;
		}));

		it('should send messages', inject(function(chatService) {
			var spy = sinon.spy();
		}));

	});


});
