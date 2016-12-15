using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace BooksSeller.WebApi.Models
{
    [DataContract]
    public class Book
    {
        [DataMember]
        public string Code { get; set; }        [DataMember]
        public string Title { get; set; }        [DataMember]
        public DateTime ReleaseDate { get; set; }        [DataMember]
        public double Price { get; set; }
    }
}