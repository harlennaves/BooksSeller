/// <refenrece path="../references.ts"/>

module Books.Seller.Web.Controllers {
    export class BookEditController extends BaseController {
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
            private $scope: IBookEditController,
            private $location: ng.ILocationService,
            private $rootScope: Services.IRootScope,
            private $timeout: ng.ITimeoutService,
            private $routeParams: any,
            private $mdSidenav: any,
            private $mdDialog: any,
            private BooksService: Services.IBooksService
        ) {
            super($scope, $timeout, $rootScope, $routeParams);
            $scope.book = new Models.Book("", "", new Date());
            $scope.isNewBook = false;

            var bookChanged = () => {
                return $scope.book.Code != $scope.originalBook.Code
                    || $scope.book.Title != $scope.originalBook.Title
                    || $scope.book.ReleaseDate != $scope.originalBook.ReleaseDate
                    || $scope.book.Price != $scope.originalBook.Price;
            };

            $scope.cancel = () => {
                if (bookChanged()) {
                    var confirm = $mdDialog.confirm()
                        .title("Would you like to cancel book changes?")
                        .textContent("All changes will be lost")
                        .ok("YES").cancel("NO");

                    $mdDialog.show(confirm).then(() => {
                        $scope.book = new Models.Book("", "", new Date());
                        $scope.originalBook = new Models.Book("", "", new Date());
                        $rootScope.$broadcast("editBookCancelled", {});
                    }, () => {

                    });
                } else {
                  $scope.book = new Models.Book("", "", new Date());
                  $scope.originalBook = new Models.Book("", "", new Date());
                  $rootScope.$broadcast("editBookCancelled", {});
                }

            };

            var onBookSaveSuccess = (data: any) => {
                $rootScope.$broadcast("bookEdited", { book: $scope.book });
            };

            var onBookSaveError = (data: any) => {
                var diag = $mdDialog.alert().title("Can't save book").textContent(data.data.Message).ok("OK");
                $mdDialog.show(diag);
            };

            $scope.save = () => {
                if ($scope.isNewBook)
                    BooksService.add($scope.book, onBookSaveSuccess, onBookSaveError);
                else
                    BooksService.update($scope.book, onBookSaveSuccess, onBookSaveError);
            };

            var onBookSelected = (events: any, book: any) => {
                $scope.isNewBook = false;
                $scope.book = book.book;
                $scope.originalBook = new Models.Book($scope.book.Code, $scope.book.Title, $scope.book.ReleaseDate);
                $scope.originalBook.Price = $scope.book.Price;
            };

            var onNewBook = (events : any, data : any) => {
              $scope.isNewBook = true;
              $scope.book = new Models.Book("", "", new Date());
              $scope.originalBook = new Models.Book("", "", new Date());
            };

            $rootScope.$on("editBook", onBookSelected);
            $rootScope.$on("addNewBook", onNewBook);
        }
    }
}
