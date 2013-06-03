var _ = require("underscore");

var TodoCtrl = function($scope) {
	$scope.archive = global.Brain.Archive;
	$scope.todos = global.Brain.Todos;

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
		global.Brain.Todos = $scope.todos
		global.Brain.Archive = $scope.archive;
		global.persistBrain();
	}
};

