doApp.service('brainService', 
	function() {
		var brain = {archive: [], todos: [], groups: []};
		try {
			var strData = localStorage.getItem('brain');
			brain = JSON.parse(strData);
		} catch (e) {
			console.log("Unable to load an existing brain. Exception: " + e);
			localStorage.setItem('brain', JSON.stringify(brain));
		}

		return {
			getBrain:function() {
				return brain;
			},
			saveBrain:function(brain) {
				localStorage.setItem('brain', JSON.stringify(brain));
			}
		}
	}
);



/*

global.persistBrain = function() {
	localStorage.setItem('brain',JSON.stringify(global.Brain));
};

global.loadBrain = function() {
	var brain = localStorage.getItem('brain');
	if (brain == undefined || brain == null) {
		var data = {Archive: [], Todos: [], Groups: ['All']};
		localStorage.setItem('brain', JSON.stringify(data));
	}
	return JSON.parse(localStorage.getItem('brain'));
};

global.strHash = function(str) {
	return str.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
};

global.Brain = global.loadBrain();





*/