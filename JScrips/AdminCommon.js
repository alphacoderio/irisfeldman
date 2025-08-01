function IsIE() {
    n = navigator.userAgent;
    w = n.indexOf("MSIE");
    if (w > 0) {
        return true;
    }
    else {
        return false;
    }
}

function AddToFavorite() {
    try {
        if (IsIE()) {
            window.external.AddFavorite(location.href, "מערכת ניהול תוכן");
        }
        else {
            alert("דפדפן זה אינו תומך באופציה זו")
        }
    }
    catch (ex) { }
}

function Save() {
    if ($get("SaveButton") != null) {
        $get("SaveButton").click();
    }
}

function Cancel() {
    if ($get("CancelButton") != null) {
        $get("CancelButton").click();
    }
}