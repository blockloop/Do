doApp.service('storageService', 
	function() {
		var brain = localStorage.brain;
		var cache = sessionStorage.brain;

		return {
			getBrain:function () {
				brain = brain || "{}";
				return JSON.parse(brain);
			},
			getCache:function () {
				cache = cache || "{}";
				return JSON.parse(cache);
			},
			save:function (newBrain) {
				newBrain = JSON.stringify(newBrain);
				localStorage.brain = newBrain;
			}
		}
	}
);
