global.BrainFile = "db.json";

var Do = {
	persistBrain: function() {
		return require("fs").writeFile(global.BrainFile, JSON.stringify(Do.brain), function(err) {
			if (err) {
				console.log("ERROR!");
				return console.log(err);
			} else {
				return console.log("DB successfully written.");
			}
		});
	},
	loadBrain: function() {
		var fs = require('fs'),
			data = {};

		fs.readFile(global.BrainFile, "utf8", function(err, fileContents) {
			if (err) {
				console.log("ERROR!");
				console.log(err);
			} else {
				data = JSON.parse(fileContents);
			}
		});
		return data;
	},
	brain: {}
};

Do.brain = Do.loadBrain() || {};
Do.brain.Archive = [];
Do.brain.Todos = [];
global.Do = Do;

