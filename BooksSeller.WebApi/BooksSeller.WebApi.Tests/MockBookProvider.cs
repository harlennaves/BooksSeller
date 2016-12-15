using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BooksSeller.WebApi.Models;
using BooksSeller.WebApi.Providers;

namespace BooksSeller.WebApi.Tests
{
    public class MockBookProvider : IBooksProvider
    {
        private readonly List<Book> _books;

        public MockBookProvider()
        {
            _books = new List<Book>
            {
                new Book()
                {
                    Code = "NET-0001",
                    Price = 30.32,
                    ReleaseDate = new DateTime(2016, 07, 23),
                    Title = ".NET Core for Beginners"
                },
                new Book()
                {
                    Code = "ASP-0001",
                    Price = 30.32,
                    ReleaseDate = new DateTime(2016, 10, 23),
                    Title = "ASP .NET Core for Beginners"
                },
                new Book()
                {
                    Code = "BRL-0001",
                    Price = 30.32,
                    ReleaseDate = new DateTime(2016, 10, 23),
                    Title = "História e Vida de Sergio Moro"
                },
                new Book()
                {
                    Code = "MEE-0001",
                    Price = 30.32,
                    ReleaseDate = new DateTime(2016, 10, 23),
                    Title = "O monge e o executivo"
                }
            };

        }


        public Book GetBook(string code)
        {
            return _books.FirstOrDefault(x => x.Code == code);
        }

        public List<Book> GetBooks()
        {
            return _books;
        }

        public void SaveBook(Book book)
        {
            var original = GetBook(book.Code);
            if (original != null) throw new ApplicationException("A book with same code already exists!");
            _books.Add(book);
        }

        public void SaveBook(string code, Book book)
        {
            var original = GetBook(code);
            if (original == null) throw new ApplicationException("No book found.");
            if (!code.Equals(book.Code) && _books.Any(x => x.Code == book.Code)) throw new ApplicationException("A book with same code already exists!");

            original.Code = book.Code;
            original.Price = book.Price;
            original.ReleaseDate = book.ReleaseDate;
            original.Title = book.Title;
        }

        public void DeleteBook(string code)
        {
            var original = GetBook(code);
            if (original == null) throw new ApplicationException("No book found.");
            _books.Remove(original);
        }
    }
}
