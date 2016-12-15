/// <reference path="../references.ts"/>

module Books.Seller.Web.Services {
  export class BaseService implements IBaseService {
    public static $inject = [
		"$http", "$rootScope", "$location"
		];

		constructor(
			public $http: ng.IHttpService,
			public $rootScope: IRootScope,
			public $location : ng.ILocationService
		) {

		}

    internalPost(method: string, endPoint : string, messageBody : any, successCallback : (data : any) => any, errorCallback : (data : any) => any) : void {
      this.$http({
        url : endPoint,
        method : method,
        data : messageBody
      })
      .then(successCallback, errorCallback);
    }

    sendPost(endPoint : string, messageBody : any, successCallback : (data : any) => any, errorCallback : (data : any) => any) {
      this.internalPost("POST", endPoint, messageBody, successCallback, errorCallback);
    }

    sendGet(endPoint : string, successCallback : (data : any) => any, erroCallback : (data : any) => any) {
      this.$http.get(endPoint).then(successCallback, erroCallback);
    }

    sendPut(endPoint : string, messageBody : any, successCallback : (data : any) => any, errorCallback : (data : any) => any) {
      this.internalPost("PUT", endPoint, messageBody, successCallback, errorCallback);
    }

    sendDelete(endPoint : string, successCallback : (data : any) => any, errorCallback : (data : any) => any) {
      this.$http.delete(endPoint).then(successCallback, errorCallback);
    }

  }
}
