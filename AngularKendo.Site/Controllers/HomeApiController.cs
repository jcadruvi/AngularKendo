using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Mvc4.Models;

namespace Mvc4.Controllers
{
    public class HomeApiController : ApiController
    {
        public IEnumerable<DropDown> Users()
        {
            IList<DropDown> users = new List<DropDown>();

            users.Add(new DropDown
            {
                Id = 1,
                Description = "John Doe"
            });

            return users;
        }
    }
}
