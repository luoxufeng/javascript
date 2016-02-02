using System;
using System.Collections.Generic;
using System.IO;
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
            //post方式下，取得client端传过来的数据
            if ("post".Equals(context.Request.HttpMethod.ToLower()))
            {
                StreamReader reader = new StreamReader(context.Request.InputStream);
                string json = HttpUtility.UrlDecode(reader.ReadToEnd());
                context.Response.Write(json);
            }
            else
            {  
                //get方式，取得client传过来的数据
              //  string json = HttpUtility.UrlDecode(context.Request.QueryString.ToString());//注意这个是需要解码的
               // context.Response.Write(json);
            }

            //List<Book> books=new List<Book>();
            //books.Add(new Book(){Id = "1",Title = "语文"});
            //books.Add(new Book() { Id = "2", Title = "数学" });
            //books.Add(new Book() { Id = "3", Title = "英语" });
            //JavaScriptSerializer serializer=new JavaScriptSerializer();
            //string strJson= serializer.Serialize(books);
            //context.Response.Write(strJson);
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