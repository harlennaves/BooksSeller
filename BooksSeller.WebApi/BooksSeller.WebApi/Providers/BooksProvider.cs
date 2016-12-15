using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BooksSeller.WebApi.Models;

namespace BooksSeller.WebApi.Providers
{
    public class BooksProvider : IBooksProvider
    {
        private readonly string _dbPath;

        public BooksProvider()
        {
            _dbPath = HttpContext.Current.Server.MapPath("~/App_Data/books.sqlite");
            
        }

        public Book GetBook(string code)
        {
            using (var db = new BooksDbContext(_dbPath))
            {
                return db.Books.FirstOrDefault(book => book.Code == code);
            }
        }

        public List<Book> GetBooks()
        {
            using (var db = new BooksDbContext(_dbPath))
            {
                return db.Books.ToList();
            }
        }

        public void SaveBook(Book book)
        {
            using (var db = new BooksDbContext(_dbPath))
            {
                var original = db.Books.FirstOrDefault(x => x.Code == book.Code);
                if (original != null) throw new ApplicationException("A book with same code already exists!");

                db.Books.Add(book);
                db.SaveChanges();
            }
        }

        public void SaveBook(string code, Book book)
        {
            using (var db = new BooksDbContext(_dbPath))
            {
                var original = db.Books.FirstOrDefault(x => x.Code == code);

                if (original == null) throw new ApplicationException("No book found.");

                if (!code.Equals(book.Code) && db.Books.Any(x => x.Code == book.Code)) throw new ApplicationException("A book with same code already exists!");

                original.Code = book.Code;
                original.Price = book.Price;
                original.ReleaseDate = book.ReleaseDate;
                original.Title = book.Title;

                db.SaveChanges();
            }
        }

        public void DeleteBook(string code)
        {
            using (var db = new BooksDbContext(_dbPath))
            {
                var book = db.Books.FirstOrDefault(x => x.Code == code);
                if (book == null) throw new ApplicationException("No book found.");

                db.Books.Remove(book);

                db.SaveChanges();
            }
        }
    }
}