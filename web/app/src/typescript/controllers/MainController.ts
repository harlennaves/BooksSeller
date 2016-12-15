/// <reference path="../references.ts"/>

module Books.Seller.Web.Controllers {
    export class MainController extends BaseController {
        public static $inject = [
            "$scope",
            "$location",
            "$rootScope",
            "$timeout",
            "$routeParams"
        ];
        constructor(
            private $scope: IMainController,
            private $location: ng.ILocationService,
            private $rootScope: Services.IRootScope,
            private $timeout: ng.ITimeoutService,
            private $routeParams: any
        ) {
            super($scope, $timeout, $rootScope, $routeParams);
            $scope.isEditMode = false;

            var onBookSelected = (events: any, book : any) => {
              $scope.isEditMode = true;
            };

            var onBookEditCancel = (events: any) => {
              $scope.isEditMode = false;
            };

            $rootScope.$on("editBook", onBookSelected);
            $rootScope.$on("editBookCancelled", onBookEditCancel);
            $rootScope.$on("bookEdited", onBookEditCancel);
            $rootScope.$on("addNewBook", onBookSelected);
        }
    }
}
