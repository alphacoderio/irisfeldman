var popupDiv = document.createElement('div');
var progressDiv = document.createElement('div');
var divIdName = 'popupDiv';
var progressDivIdName = 'progressDiv';
popupDiv.setAttribute('id',divIdName);
popupDiv.style.position = 'absolute';

progressDiv.setAttribute('id',progressDivIdName);
progressDiv.style.position = 'absolute';

var returnFocusElement = '';

function ShowMessage(msg, autoHide, top, left)
{
    var width = '220px';
	var height = '120px';
    var x = (document.body.clientWidth-parseInt(width))/2 + "px";
    var y = screen.height/2+scrollingDetector()-parseInt(height)/2 + "px";
    popupDiv.style.backgroundColor = "#eeeeee";
    popupDiv.style.border = "solid black 1px";
    popupDiv.style.width = width;
    popupDiv.style.height = height;
    popupDiv.style.left = (left==null)?x:left;
    popupDiv.style.top = (top==null)?y:top;
    popupDiv.innerHTML = MessageTemplate(msg);   
    document.getElementsByTagName('BODY')[0].appendChild(popupDiv);
    document.getElementById('popupDiv').focus();
    if(autoHide)
    {
        window.setTimeout(HideMessage, 2000);
    }
}

function HideMessage()
{
    try
    {
        document.getElementsByTagName('BODY')[0].removeChild(popupDiv);
        if (returnFocusElement != '')
        {
            document.getElementById(returnFocusElement).focus();
            returnFocusElement = '';        
        }
    }
    catch(ex){}
}

function ShowProgressBar()
{
    var width = '100px';
	var height = '20px';
    var x = (document.body.clientWidth-parseInt(width))/2 + "px";
    var y = screen.height/2+scrollingDetector()-parseInt(height)/2 + "px";
    progressDiv.style.width = width;
    progressDiv.style.height = height;
    progressDiv.style.left = x;
    progressDiv.style.top = y;
    progressDiv.innerHTML = "<img src=\""+location.href+"/Images/Common/Loading.gif\" alt=\"loading..\" title=\"loading..\" />";   
    document.getElementsByTagName('BODY')[0].appendChild(progressDiv);
    document.getElementById('progressDiv').focus();
}

function HideProgressBar()
{
    try
    {
        document.getElementsByTagName('BODY')[0].removeChild(progressDiv);
    }
    catch(ex){}
}

function MessageTemplate(msg) {

    var html="";
    html+="<table cellpadding='0' cellspacing='0' style=\"table-layout:fixed; width:100%; height:100%; direction:rtl;\" onmousedown='HideMessage();'>";
    html += "<tr style=\"background-color:#832929; height:20px;\">";
    html+="<td style=\"text-align:right; padding-right:5px;padding-top:5px;\">";
    html += "<div style=\"color:white;font-family:Wingdings;font-size:16px;cursor:pointer\" onclick='HideMessage()'>x</div>";
    html+="</td>";
    html+="</tr>";
    html+="<tr style=\"height:100px;\">";
    html+="<td style=\"text-align:center; padding: 10px; height:90px;\">";
    html+="<span style=\"font-family : Verdana, Arial; font-size:12px;color:black\">"+msg+"</span>";
    html+="</td>";
    html+="</tr>";
    html+="</table>";
    
    return html;
}

function ReturnFocusOnMessageClose(returnFocus)
{
    returnFocusElement = returnFocus;   
}

function scrollingDetector()
{
    if (navigator.appName == "Microsoft Internet Explorer")
    { 
        return document.documentElement.scrollTop; 
    }
    else// For FireFox 
    { 
        return window.pageYOffset;
    }
}
