using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngularFileUpload
{
    [Route("api/[controller]")]
    public class UploadsController : Controller
    {
        [HttpPost]
        public IActionResult Upload([FromForm] UploadModel model)
        {
            return Ok(new
            {
                model.File.FileName,
                model.File.ContentType,
                model.File.Length,
                model.Additional,
                Message = "Using FromForm works perfectly fine!"
            });
        }
    }
}
