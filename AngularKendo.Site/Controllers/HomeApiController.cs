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
        [HttpGet]
        public IEnumerable<DropDown> Priorities()
        {
            IList<DropDown> priorities = new List<DropDown>();

            priorities.Add(new DropDown
            {
                Id = 1,
                Description = "High"
            });
            priorities.Add(new DropDown
            {
                Id = 2,
                Description = "Medium"
            });
            priorities.Add(new DropDown
            {
                Id = 3,
                Description = "Low"
            });

            return priorities;
        }
        [HttpGet]
        public IEnumerable<DropDown> Users()
        {
            IList<DropDown> users = new List<DropDown>();

            users.Add(new DropDown
            {
                Id = 1,
                Description = "John Doe"
            });
            users.Add(new DropDown
            {
                Id = 2,
                Description = "Jane Doe"
            });
            users.Add(new DropDown
            {
                Id = 3,
                Description = "Fred Doe"
            });
            users.Add(new DropDown
            {
                Id = 4,
                Description = "John Smith"
            });
            users.Add(new DropDown
            {
                Id = 5,
                Description = "Jane Smith"
            });

            return users;
        }
    }
}
