(function(){
	angular
	.module('ZonngoComparador')
	.factory('homeFactory',["$http",homeFactory]);

	function homeFactory($http) {
		var path="http://localhost/ApiZonngo/public/index.php/"
		return {
			Categoria:function(id) {
				global = $http.get(path+"Categoria/"+id);
				global.forEach(function(l){
					global.marcas=$http.get(path+"marcas/");
				});
				return global;
			},
			Categorias:function() {
				global = $http.get(path+"Categoria");
				return global;	
			}
		};
	}
	
})();