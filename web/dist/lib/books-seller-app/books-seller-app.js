var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SkinConfig = (function () {
    function SkinConfig() {
    }
    return SkinConfig;
}());
/// <reference path="../../references.ts"/>
/// <reference path="../../references.ts"/>
/// <reference path="../references.ts"/>
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var Services;
            (function (Services) {
                var BaseService = (function () {
                    function BaseService($http, $rootScope, $location) {
                        this.$http = $http;
                        this.$rootScope = $rootScope;
                        this.$location = $location;
                    }
                    BaseService.prototype.internalPost = function (method, endPoint, messageBody, successCallback, errorCallback) {
                        this.$http({
                            url: endPoint,
                            method: method,
                            data: messageBody
                        })
                            .then(successCallback, errorCallback);
                    };
                    BaseService.prototype.sendPost = function (endPoint, messageBody, successCallback, errorCallback) {
                        this.internalPost("POST", endPoint, messageBody, successCallback, errorCallback);
                    };
                    BaseService.prototype.sendGet = function (endPoint, successCallback, erroCallback) {
                        this.$http.get(endPoint).then(successCallback, erroCallback);
                    };
                    BaseService.prototype.sendPut = function (endPoint, messageBody, successCallback, errorCallback) {
                        this.internalPost("PUT", endPoint, messageBody, successCallback, errorCallback);
                    };
                    BaseService.prototype.sendDelete = function (endPoint, successCallback, errorCallback) {
                        this.$http["delete"](endPoint).then(successCallback, errorCallback);
                    };
                    return BaseService;
                }());
                BaseService.$inject = [
                    "$http", "$rootScope", "$location"
                ];
                Services.BaseService = BaseService;
            })(Services = Web.Services || (Web.Services = {}));
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <reference path="../references.ts"/>
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var Services;
            (function (Services) {
                var BooksService = (function (_super) {
                    __extends(BooksService, _super);
                    function BooksService() {
                        return _super.apply(this, arguments) || this;
                    }
                    BooksService.prototype.list = function (successCallback, errorCallback) {
                        this.sendGet(ServiceConfig.baseAddress + "all", successCallback, errorCallback);
                    };
                    ;
                    BooksService.prototype.get = function (id, successCallback, errorCallback) {
                        this.sendGet(ServiceConfig.baseAddress + id, successCallback, errorCallback);
                    };
                    ;
                    BooksService.prototype.add = function (book, successCallback, errorCallback) {
                        this.sendPost(ServiceConfig.baseAddress + "add", book, successCallback, errorCallback);
                    };
                    ;
                    BooksService.prototype.update = function (book, successCallback, errorCallback) {
                        this.sendPut(ServiceConfig.baseAddress + "update/" + book.Code, book, successCallback, errorCallback);
                    };
                    ;
                    BooksService.prototype["delete"] = function (id, successCallback, errorCallback) {
                        this.sendDelete(ServiceConfig.baseAddress + "delete/" + id, successCallback, errorCallback);
                    };
                    ;
                    return BooksService;
                }(Services.BaseService));
                Services.BooksService = BooksService;
            })(Services = Web.Services || (Web.Services = {}));
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <reference path="../references.ts"/>
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var Models;
            (function (Models) {
                var Book = (function () {
                    function Book(code, title, availability) {
                        this.Code = code;
                        this.Title = title;
                        this.ReleaseDate = availability;
                        this.Price = 0.0;
                    }
                    return Book;
                }());
                Models.Book = Book;
            })(Models = Web.Models || (Web.Models = {}));
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <reference path="../../references.ts"/>
/// <reference path="../../references.ts"/>
/// <reference path="../../references.ts"/>
/// <reference path="../references.ts"/>
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var Controllers;
            (function (Controllers) {
                var BaseController = (function () {
                    function BaseController($scope, $timeout, $rootScope, $routeParams) {
                        $scope.preventPast = function (evt) {
                            evt.preventDefault();
                            return false;
                        };
                        $scope.getPrimaryTheme = function () {
                            return SkinConfig.primaryThemeName;
                        };
                        $scope.getLightTheme = function () {
                            return SkinConfig.toolbarThemeName;
                        };
                        $scope.getSkinName = function () {
                            return SkinConfig.currentSkin;
                        };
                        $rootScope.changeDisplayLanguage($rootScope.getLanguage());
                        if ($routeParams.hasOwnProperty("language")) {
                            var language = $rootScope.getLanguage();
                            var activationLanguage = $routeParams.language;
                            if (language != activationLanguage) {
                                $rootScope.changeDisplayLanguage(activationLanguage);
                            }
                        }
                    }
                    return BaseController;
                }());
                BaseController.$inject = [
                    "$scope",
                    "$timeout",
                    "$rootScope",
                    "$routeParams"
                ];
                Controllers.BaseController = BaseController;
            })(Controllers = Web.Controllers || (Web.Controllers = {}));
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <reference path="../references.ts"/>
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var Controllers;
            (function (Controllers) {
                var MainController = (function (_super) {
                    __extends(MainController, _super);
                    function MainController($scope, $location, $rootScope, $timeout, $routeParams) {
                        var _this = _super.call(this, $scope, $timeout, $rootScope, $routeParams) || this;
                        _this.$scope = $scope;
                        _this.$location = $location;
                        _this.$rootScope = $rootScope;
                        _this.$timeout = $timeout;
                        _this.$routeParams = $routeParams;
                        $scope.isEditMode = false;
                        var onBookSelected = function (events, book) {
                            $scope.isEditMode = true;
                        };
                        var onBookEditCancel = function (events) {
                            $scope.isEditMode = false;
                        };
                        $rootScope.$on("editBook", onBookSelected);
                        $rootScope.$on("editBookCancelled", onBookEditCancel);
                        $rootScope.$on("bookEdited", onBookEditCancel);
                        $rootScope.$on("addNewBook", onBookSelected);
                        return _this;
                    }
                    return MainController;
                }(Controllers.BaseController));
                MainController.$inject = [
                    "$scope",
                    "$location",
                    "$rootScope",
                    "$timeout",
                    "$routeParams"
                ];
                Controllers.MainController = MainController;
            })(Controllers = Web.Controllers || (Web.Controllers = {}));
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <reference path="../references.ts"/>
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var Controllers;
            (function (Controllers) {
                var BooksListController = (function (_super) {
                    __extends(BooksListController, _super);
                    function BooksListController($scope, $location, $rootScope, $timeout, $routeParams, $mdSidenav, $mdDialog, BooksService) {
                        var _this = _super.call(this, $scope, $timeout, $rootScope, $routeParams) || this;
                        _this.$scope = $scope;
                        _this.$location = $location;
                        _this.$rootScope = $rootScope;
                        _this.$timeout = $timeout;
                        _this.$routeParams = $routeParams;
                        _this.$mdSidenav = $mdSidenav;
                        _this.$mdDialog = $mdDialog;
                        _this.BooksService = BooksService;
                        $scope.books = [];
                        $scope.edit = function (book) {
                            $rootScope.$broadcast("editBook", { book: book });
                        };
                        var onDeleteSuccess = function (data) {
                            BooksService.list(onListSuccess, onListError);
                        };
                        var onDeleteError = function (data) {
                            var diag = $mdDialog.alert().title("Can't delete selected book").textContent(data.data.Message).ok("OK");
                            $mdDialog.show(diag);
                        };
                        $scope["delete"] = function (code) {
                            var confirm = $mdDialog.confirm()
                                .title("Delete selected book?")
                                .ok("YES").cancel("NO");
                            $mdDialog.show(confirm).then(function () {
                                BooksService["delete"](code, onDeleteSuccess, onDeleteError);
                            }, function () {
                            });
                        };
                        $scope.add = function () {
                            $rootScope.$broadcast("addNewBook", {});
                        };
                        var onListSuccess = function (data) {
                            $scope.books = data.data;
                        };
                        var onListError = function (data) {
                        };
                        var onBookEditCancel = function (events) {
                            BooksService.list(onListSuccess, onListError);
                        };
                        var onBookEdited = function (events, args) {
                            BooksService.list(onListSuccess, onListError);
                        };
                        $scope.$on("bookEdited", onBookEdited);
                        $rootScope.$on("editBookCancelled", onBookEditCancel);
                        BooksService.list(onListSuccess, onListError);
                        return _this;
                    }
                    return BooksListController;
                }(Controllers.BaseController));
                BooksListController.$inject = [
                    "$scope",
                    "$location",
                    "$rootScope",
                    "$timeout",
                    "$routeParams",
                    "$mdSidenav",
                    "$mdDialog",
                    "BooksService"
                ];
                Controllers.BooksListController = BooksListController;
            })(Controllers = Web.Controllers || (Web.Controllers = {}));
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <refenrece path="../references.ts"/>
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var Controllers;
            (function (Controllers) {
                var BookEditController = (function (_super) {
                    __extends(BookEditController, _super);
                    function BookEditController($scope, $location, $rootScope, $timeout, $routeParams, $mdSidenav, $mdDialog, BooksService) {
                        var _this = _super.call(this, $scope, $timeout, $rootScope, $routeParams) || this;
                        _this.$scope = $scope;
                        _this.$location = $location;
                        _this.$rootScope = $rootScope;
                        _this.$timeout = $timeout;
                        _this.$routeParams = $routeParams;
                        _this.$mdSidenav = $mdSidenav;
                        _this.$mdDialog = $mdDialog;
                        _this.BooksService = BooksService;
                        $scope.book = new Web.Models.Book("", "", new Date());
                        $scope.isNewBook = false;
                        var bookChanged = function () {
                            return $scope.book.Code != $scope.originalBook.Code
                                || $scope.book.Title != $scope.originalBook.Title
                                || $scope.book.ReleaseDate != $scope.originalBook.ReleaseDate
                                || $scope.book.Price != $scope.originalBook.Price;
                        };
                        $scope.cancel = function () {
                            if (bookChanged()) {
                                var confirm = $mdDialog.confirm()
                                    .title("Would you like to cancel book changes?")
                                    .textContent("All changes will be lost")
                                    .ok("YES").cancel("NO");
                                $mdDialog.show(confirm).then(function () {
                                    $scope.book = new Web.Models.Book("", "", new Date());
                                    $scope.originalBook = new Web.Models.Book("", "", new Date());
                                    $rootScope.$broadcast("editBookCancelled", {});
                                }, function () {
                                });
                            }
                            else {
                                $scope.book = new Web.Models.Book("", "", new Date());
                                $scope.originalBook = new Web.Models.Book("", "", new Date());
                                $rootScope.$broadcast("editBookCancelled", {});
                            }
                        };
                        var onBookSaveSuccess = function (data) {
                            $rootScope.$broadcast("bookEdited", { book: $scope.book });
                        };
                        var onBookSaveError = function (data) {
                            var diag = $mdDialog.alert().title("Can't save book").textContent(data.data.Message).ok("OK");
                            $mdDialog.show(diag);
                        };
                        $scope.save = function () {
                            if ($scope.isNewBook)
                                BooksService.add($scope.book, onBookSaveSuccess, onBookSaveError);
                            else
                                BooksService.update($scope.book, onBookSaveSuccess, onBookSaveError);
                        };
                        var onBookSelected = function (events, book) {
                            $scope.isNewBook = false;
                            $scope.book = book.book;
                            $scope.originalBook = new Web.Models.Book($scope.book.Code, $scope.book.Title, $scope.book.ReleaseDate);
                            $scope.originalBook.Price = $scope.book.Price;
                        };
                        var onNewBook = function (events, data) {
                            $scope.isNewBook = true;
                            $scope.book = new Web.Models.Book("", "", new Date());
                            $scope.originalBook = new Web.Models.Book("", "", new Date());
                        };
                        $rootScope.$on("editBook", onBookSelected);
                        $rootScope.$on("addNewBook", onNewBook);
                        return _this;
                    }
                    return BookEditController;
                }(Controllers.BaseController));
                BookEditController.$inject = [
                    "$scope",
                    "$location",
                    "$rootScope",
                    "$timeout",
                    "$routeParams",
                    "$mdSidenav",
                    "$mdDialog",
                    "BooksService"
                ];
                Controllers.BookEditController = BookEditController;
            })(Controllers = Web.Controllers || (Web.Controllers = {}));
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <reference path='./definitions/jquery/jquery.d.ts' />
/// <reference path='./definitions/angularjs/angular.d.ts' />
/// <reference path='./definitions/angularjs/angular-route.d.ts' />
/// <reference path='./definitions/angularjs/angular-cookies.d.ts' />
/**
 * Reference to the core classes
 */
/*
/// <reference path="Core/Directives.ts"/>
/// <reference path="Core/Ticks.ts"/>
/// <reference path="Core/Navigator.ts"/>
/// <reference path="Core/Utils.ts"/>
/// <reference path="Core/StringUtils.ts"/>
/// <reference path="Core/i18n.ts"/>
*/
/*
 * Reference to the services interfaces
 */
/// <reference path="services/interfaces/IRootScope.ts"/>
/// <reference path="services/interfaces/IBaseService.ts"/>
/*
/// <reference path="service/interfaces/IHeaderConfig.ts"/>
/// <reference path="service/interfaces/IBaseService.ts" />
/// <reference path="service/interfaces/IRootScope.ts" />
/// <reference path="service/interfaces/ISigninService.ts" />
*/
/**
 * Reference to the services implementations
 */
/// <reference path="services/BaseService.ts"/>
/// <reference path="services/BooksService.ts"/>
/**
 * Reference to the models
 */
/// <reference path="models/Book.ts"/>
/**
 * Reference to controllers interfaces
 */
/// <reference path="controllers/interfaces/IMainController.ts"/>
/// <reference path="controllers/interfaces/IBooksListController.ts"/>
/// <reference path="controllers/interfaces/IBookEditController.ts"/>
/*
/// <reference path="controllers/interfaces/ISigninController.ts"/>
/// <reference path="controllers/interfaces/IMainController.ts"/>
/// <reference path="controllers/interfaces/IMessageListController.ts"/>
/// <reference path="controllers/interfaces/IMessageReaderController.ts"/>
*/
/**
 * Reference to controllers
 */
/// <reference path="controllers/BaseController.ts"/>
/// <reference path="controllers/MainController.ts"/>
/// <reference path="controllers/BooksListController.ts"/>
/// <reference path="controllers/BookEditController.ts"/>
/*
/// <reference path="controllers/SigninController.ts"/>
/// <reference path="controllers/MainController.ts"/>
/// <reference path="controllers/MessageListController.ts"/>
/// <reference path="controllers/MessageReaderController.ts"/>
*/
/// <reference path="references.ts"/>
"use strict";
var ServiceConfig = (function () {
    function ServiceConfig() {
    }
    return ServiceConfig;
}());
ServiceConfig.baseAddress = "https://192.168.100.120/BooksSeller.WebApi/api/books/";
var Books;
(function (Books) {
    var Seller;
    (function (Seller) {
        var Web;
        (function (Web) {
            var initializeLanguage = function ($rootScope, $location, $http) {
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
            var routeConfig = function ($routeProvider) {
                $routeProvider
                    .when("/main", {
                    templateUrl: "./html/working.html",
                    controller: "MainController"
                })
                    .otherwise("/main");
            };
            var themeConfig = function ($mdThemingProvider) {
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
            var initializeCallback = function ($rootScope, $location, $timeout, $http, $templateCache) {
                //Core.ResourceManager.initialize();
                //initializeLanguage($rootScope, $location, $http);
                $rootScope.getLanguage = function () {
                    return "pt";
                };
                $rootScope.changeDisplayLanguage = function (lang) {
                };
            };
            angular.module("books-seller-app", ['ngRoute', 'angular.filter', 'ngMessages', 'pascalprecht.translate', 'ngMaterial', 'ngMdIcons'])
                .controller("BaseController", Web.Controllers.BaseController)
                .controller("MainController", Web.Controllers.MainController)
                .controller("BooksListController", Web.Controllers.BooksListController)
                .controller("BookEditController", Web.Controllers.BookEditController)
                .service("BaseService", Web.Services.BaseService)
                .service("BooksService", Web.Services.BooksService)
                .config(["$routeProvider", routeConfig])
                .config(["$mdThemingProvider", themeConfig])
                .run(["$rootScope", "$location", "$timeout", "$http", "$templateCache", initializeCallback]);
        })(Web = Seller.Web || (Seller.Web = {}));
    })(Seller = Books.Seller || (Books.Seller = {}));
})(Books || (Books = {}));
/// <reference path="../../references.ts"/>
