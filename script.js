function addRow() {

var table = document.getElementById("table");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
cell1.innerHTML = "NEW CELL1";

}

function deleterow() {
    document.getElementById("table").deleteRow(0);
}