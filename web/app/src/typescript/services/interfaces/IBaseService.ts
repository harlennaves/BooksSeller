/// <reference path="../../references.ts"/>

module Books.Seller.Web.Services {
  export interface IBaseService {
    sendPost(endPoint : string, messageBody : any, successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
    sendPut(endPoint : string, messageBody : any, successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
    sendDelete(endPoint : string, successCallback : (data : any) => any, errorCallback : (data : any) => any) : void;
    sendGet(endPoint : string, successCallback : (data : any) => any, erroCallback : (data : any) => any) : void;
  }
}
