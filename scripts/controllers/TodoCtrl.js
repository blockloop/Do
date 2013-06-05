doApp.controller('TodoCtrl', ['$scope','storageService', 

	function($scope, storageService) {
		var brain = storageService.getBrain();

		$scope.todos = [];
		$scope.archive = [];
		$scope.groups = [];
		$.extend($scope, brain); // load from memory
		$scope.selectedGroup = $scope.groups[0];
		$scope.title = $scope.selectedGroup || 'All';
		$scope.showNew = false;

		$scope.addTodo = function() {
			$scope.todos.push({
				created: new Date().getTime(),
				text: $scope.todoText, 
				group: $scope.selectedGroup,
				done: false});

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
			brain.todos = $scope.todos;
			brain.archive = $scope.archive;
			brain.groups = $scope.groups;
			storageService.save(brain);
		};

		$scope.toggleNew = function() {
			$scope.showNew = !$scope.showNew;
		};

		$scope.setFilterGroup = function (group) {
			$scope.selectedGroup = group;
		};

		$scope.$watch('todos', function(oldValue, newValue) {
			// alert('todos changed from ' + oldValue.toString() + ' to ' + newValue.toString());
		});
	}
]);

