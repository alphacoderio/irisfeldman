function GridRowDblClick(sender, eventArgs) {
    $get("ActionHiddenField").value = "Edit";

    if ($get("GridActionButton") != null) {
        $get("GridActionButton").click();
    }
}

function GridCreated(sender, eventArgs) {
    sender.PagerControl.childNodes[0].childNodes[0].childNodes[0].style.cssText = sender.PagerControl.childNodes[0].childNodes[0].childNodes[0].style.cssText;
    sender.repaint();
}

function GridImageDoCallback(itemIndex, ajaxControl, action) {
    var gridInstance = $find("Grid");
    gridInstance.get_masterTableView().get_dataItems()[itemIndex].set_selected(true);
    GridDoCallback(ajaxControl, action);
    return false;
}

function GridDoCallback(ajaxControl, action) {
    ajaxControl.ajaxRequest(action);
    return false;
}

function AddNew() {
    if ($get("AddNewButton") != null) {
        $get("AddNewButton").click();
    }
}

function Refresh() {
    if ($get("RefreshButton") != null) {
        $get("RefreshButton").click();
    }
}