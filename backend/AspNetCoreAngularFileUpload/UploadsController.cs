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
        public IActionResult Upload([FromForm] ListingModel model)
        {
            List<string> attachmentsSummary = new List<string>();
            foreach (var file in model.Attachments)
            {
                attachmentsSummary.Add($"File: <{file.FileName}> (size: <{file.Length}>)");
            }
            return Ok(new
            {              
                AttachmentsSummary = attachmentsSummary,
                Message = "Using FromForm works perfectly fine!"
            });
        }
    }
}

