// Declaring valid date character, minimum year and maximum year
var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function IsDate(control)
{
	var daysInMonth = DaysArray(12)
	var pos1=control.value.indexOf(dtCh)
	var pos2=control.value.indexOf(dtCh,pos1+1)
	var strDay=control.value.substring(0,pos1)
	var strMonth=control.value.substring(pos1+1,pos2)
	var strYear=control.value.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1)
	{
	    strDay=strDay.substring(1);
	}	    
	if (strMonth.charAt(0)=="0" && strMonth.length>1)
	{
	    strMonth=strMonth.substring(1);
	}
	for (var i = 1; i <= 3; i++) 
	{
		if (strYr.charAt(0)=="0" && strYr.length>1)
		{
		    strYr=strYr.substring(1);
		}
	}
	month=parseInt(strMonth);
	day=parseInt(strDay);
	year=parseInt(strYr);
	if (pos1==-1 || pos2==-1)
	{
		return "error";
	}
	
	
	if (strMonth.length<1 || month<1 || month>12)
	{
	    return "error";
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month])
	{
	    return "error";
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear)
	{		
	   	return "error";
	}
	if (control.value.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(control.value, dtCh))==false)
	{
	    if (alertError)
	    {
		    return "error";
		}
		return "error";
	}
    return "";
}

function IsNumber(control)
{

    if (control.value == "")
    {
        return "error";
    }
	if (isInteger(control.value))
    {
        return "";
    }
    else
    {
        return "error";
    }
}

function IsTextBoxFilled(control)
{
    if (control.value != "")
    {
        return "";
    }
    else
    {
        return "error";
    }
}

function IsLink(control)
{
    if (control.value != "")
    {
        var urlPattern = /^(?:(?:ftp|https?):\/\/)?(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\.)+(?:com|edu|biz|org|gov|int|info|mil|net|name|museum|coop|aero|[a-z][a-z])\b(?:\d+)?(?:\/[^;"'<>()\[\]{}\s\x7f-\xff]*(?:[.,?]+[^;"'<>()\[\]{}\s\x7f-\xff]+)*)?/;
        if(urlPattern.test(control.value.toLowerCase()))
        {
            return "";
        }
        else
        {
            return "error";
        }
    }
    else
    {
        return "error";
    }
}

function IsEmail(control) {
    var reg1str = "(@.*@)|(\\.\\.)|(@\\.)|(\\.@)|(^\\.)";
    var reg2str = "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,4})(\\]?)$";
    if (control.value.match(reg1str) == null &&
		    control.value.match(reg2str) != null) {
        return "";
    }
    return "error";
}