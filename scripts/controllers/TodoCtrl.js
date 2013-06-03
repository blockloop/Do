var _ = require("underscore");

var TodoCtrl = function($scope) {
	$scope.todos = [
		{
			text: "something",
			done: false
		}, {
			text: "something else",
			done: true
		}
	];

	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = "";
		global.Do.brain = {
			Todos: $scope.todos
		};
		return global.Do.persistBrain();
	};

	$scope.remaining = function() {
		var count;

		count = 0;
		angular.forEach($scope.todos, function(todo) {
			return count += (todo.done ? 0 : 1);
		});
		return count;
	};

	$scope.doArchive = function() {
		var oldTodos;

		oldTodos = $scope.todos;
		$scope.todos = [];
		return angular.forEach(oldTodos, function(todo) {
			if (!todo.done) {
				return $scope.todos.push(todo);
			}
		});
	};
};

