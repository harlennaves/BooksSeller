/// <reference path="../references.ts"/>
module Books.Seller.Web.Controllers {
    export class BaseController {
        public static $inject = [
            "$scope",
            "$timeout",
            "$rootScope",
            "$routeParams"
        ];
        constructor(
            $scope: any,
            $timeout: any,
            $rootScope: Services.IRootScope,
            $routeParams: any
        ) {
            $scope.preventPast = (evt: any) => {
                evt.preventDefault();
                return false;
            };

            $scope.getPrimaryTheme = (): string => {
                return SkinConfig.primaryThemeName;
            };

            $scope.getLightTheme = (): string => {
                return SkinConfig.toolbarThemeName;
            };

            $scope.getSkinName = (): string => {
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
    }
}
