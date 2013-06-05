doApp.controller('TodoCtrl', ['$scope','storageService', 
	function($scope, storageService) {
		var brain = storageService.getBrain();
		var cache = storageService.getCache();

		$scope.todos = [];
		$scope.archive = [];
		$scope.groups = [];

		$.extend($scope, brain);

		$scope.selectedGroup = $scope.groups[0];
		$scope.title = $scope.selectedGroup || 'All';
		$scope.showNew = false;

		$scope.addTodo = function() {
			var newItem = new ToDoItem($scope);
			$scope.todos.push(newItem);
			$scope.todoText = "";
			$scope.toggleNew();
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
			brain.todos = $scope.todos
			brain.archive = $scope.archive;
			brain.groups = $scope.groups;
			storageService.save();
		};

		$scope.toggleNew = function() {
			$scope.showNew = !$scope.showNew;
		};

		$scope.setFilterGroup = function (group) {
			$scope.selectedGroup = group;
		};
	}
]);

var ToDoItem = function(scope) {
	var self = this;
	var stamp = new Date().getTime();
	self.created = stamp,
	self.text = scope.todoText, 
	self.group = scope.selectedGroup,
	self.done = false
};

