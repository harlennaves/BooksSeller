/// <reference path="../references.ts"/>

module Books.Seller.Web.Controllers {
    export class BooksListController extends BaseController {
        public static $inject = [
            "$scope",
            "$location",
            "$rootScope",
            "$timeout",
            "$routeParams",
            "$mdSidenav",
            "$mdDialog",
            "BooksService"
        ];
        constructor(
            private $scope: IBooksListController,
            private $location: ng.ILocationService,
            private $rootScope: Services.IRootScope,
            private $timeout: ng.ITimeoutService,
            private $routeParams: any,
            private $mdSidenav: any,
            private $mdDialog: any,
            private BooksService: Services.IBooksService
        ) {
            super($scope, $timeout, $rootScope, $routeParams);
            $scope.books = [];

            $scope.edit = (book: Models.Book) => {
                $rootScope.$broadcast("editBook", { book });
            };

            var onDeleteSuccess = (data: any) => {
              BooksService.list(onListSuccess, onListError);
            };

            var onDeleteError = (data: any) => {
              var diag = $mdDialog.alert().title("Can't delete selected book").textContent(data.data.Message).ok("OK");
              $mdDialog.show(diag);
            };

            $scope.delete = (code: string) => {
                var confirm = $mdDialog.confirm()
                    .title("Delete selected book?")
                    .ok("YES").cancel("NO");
                $mdDialog.show(confirm).then(() => {
                    BooksService.delete(code, onDeleteSuccess, onDeleteError);
                }, () => {

                });

            };

            $scope.add = () => {
              $rootScope.$broadcast("addNewBook", {});
            }

            var onListSuccess = (data: any) => {
                $scope.books = data.data;
            };

            var onListError = (data: any) => {

            };

            var onBookEditCancel = (events: any) => {
                BooksService.list(onListSuccess, onListError);
            };

            var onBookEdited = (events: any, args: any) => {
                BooksService.list(onListSuccess, onListError);
            };
            $scope.$on("bookEdited", onBookEdited);
            $rootScope.$on("editBookCancelled", onBookEditCancel);

            BooksService.list(onListSuccess, onListError);
        }
    }
}
