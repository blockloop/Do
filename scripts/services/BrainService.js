doApp.service('storageService', 
	function() {
		return {
			getBrain:function() {
				return localStorage;
			},
			getCache:function() {
				return sessionStorage;
			},
		}
	}
);
