using System;
using System.Web;

namespace backbone._2015_10_30.Demo.server
{
    public class Handler1 : IHttpHandler
    {
        /// <summary>
        /// You will need to configure this handler in the web.config file of your 
        /// web and register it with IIS before being able to use it. For more information
        /// see the following link: http://go.microsoft.com/?linkid=8101007
        /// </summary>
        #region IHttpHandler Members

        public bool IsReusable
        {
            // Return false in case your Managed Handler cannot be reused for another request.
            // Usually this would be false in case you have some state information preserved per request.
            get { return true; }
        }

        public void ProcessRequest(HttpContext context)
        {
            //write your handler implementation here.
            context.Response.ContentType = "text/plain";
            string name ;
            string id = context.Request.QueryString["id"];
            switch (id)
            {
                case "1":
                    name = "北京";
                    break;
                case "2":
                    name = "上海";
                    break;
                case "3":
                    name = "成都";
                    break;
                default:
                    name = "test";
                    break;
            }
            context.Response.Write(name);

        }

        #endregion
    }
}
