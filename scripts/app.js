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

global.Brain = global.loadBrain();
