﻿
//Example 1:  Launching from a text link

//<a href="javascript:popImage('http://SomeSite.com/SomeImage.gif','Some Title')">
//Click Here
//</a>


//Example 2:  Launching from an image link

//<a href="javascript:popImage('http://SomeSite.com/SomeImage.gif','Some Title')">
//<img src="YourImage.gif" border="0">
//</a>


//Example 3:  Launching from a form button

//<form>
//<input type="button" value="Click Here" onClick="popImage('SomeImage.gif','Some Title')">
//</form>

// SETUPS:
// ===============================

// Set the horizontal and vertical position for the popup

PositionX = 100;
PositionY = 100;

// Set these value approximately 20 pixels greater than the
// size of the largest image to be used (needed for Netscape)

defaultWidth  = 500;
defaultHeight = 500;

// Set autoclose true to have the window close automatically
// Set autoclose false to allow multiple popup windows

var AutoClose = true;

// Do not edit below this line...
// ================================
if (parseInt(navigator.appVersion.charAt(0))>=4){
var isNN=(navigator.appName=="Netscape")?1:0;
var isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}
var optNN='scrollbars=no,width='+defaultWidth+',height='+defaultHeight+',left='+PositionX+',top='+PositionY;
var optIE='scrollbars=no,width=150,height=100,left='+PositionX+',top='+PositionY;
function PopImage(imageURL,imageTitle)
{
    if (isNN){imgWin=window.open('about:blank','',optNN);}
    if (isIE){imgWin=window.open('about:blank','',optIE);}
    with (imgWin.document)
    {
        writeln('<html><head><title>Loading...</title><style>body{margin:0px;}</style>');writeln('<sc'+'ript>');
        writeln('var isNN,isIE;');writeln('if (parseInt(navigator.appVersion.charAt(0))>=4){');
        writeln('isNN=(navigator.appName=="Netscape")?1:0;');writeln('isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}');
        writeln('function reSizeToImage(){');writeln('if (isIE){');writeln('window.resizeTo(300,300);');
        writeln('width=300-(document.body.clientWidth-document.images[0].width);');
        writeln('height=300-(document.body.clientHeight-document.images[0].height);');
        writeln('window.resizeTo(width,height);}');writeln('if (isNN){');       
        writeln('window.innerWidth=document.images["George"].width;');writeln('window.innerHeight=document.images["George"].height;}}');
        writeln('function doTitle(){document.title="'+imageTitle+'";}');writeln('</sc'+'ript>');
        if (!AutoClose) writeln('</head><body bgcolor=000000 scroll="no" onload="reSizeToImage();doTitle();self.focus()">')
        else writeln('</head><body bgcolor=000000 scroll="no" onload="reSizeToImage();doTitle();self.focus()" onblur="self.close()">');
        writeln('<img name="George" src='+imageURL+' style="display:block"></body></html>');
        close();		
    }
}








