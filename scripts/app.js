global.Brain = {Archive: [], Todos: []};

global.persistBrain = function() {
	localStorage.setItem('brain',JSON.stringify(global.Brain));
};

global.loadBrain = function() {
	try {return JSON.parse(localStorage.getItem('brain')); } catch(e){}
	return {Archive: [], Todos: []};
};

global.strHash = function(str) {
	return str.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
};

global.Brain = global.loadBrain();
