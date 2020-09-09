using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearnHub.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearnHub.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExerciseController : Controller
    {
        [HttpPost("amdahl")]
        public IActionResult Post([FromBody] AmdahlRequestModel request)
        {
            var result = 1.0f / ((1.0f - request.UsageTime) + (request.UsageTime / request.SpeedUp));
            
            return Ok(result);
        }
    }
}
