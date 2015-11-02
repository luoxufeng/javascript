using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace backbone._2015_10_30.Demo.server
{
    /// <summary>
    /// Summary description for HandlerBook
    /// </summary>
    public class HandlerBook : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
           // string jsonStr = "[{\"title\":\"书本1\"},{\"title\":'书本2'}]";
           // context.Response.Write(jsonStr);
            var book = context.Request["title"];

            List<Book> books=new List<Book>();
            books.Add(new Book(){Id = "1",Title = "语文"});
            books.Add(new Book() { Id = "2", Title = "数学" });
            books.Add(new Book() { Id = "3", Title = "英语" });
            JavaScriptSerializer serializer=new JavaScriptSerializer();
            string strJson= serializer.Serialize(books);
            context.Response.Write(strJson);
            context.Response.End();
            
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}