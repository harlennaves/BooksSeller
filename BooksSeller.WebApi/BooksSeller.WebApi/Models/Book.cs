﻿using System;
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
        public string Code { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public double Price { get; set; }
    }
}