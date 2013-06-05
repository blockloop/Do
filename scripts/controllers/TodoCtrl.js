doApp.controller('TodoCtrl', ['$scope','brainService', 
	function($scope, brainService) {
		var brain = brainService.getBrain();

		$scope.archive = brain.archive;
		$scope.todos = brain.todos;
		$scope.groups = brain.groups;
		$scope.selectedGroup = brain.groups[0];
		

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
			brain.todos = $scope.todos
			brain.archive = $scope.archive;
			brain.groups = $scope.groups;
			brainService.saveBrain(brain);
		};

		$scope.toggleNew = function(speed) {
			if (speed == null) {speed = 'fast';}
			$('.new-todo').stop().toggle(speed);
		};

		$scope.title = function () {
			return $scope.selectedGroup;
		};

		$scope.setFilterGroup = function (group) {
			$scope.selectedGroup = group;
		};

		$scope.$watch('$scope', function(newValue, oldValue) {
			console.log(JSON.stringify($scope));
		});
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

