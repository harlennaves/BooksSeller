using System;
using BooksSeller.WebApi.Models;
using BooksSeller.WebApi.Providers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BooksSeller.WebApi.Tests
{
    [TestClass]
    public class BooksProviderTest
    {
        private readonly IBooksProvider _booksProvider;

        public BooksProviderTest()
        {
            _booksProvider = new MockBookProvider();
        }

        [TestMethod]
        public void GetBooks()
        {
            var books = _booksProvider.GetBooks();

            Assert.IsTrue(books != null && books.Count > 0);
        }
        [TestMethod]
        public void GetBook()
        {
            var book = _booksProvider.GetBook("NET-0001");

            Assert.IsTrue(book != null);
        }
        [TestMethod]
        public void SaveBook()
        {
            _booksProvider.SaveBook(new Book
            {
                Code = "TST-0001",
                Price = 10.0,
                ReleaseDate = DateTime.Now,
                Title = "Unity Test Add Book"
            });
            Assert.IsTrue(true);
        }
        [TestMethod]
        public void SaveBookExistent()
        {
            try
            {
                _booksProvider.SaveBook(new Book
                {
                    Code = "NET-0001",
                    Price = 10.0,
                    ReleaseDate = DateTime.Now,
                    Title = "Unity Test Add Book"
                });
            }
            catch (Exception)
            {
                Assert.IsTrue(true);
                return;

            }
            Assert.Fail("This test must throw an application exception. Book with the same code already exists!");
        }

        [TestMethod]
        public void UpdateBook()
        {
            var book = new Book
            {
                Code = "NET-0001",
                Price = 10.0,
                ReleaseDate = DateTime.Now,
                Title = "Unity Test Add Book"
            };
            _booksProvider.SaveBook(book.Code, book);
        }
        [TestMethod]
        public void UpdateBookNotExistent()
        {
            try
            {
                var book = new Book
                {
                    Code = "NET-9988",
                    Price = 10.0,
                    ReleaseDate = DateTime.Now,
                    Title = "Unity Test Add Book"
                };
                _booksProvider.SaveBook(book.Code, book);
            }
            catch (Exception)
            {
                Assert.IsTrue(true);
                return;
            }
            Assert.Fail("Book was updated.");
        }

        [TestMethod]
        public void UpdateBookWithCodeChange()
        {
            var book = new Book
            {
                Code = "NET-1010",
                Price = 10.0,
                ReleaseDate = DateTime.Now,
                Title = "Unity Test Add Book"
            };
            _booksProvider.SaveBook("NET-0001", book);
        }

        [TestMethod]
        public void UpdateBookWithCodeChangeWithExistentCode()
        {
            try
            {
                var book = new Book
                {
                    Code = "ASP-0001",
                    Price = 10.0,
                    ReleaseDate = DateTime.Now,
                    Title = "Unity Test Add Book"
                };
                _booksProvider.SaveBook("NET-0001", book);
            }
            catch (Exception)
            {
                Assert.IsTrue(true);
                return;
            }
            Assert.Fail("Book code updated");
        }

        [TestMethod]
        public void DeleteBook()
        {
            _booksProvider.DeleteBook("NET-0001");
        }
        [TestMethod]
        public void DeleteBookNotExistent()
        {
            try
            {
                _booksProvider.DeleteBook("ABC-9988");
            }
            catch (Exception)
            {
                Assert.IsTrue(true);
                return;
            }
            Assert.Fail("Book deleted");
        }
    }
}
