using System;
using System.Web.Http;
using BooksSeller.WebApi.Models;
using BooksSeller.WebApi.Providers;

namespace BooksSeller.WebApi.Controllers
{
    
    public class BooksController : ApiController
    {
        private readonly IBooksProvider _booksProvider;


        public BooksController(IBooksProvider booksProvider)
        {
            _booksProvider = booksProvider;
            //_booksProvider.SaveBook(new Book() { Code = "NET-0001", Price = 30.32, ReleaseDate = new DateTime(2016, 07, 23), Title = ".NET Core for Beginners" });
            //_booksProvider.SaveBook(new Book() { Code = "ASP-0001", Price = 30.32, ReleaseDate = new DateTime(2016, 10, 23), Title = "ASP .NET Core for Beginners" });
            //_booksProvider.SaveBook(new Book() { Code = "BRL-0001", Price = 30.32, ReleaseDate = new DateTime(2016, 10, 23), Title = "História e Vida de Sergio Moro" });
            //_booksProvider.SaveBook(new Book() { Code = "MEE-0001", Price = 30.32, ReleaseDate = new DateTime(2016, 10, 23), Title = "O monge e o executivo" });
        }
        [HttpGet]
        [Route("~/api/books/all")]
        public IHttpActionResult All()
        {
            try
            {
                var result = _booksProvider.GetBooks();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }        [HttpGet]        [Route("~/api/books/{code}")]
        public IHttpActionResult Get(string code)
        {
            try
            {
                var book = _booksProvider.GetBook(code);
                if (book == null) return NotFound();

                return Ok(book);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/Books
        [HttpPost]
        [Route("~/api/books/add")]
        public IHttpActionResult Post([FromBody]Book value)
        {
            try
            {
                _booksProvider.SaveBook(value);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        // PUT: api/Books/5
        [HttpPut]
        [Route("~/api/books/update/{code}")]
        public IHttpActionResult Put(string code, [FromBody]Book value)
        {
            try
            {
                _booksProvider.SaveBook(code, value);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/Books/5
        [HttpDelete]
        [Route("~/api/books/delete/{code}")]
        public IHttpActionResult Delete(string code)
        {
            try
            {
                _booksProvider.DeleteBook(code);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
