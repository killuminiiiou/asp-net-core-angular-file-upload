using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace AspNetCoreAngularFileUpload
{
    public class ListingModel
    {
        public string CategoryName { get; set; }
        public string SubCategoryName { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public IEnumerable<IFormFile> Attachments { get; set; }
    }
}
