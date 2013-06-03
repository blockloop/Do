var _ = require("underscore");

var TodoCtrl = function($scope) {
	$scope.archive = global.Do.brain.Archive;
	$scope.todos = global.Do.brain.Todos;

	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = "";
		$scope.refresh();
	};

	$scope.remaining = function() {
		return _.filter($scope.todos, function(todo) { return !todo.done; }).length;
	};

	$scope.doArchive = function() {
		$scope.archive = _.filter($scope.todos, function(todo) { return todo.done; });
		$scope.todos = _.filter($scope.todos, function(todo) { return !todo.done; });
		$scope.refresh();
	};

	$scope.refresh = function() {
		global.Do.brain.Todos = $scope.todos
		global.Do.brain.Archive = $scope.archive;
		global.Do.persistBrain();
	}
};

