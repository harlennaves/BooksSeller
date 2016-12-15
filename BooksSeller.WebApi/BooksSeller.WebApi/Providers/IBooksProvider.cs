using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BooksSeller.WebApi.Models;

namespace BooksSeller.WebApi.Providers
{
    public interface IBooksProvider
    {
        Book GetBook(string code);
        List<Book> GetBooks();
        void SaveBook(Book book);        
        void SaveBook(string code, Book book);
        void DeleteBook(string code);
    }
}