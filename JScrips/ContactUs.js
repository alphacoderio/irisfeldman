function Validate() {
    var msg = "";
    if ($get("NameTextBox").value == "") {
        msg = "שם מלא - שדה חובה";
        ShowMessage(msg, true, "200px");
        return false;
    }
    if ($get("EmailTextBox").value == "") {
        msg = "אימייל - שדה חובה";
        ShowMessage(msg, true, "200px");
        return false;
    }
    if (!checkMail($get("EmailTextBox").value)) {
        msg = "אימייל לא תקין";
        ShowMessage(msg, true, "200px");
        return false;
    }
    if ($get("SendButton") != null) {
        $get("SendButton").click();
    }
}

function ClearForm() {
    $get("NameTextBox").value = "";
    $get("EmailTextBox").value = "";
    $get("PhoneTextBox").value = "";
    $get("RemarksTextBox").value = "";
}