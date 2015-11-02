using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Xml.Linq;

namespace backbone
{
    public partial class file : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //FileInfo fi = new FileInfo(@"F:\File\HotDistrictImage2\1.xml"); 
            //FileStream fsr = fi.OpenRead(); 
            //byte[] datar = new byte[(int)fsr.Length];
            //int pageSize = 1000000;
            //int totalLength=Convert.ToInt32(fsr.Length);
            //int pageTotal = totalLength/pageSize + totalLength%pageSize != 0 ? 1 : 0;

            //string path = @"F:\File\Test\";
            //if (!Directory.Exists(path))
            //{
            //    Directory.CreateDirectory(path);
            //}
            

            //for (int i = 0; i < pageTotal; i++)
            //{
            //    fsr.Read(datar, i * pageSize, pageSize);
            //    string valuer = System.Text.Encoding.Unicode.GetString(datar);
            //    using (StreamWriter stream = new StreamWriter(path + "i" + i, false,Encoding.UTF8))
            //    {
            //        stream.WriteLine(valuer);
            //    }
            //}

           StringBuilder str=new StringBuilder();
            for (int i = 1; i < 28; i++)
            {
                var xml = XDocument.Load(string.Format(@"F:\File\SightImageXml\{0}.xml",i));

                var length = xml.Descendants("item").ToList();
                str.AppendLine(i + ".xml=" + length.Count);
            }
            ltResult.Text = str.ToString();
        }
    }
}