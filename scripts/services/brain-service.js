(function(){
    var name = 'brainService';
    var module = 'doApp';
    var type = 'factory';
    var dependencies = [
        'lodash'
    ];

    var main = function(_) {
		var brain = localStorage.brain;
		var cache = sessionStorage.brain;

		return {
			getBrain: function (property) {
				brain = brain || '{}';
				return JSON.parse(brain);
			},
			getCache: function () {
				cache = cache || '{}';
				return JSON.parse(cache);
			},
			saveBrain: function (newBrain) {
				newBrain = _.extend({}, this.getBrain(), newBrain);
				localStorage.brain = JSON.stringify(newBrain);
			},
			saveCache: function (newCache) {
				newCache = _.extend({}, this.getCache(), newCache);
				sessionStorage.brain = JSON.stringify(newCache);
			}
		};

    };

    angular.module(module)[type](name,dependencies.concat(main));
})();

