var _ = require("underscore");

var TodoCtrl = function($scope) {
	$scope.archive = global.Brain.Archive;
	$scope.todos = global.Brain.Todos;

	$scope.addTodo = function() {
		var stamp = new Date().getTime();
		$scope.todos.push({
			created: stamp,
			text: $scope.todoText,
			done: false,
			hash: global.strHash($scope.todoText + stamp)
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
	};

	$scope.toggleNew = function() {
		$('.new-todo').stop().toggle('fast');
	};
};





// document ready for non-controller work
$(function() {
	global.jpmenu = $.jPanelMenu({
		menu: '#app-menu',
		trigger: '#app-menu-trigger',
		duration: 300,
		openPosition: "200px"
	});	

	global.jpmenu.on();
});