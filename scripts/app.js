(function(){
	var doApp = angular.module('doApp', []);

	doApp.value('lodash', require('lodash'));
	doApp.value('jquery', require('jquery'));
})();
