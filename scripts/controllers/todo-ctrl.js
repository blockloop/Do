(function(){
    var name = 'TodoCtrl';
    var ngModule = 'doApp';
    var type = 'controller';
    var dependencies = [
        '$scope',
        'brainService',
        'lodash',
        'jquery'
    ];

    var main = function ($scope, brainService, _, $) {
		var brain = brainService.getBrain();
		$scope.data = brain;

		$scope.todos = [];
		$scope.archive = [];
		$scope.categories = [];
		$.extend($scope, brain); // load from memory

		if ($scope.categories[0] !== 'All') {
			$scope.categories.splice(1,0,'All');
		}

		$scope.selectedCategory = $scope.categories[0];
		$scope.title = $scope.selectedCategory;
		$scope.showNew = false;

		$scope.addTodo = function(todo,category) {
			$scope.todos.push({
				created: new Date().getTime(),
				text: todo.text,
				category: category,
				done: false
			});

			todo.text = '';
			$scope.showNew = false;
		};

		$scope.remaining = function() {
			return _.filter($scope.todos, function(todo) {
				return !todo.done;
			}).length;
		};

		$scope.doArchive = function() {
			$scope.archive = _.filter($scope.todos, function(todo) {
				return todo.done;
			});
			$scope.todos = _.filter($scope.todos, function(todo) {
				return !todo.done;
			});
		};

		$scope.toggleNew = function() {
			$scope.showNew = !$scope.showNew;
		};

		$scope.setFilterCategory = function (category) {
			window.alert('Setting category filter to ' + category.toString());
			$scope.selectedCategory = category;
		};

		angular.forEach(['todos','archive','categories'], function (prop) {
			$scope.$watch(prop, function(newValue) {
				brain[prop] = newValue;
				brainService.saveBrain(brain);
			}, true);
		});
    };

    angular.module(ngModule)[type](name,dependencies.concat(main));
})();
