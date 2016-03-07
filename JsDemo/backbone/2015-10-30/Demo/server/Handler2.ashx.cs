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
    public class Handler2 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //write your handler implementation here.
            context.Response.ContentType = "text/plain";
            //string name;
            //string id = context.Request.QueryString["id"];
            //switch (id)
            //{
            //    case "1":
            //        name = "北京";
            //        break;
            //    case "2":
            //        name = "上海";
            //        break;
            //    case "3":
            //        name = "成都";
            //        break;
            //    default:
            //        name = "test";
            //        break;
            //}
            //context.Response.Write(name);
            context.Response.Write("nihao");

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