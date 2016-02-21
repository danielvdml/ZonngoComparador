(function(){
	"use strict";
	angular
	.module("ZonngoComparador")
	.directive('sidebarMenuCategory', [function () {
		return {
			restrict: 'E',
			templateUrl:"templates/pages/sidebar/sidebar-menu-category.html"
		};
	}])
	.directive('bannerCenter', [function () {
		return {
			restrict: 'E',
			templateUrl:"templates/pages/banner/banner-center.html"
		};
	}])
	.directive('sidebarRigthProduct', [function () {
		return {
			restrict: 'E',
			templateUrl:"templates/pages/sidebar/sidebar-rigth-product.html"
		};
	}])
	.directive('bannerAdvertising', [function () {
		return {
			restrict: 'E',
			templateUrl:"templates/pages/banner/banner-advertising.html"
		};
	}])
	.directive('sidebarCategory', [function () {
		return {
			restrict: 'A',
			templateUrl:"templates/pages/sidebar/sidebar-category.html"
		};
	}])
	.directive('mainFooter', [function () {
		return {
			restrict: 'A',
			templateUrl:"templates/pages/footer/footer-main.html"
		};
	}])
	.directive('copyright', [function () {
		return {
			restrict: 'E',
			templateUrl:"templates/pages/copyright.html"
		};
	}])
	.directive('owlItemBanner', [function () {
		return {
			restrict: 'E',
			templateUrl:"templates/pages/content/owl-item-banner.html",
			scope:{
				desc:"@",
			}
		};
	}])
	.directive('owlItemProduct', [function () {
		return {
			restrict: 'E',
			templateUrl:"templates/pages/content/owl-item-product.html",
			scope:{
			desc:"@"}
		};
	}])
	.directive('contentSecundary', ["$http","$compile",function ($http,$compile) {
		return {
			restrict: 'E',
			replace:true,
			templateUrl:"templates/pages/content/content-secundary.html",
			scope:{
				data:"@"
			},
			link:function(scope) {
				$http.get("http://localhost/ApiZonngo/public/index.php/Categoria/1/Modelo").success(function(data){
					data.forEach(function(i){
						$(".owl-carousel-modelos").append($compile("<owl-item-product desc='"+i.desc+"''></owl-item-product>")(scope));
					});
					$(".owl-carousel-modelos").owlCarousel();
				});
				$http.get("http://localhost/ApiZonngo/public/index.php/Categoria").success(function(data){
					data.forEach(function(i){
						$(".owl-carousel-banner").append($compile("<owl-item-banner desc='"+i.desc+"'></owl-item-banner>")(scope));
					});
					$(".owl-carousel-banner").owlCarousel();				
				});
				
			}
		};
	}]);
})();