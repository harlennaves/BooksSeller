/// <reference path="../../references.ts"/>

module Books.Seller.Web.Controllers {
  export interface IBooksListController extends ng.IScope {
    books : Web.Models.Book[];
    edit : (book : Models.Book) => void;
    delete : (code : string) => void;
    add : () => void;
  }
}
