function Validate() {
    if ($get("UserNameTextBox").value == "") {
        ShowMessage("שם משתמש - שדה חובה", false, "200");
        return false;
    }

    if ($get("PasswordTextBox").value == "") {
        ShowMessage("סיסמא - שדה חובה", false, "200");
        return false;
    }

    if ($get("LoginButton") != null) {
        $get("LoginButton").click();
    }

}