<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="backbone.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    
<head runat="server">
    <script src="Scripts/jquery-1.4.1.js" type="text/javascript"></script>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div id="divContent" runat="server">
    
    </div>
    </form>
 <script type="text/javascript">
     function ajaxProductClick(obj,clickCount, ip) {
         obj.onclick = function () { };
         $.ajax('/AjaxProductClick.aspx', {
             method: 'POST',
             context: {
                 IP: ip
             },
             onsuccess: function (response) {
                 var result = response.responseText;
                 if (result == "1") {
                     clickCount = clickCount + 1;
                     obj.innerHTML = "<span class=\"round_r\"><i class=\"praise_icon\"></i><span class=\"praise_num\">" + clickCount.toString() + "</span></span>";
                 }
             },
             onerror: function (response) {

             }
         });

     }

</script>
</body>

</html>
