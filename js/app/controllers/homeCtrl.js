(function(){
	"use strict";
	angular
	.module('ZonngoComparador')
	.controller("homeCtrl",["$scope","homeFactory",homeCtrl]);

	function homeCtrl($scope,homeFactory){
		$scope.Categorias=[];
		$scope.allCategorias=function() {
			homeFactory.Categorias().success(function(data){
				$scope.Categorias=data;
			});
		}
	}
	
})();