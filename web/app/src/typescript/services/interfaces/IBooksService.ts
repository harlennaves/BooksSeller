/// <reference path="../../references.ts"/>

module Books.Seller.Web.Services {
  export interface IBooksService {
    list(successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
    get(id : string, successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
    add(book : Models.Book,successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
    update(book : Models.Book, successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
    delete(id : string, successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
  }
}
