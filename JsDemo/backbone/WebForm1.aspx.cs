using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace backbone
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            divContent.InnerHtml = "<a href=\"javascript:void(0)\" onclick=\"ajaxProductClick(this,1,'127.0.0.1')\">你好哦！</a>";
        }
    }
}