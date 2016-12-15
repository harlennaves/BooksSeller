/// <reference path="../../references.ts"/>

module Books.Seller.Web.Controllers {
  export interface IBookEditController extends ng.IScope {
    book : Models.Book;
    originalBook : Models.Book;
    isNewBook : boolean;
    cancel : () => void;
    save : () => void;
  }
}
