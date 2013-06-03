global.BrainFile = "db.json";
global.Brain = {};

global.persistBrain = function() {
	require("fs").writeFile(global.BrainFile, JSON.stringify(global.Brain), function(err) {
		if (err) {
			console.log("ERROR!");
			return console.log(err);
		} else {
			return console.log("DB successfully written.");
		}
	});
};

global.loadBrain = function() {
	var fs = require('fs'),
		data = {};

	fs.readFile(global.BrainFile, "utf8", function(err, fileContents) {
		if (err) {
			console.dir("ERROR!");
			console.dir(err);
		} else {
			data = JSON.parse(fileContents);
		}
	});

	return data;
};

global.Brain = global.loadBrain() || {};
global.Brain.Archive = [];
global.Brain.Todos = [];
