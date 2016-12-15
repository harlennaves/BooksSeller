using System;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;
using BooksSeller.WebApi.Controllers;
using BooksSeller.WebApi.Models;
using BooksSeller.WebApi.Providers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace BooksSeller.WebApi.Tests
{
    [TestClass]
    public class BooksSellerControllerTest
    {
        private BooksController _booksController;

        public BooksSellerControllerTest()
        {
            _booksController = new BooksController(new MockBookProvider())
            {
                Request = new HttpRequestMessage(),
                Configuration = new HttpConfiguration()
            };
        }

        [TestMethod]
        public void List()
        {
            var cancellationToken = new CancellationToken(false);
            var result = _booksController.All().ExecuteAsync(cancellationToken).Result;
            Assert.IsTrue(result.StatusCode == HttpStatusCode.OK);
        }
        [TestMethod]
        public void GetByCode()
        {
            var cancellationToken = new CancellationToken(false);
            var result = _booksController.Get("NET-0001").ExecuteAsync(cancellationToken).Result;
            Assert.IsTrue(result.StatusCode == HttpStatusCode.OK);
        }

        [TestMethod]
        public void GetByCodeNotFound()
        {
            var cancellationToken = new CancellationToken(false);
            var result = _booksController.Get("NET-9999").ExecuteAsync(cancellationToken).Result;
            Assert.IsTrue(result.StatusCode == HttpStatusCode.NotFound);
        }

        [TestMethod]
        public void Post()
        {
            var cancellationToken = new CancellationToken(false);
            var result =
                _booksController.Post(new Book
                {
                    Code = "TST-0001",
                    Price = 10.0,
                    ReleaseDate = DateTime.Now,
                    Title = "Unity Test Add Book"
                }).ExecuteAsync(cancellationToken).Result;
            Assert.IsTrue(result.StatusCode == HttpStatusCode.OK);
        }

        [TestMethod]
        public void PostExistent()
        {
            var cancellationToken = new CancellationToken(false);
            var result =
                _booksController.Post(new Book
                {
                    Code = "NET-0001",
                    Price = 10.0,
                    ReleaseDate = DateTime.Now,
                    Title = "Unity Test Add Book"
                }).ExecuteAsync(cancellationToken).Result;
            Assert.IsTrue(result.StatusCode == HttpStatusCode.BadRequest);
        }

        [TestMethod]
        public void Put()
        {
            var cancellationToken = new CancellationToken(false);
            var book = new Book
            {
                Code = "NET-0001",
                Price = 10.0,
                ReleaseDate = DateTime.Now,
                Title = "Unity Test Add Book"
            };
            var result = _booksController.Put(book.Code, book).ExecuteAsync(cancellationToken).Result;
            
            Assert.IsTrue(result.StatusCode == HttpStatusCode.OK);
        }

        [TestMethod]
        public void PutNotFount()
        {
            var cancellationToken = new CancellationToken(false);
            var book = new Book
            {
                Code = "NET-9999",
                Price = 10.0,
                ReleaseDate = DateTime.Now,
                Title = "Unity Test Add Book"
            };
            var result = _booksController.Put(book.Code, book).ExecuteAsync(cancellationToken).Result;

            Assert.IsTrue(result.StatusCode == HttpStatusCode.BadRequest);
        }
        [TestMethod]
        public void Delete()
        {
            var cancellationToken = new CancellationToken(false);
            var result = _booksController.Delete("BRL-0001").ExecuteAsync(cancellationToken).Result;
            Assert.IsTrue(result.StatusCode == HttpStatusCode.OK);
        }

        [TestMethod]
        public void DeleteNotFound()
        {
            var cancellationToken = new CancellationToken(false);
            var result = _booksController.Delete("BRL-9999").ExecuteAsync(cancellationToken).Result;
            Assert.IsTrue(result.StatusCode == HttpStatusCode.BadRequest);
        }
    }
}
