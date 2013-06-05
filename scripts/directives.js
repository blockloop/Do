doApp.directive('jpmenu', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
        	console.log('element: ' + element.toString());

			require('jquery').jPanelMenu({
				menu: '#' + attrs.id.toString(),
				trigger: attrs.trigger.toString(),
				duration: attrs.duration || 250,
				openPosition: attrs.openPosition || "250px"
			}).on();
        }
    };
});


