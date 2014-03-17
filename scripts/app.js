(function(){
	var doApp = angular.module('doApp', []);

	doApp.value('lodash', require('lodash'));
	doApp.value('jquery', require('jquery'));

	var win = require('nw.gui').Window.get();

	win.showDevTools();

	win.on('close', function() {
		this.hide();
		console.log("Closing...");
		this.close(true);
	});
})();
