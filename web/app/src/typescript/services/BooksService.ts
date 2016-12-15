/// <reference path="../references.ts"/>

module Books.Seller.Web.Services {
  export class BooksService extends BaseService implements IBooksService {
    list(successCallback : (data : any) => any, errorCallback : (data : any) => any) {
      this.sendGet(ServiceConfig.baseAddress + "all", successCallback, errorCallback);
    };
    get(id : string, successCallback : (data : any) => any, errorCallback : (data : any) => any){
      this.sendGet(ServiceConfig.baseAddress + id, successCallback, errorCallback);
    };
    add(book : Models.Book, successCallback : (data : any) => any, errorCallback : (data : any) => any) {
      this.sendPost(ServiceConfig.baseAddress + "add", book, successCallback, errorCallback);
    };
    update(book : Models.Book, successCallback : (data : any) => any, errorCallback : (data : any) => any){
      this.sendPut(ServiceConfig.baseAddress + "update/" + book.Code, book, successCallback, errorCallback);
    };
    delete(id : string, successCallback : (data : any) => any, errorCallback : (data : any) => any) {
      this.sendDelete(ServiceConfig.baseAddress + "delete/" + id, successCallback, errorCallback);
    };
  }
}
