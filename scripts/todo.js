
var TodoCtrl = function($scope) {
	var _ = require("underscore");

	$scope.selectedGroup = global.Brain.DefaultGroup;
	$scope.archive = global.Brain.Archive || [];
	$scope.todos = global.Brain.Todos || [];
	$scope.defaultGroup = global.Brain.DefaultGroup || 'All'
	$scope.groups = global.Brain.Groups || [$scope.defaultGroup];
	

	$scope.addTodo = function() {
		var newItem = new ToDoItem($scope);
		$scope.todos.push(newItem);
		$scope.todoText = "";
		$scope.toggleNew(0);
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
		global.Brain.Groups = $scope.groups;
		global.Brain.DefaultGroup = $scope.defaultGroup;
		global.persistBrain();
	};

	$scope.toggleNew = function(speed) {
		if (speed == null) {speed = 'fast';}
		$('.new-todo').stop().toggle(speed);
	};

	$scope.title = function() {
		return 'All'; //$scope.selectedGroup;
	};

	$scope.doFilter = function() {
		alert('Worked!');
	};

};


var ToDoItem = function(scope) {
	var self = this;
	var stamp = new Date().getTime();
	self.created = stamp,
	self.text = scope.todoText, 
	self.group = $scope.group || $scope.defaultGroup,
	self.done = false,
	self.hash = global.strHash(self.todoText + self.group + stamp)
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