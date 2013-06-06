doApp.directive('jpmenu', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
			$.jPanelMenu({
				menu: '#' + attrs.id.toString(),
				trigger: attrs.trigger.toString(),
				duration: attrs.duration || 250,
				openPosition: attrs.openPosition || "250px"
			}).on();
		}
	};
});
