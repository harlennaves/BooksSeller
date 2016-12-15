/// <reference path="../../references.ts"/>

module Books.Seller.Web.Services {
    export interface IRootScope extends ng.IRootScopeService {
        changeDisplayLanguage: (lang: string) => void;
        getLanguage: () => string;

        activeLang: string;
        lang: any;
        activeFlag: string;
    }
}
