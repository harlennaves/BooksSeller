/// <reference path="references.ts"/>

"use strict"

class ServiceConfig {
  public static baseAddress : string;
}
ServiceConfig.baseAddress = "https://192.168.100.120/BooksSeller.WebApi/api/books/";
module Books.Seller.Web {

    var initializeLanguage = ($rootScope: Services.IRootScope, $location: ng.ILocationService, $http: ng.IHttpService) => {
        /*var userLang = localStorage.getItem("language") || navigator.language;
        userLang = Core.ResourceManager.checkUserLang(userLang.split("-")[0]);

        $rootScope.getLanguage = () => {
            return userLang;
        };

        $rootScope.changeDisplayLanguage = (lang: string) => {
            lang = Core.ResourceManager.checkUserLang(lang);
            Core.ResourceManager.queryLangFile(lang, $location, $rootScope, $http);
            localStorage.setItem("language", lang);
            userLang = lang;
            document.getElementsByTagName("html")[0].lang = lang;
        };
        Core.ResourceManager.queryLangFile(userLang, $location, $rootScope, $http);*/
    };

    var routeConfig = ($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider
            .when("/main", {
                templateUrl: "./html/working.html",
                controller: "MainController"
            })
            .otherwise("/main");
    };

    var themeConfig = ($mdThemingProvider: any) => {
        $mdThemingProvider.theme('teal')
            .primaryPalette('teal')
            .accentPalette('amber')
            .warnPalette('orange');
        $mdThemingProvider.definePalette('white', {
            '50': 'ffffff',
            '100': 'ffffff',
            '200': 'ffffff',
            '300': 'ffffff',
            '400': 'ffffff',
            '500': 'ffffff',
            '600': 'ffffff',
            '700': 'ffffff',
            '800': 'ffffff',
            '900': 'ffffff',
            'A100': 'ffffff',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'dark'
     			});

        $mdThemingProvider.theme('white-teal')
            .primaryPalette('white', {
                "default": "800"
            })
            .accentPalette('teal')
            .warnPalette('orange');
        $mdThemingProvider.enableBrowserColor({
            theme: "teal",
            palette: "accent",
            hue: "200"
        });
    };

    var initializeCallback = ($rootScope: Services.IRootScope, $location: ng.ILocationService, $timeout: ng.ITimeoutService, $http: ng.IHttpService, $templateCache: ng.ITemplateCacheService) => {
        //Core.ResourceManager.initialize();
        //initializeLanguage($rootScope, $location, $http);

        $rootScope.getLanguage = () => {
            return "pt";
        };
        $rootScope.changeDisplayLanguage = (lang: string) => {

        };

    };

    angular.module("books-seller-app", ['ngRoute', 'angular.filter', 'ngMessages', 'pascalprecht.translate', 'ngMaterial', 'ngMdIcons'])
        .controller("BaseController", Controllers.BaseController)
        .controller("MainController", Controllers.MainController)
        .controller("BooksListController", Controllers.BooksListController)
        .controller("BookEditController", Controllers.BookEditController)
        .service("BaseService", Services.BaseService)
        .service("BooksService", Services.BooksService)
        .config(["$routeProvider", routeConfig])
        .config(["$mdThemingProvider", themeConfig])
        .run(["$rootScope", "$location", "$timeout", "$http", "$templateCache", initializeCallback]);
}
