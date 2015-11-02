using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace backbone
{
    public partial class About : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string dir="D:/sitemap/basis2/";

           // var journeysUrl = File.ReadAllLines(HttpRuntime.AppDomainAppPath.ToString() + "journeysUrl.xml").ToList();
            //List<string> journeysUrl=new List<string>();
            //journeysUrl.Add("test22222");
            //journeysUrl.Add("http://you.ctrip.com/journeys/WulingyuanInterestArea120559/tag2t1.html");
            //journeysUrl.Add("http://you.ctrip.com/journeys/Chengdu104/dis911day4tag53t1.html");

            //var dirFile = Path.Combine(dir, "filterjourneys", "file");
            //if (Directory.Exists(dirFile))
            //{
            //    Directory.Delete(dirFile, true);
            //}
            //Directory.CreateDirectory(dirFile);

            //StreamWriter sw = new StreamWriter(Path.Combine(dirFile, "journeysUrl.xml"), false);
            //foreach (var item in journeysUrl)
            //{
            //    sw.WriteLine(item.ToString());
            //}
            //sw.Close();//写入

            bool flag = "/journeys/Beijing1/day2t1.html".Contains("day2t1.html");

            List<long> districtIds=new List<long>(){1,2,3,4,5};

            string str = string.Join(",", (long[]) districtIds.ToArray());

            Response.Write(str);

        }
    }
}
