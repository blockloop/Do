(function(){
    var name = 'jpmenu';
    var module = 'doApp';
    var type = 'directive';
    var dependencies = [
		'$timeout',
		'jquery'
    ];

	var main = function($timeout, $) {
		return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				$.jPanelMenu({
					menu: '#' + attrs.id.toString(),
					trigger: attrs.trigger.toString(),
					duration: attrs.duration || 250,
					openPosition: attrs.openPosition || '250px'
				}).on();
			}
		};
	};

    angular.module(module)[type](name,dependencies.concat(main));
})();
