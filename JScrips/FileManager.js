var callBackControl = "";

function OpenDialog(currentCallBackControl, dialog, type) {
    callBackControl = currentCallBackControl;
    $find(dialog).open(type); 
}

function ImageManagerFunction(sender, args) 
{
    var selectedItem = args.SelectedItem;
    var resultImageObject = args.Result;

    var txt = $get(callBackControl);
    var img = $get(txt.id.replace("PictureTextBox", "PictureImage"));
    if (document.all) 
    {
        txt.value = selectedItem.getPath();
    }
    else 
    {
        txt.value = selectedItem.getPath();
    }
    img.src = selectedItem.getPath() + "?rand=" + Math.random();
    
}
function DocumentManagerFunction(sender, args) 
{
    var selectedItem = args.SelectedItem;
    var resultDocumentObject = args.Result;

    var txt = $get(callBackControl);
    if (document.all) 
    {
        txt.value = selectedItem.getPath(); ;
    }
    else 
    {
        txt.value = selectedItem.getPath();
    }
}
function FlashManagerFunction(sender, args) 
{
    var selectedItem = args.SelectedItem;
    var resultDocumentObject = args.Result;
    var txt = $get(callBackControl);

    if (document.all) 
    {
        txt.value = selectedItem.getPath();
    }
    else 
    {
        txt.value = selectedItem.getPath();
    }
}  