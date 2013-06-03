global.BrainFile = "./brain.json";
global.Brain = {};

global.persistBrain = function() {
	require("fs").writeFile(global.BrainFile, JSON.stringify(global.Brain), function(err) {
		if (err) {
			console.log("ERROR!");
			console.log(err);
		} else {
			console.log("DB successfully written.");
		}
	});
};

global.loadBrain = function() {
	try {return require(global.BrainFile); } catch(e){}
	return {Archive: [], Todos: []};
};

global.strHash = function(str) {
	var hash = 0;
	if (str.length == 0) return hash;
	for (i = 0; i < str.length; i++) {
		char = str.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
};

global.Brain = global.loadBrain();
