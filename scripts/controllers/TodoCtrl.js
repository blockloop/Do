doApp.controller('TodoCtrl', ['$scope','storageService',

	function($scope, storageService) {
		var brain = storageService.getBrain();
		var _ = require('underscore');
		var $ = require('jquery');

		$scope.todos = [];
		$scope.archive = [];
		$scope.categories = [];
		$.extend($scope, brain); // load from memory

		if ($scope.categories[0] != 'All') { $scope.categories.splice(1,0,'All'); }
		$scope.selectedCategory = $scope.categories[0];
		$scope.title = $scope.selectedCategory;
		$scope.showNew = false;

		$scope.addTodo = function() {
			$scope.todos.push({
				created: new Date().getTime(),
				text: $scope.todoText, 
				category: $scope.selectedCategory,
				done: false});

			$scope.todoText = "";
			$scope.showNew = false;
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
			brain.categories = $scope.categories;
			storageService.saveBrain(brain);
		};

		$scope.toggleNew = function() {
			$scope.showNew = !$scope.showNew;
		};

		$scope.setFilterCategory = function (category) {
			$scope.selectedCategory = category;
		};
	}
]);

