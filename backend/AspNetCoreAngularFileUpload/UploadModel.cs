using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace AspNetCoreAngularFileUpload
{
    public class UploadModel
    {
        public IFormFile File { get; set; }

        public string Additional { get; set; }
    }
}
