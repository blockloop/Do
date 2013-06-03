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
    return require("fs").readFile(global.BrainFile, "utf8", function(err, data) {
      if (err) {
        console.log("ERROR!");
        console.log(err);
        return {};
      }
      return JSON.parse(data);
    });
  },
  brain: {}
};

Do.brain = Do.loadBrain();

global.Do = Do;

