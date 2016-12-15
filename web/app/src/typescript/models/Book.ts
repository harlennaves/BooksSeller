/// <reference path="../references.ts"/>

module Books.Seller.Web.Models {
  export class Book {
    public Code : string;
    public Title : string;
    public ReleaseDate : Date;
    public Price : number;

    constructor(code: string, title: string, availability: Date) {
      this.Code = code;
      this.Title = title;
      this.ReleaseDate = availability;
      this.Price = 0.0;
    }
  }
}
