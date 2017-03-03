// ajouter une ligne

document.getElementById("add").onclick = addRow;

// fonction qui ajoute la ligne
function addRow(){
   
    // récupère la référence du tableau par tagname 
    var table = document.getElementById("table");
    // var rowCount = table.rows.length;
    
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var td = document.createElement("td");
    cell1.style.fontSize = "20px";
    cell1.innerHTML = "Texte 1";
    row.appendChild(cell1);

    var cell2 = row.insertCell(1);
    var td = document.createElement("td");
    cell2.style.fontSize = "20px";
    cell2.innerHTML = "Texte 2";
    row.appendChild(cell2); 

    var cell3 = row.insertCell(2);
    var td = document.createElement("td");
    cell3.style.fontSize = "20px";
    cell3.innerHTML = "Texte 3";
    row.appendChild(cell3); 

}; 

 


var toto = addRow();

// supprimer une ligne

document.getElementById("del").onclick = dellRow;

// fonction qui supprime la ligne
function dellRow(){
    // récupère la référence du tableau par tagname 
    var table = document.getElementById("table"); 
    // insére dans row count le nombre de lignes du tableau 
    var rowCount = table.rows.length;
    // supprime la dernière ligne créée du tableau 
    table.deleteRow(rowCount -1);
}; 

var tata = dellRow();

// augmenter taille de police 
document.getElementById("more").onclick = increaseFont;
// fonction qui augmente la taille de police
function increaseFont(){
    var td = document.getElementById("td");
    td.style.fontSize = "20px";
    sizeFont++;
}; 

var tutu = increaseFont();

// var row = table.getElementsByTagName("tr");
// var cell = document.getElementsByTagName("td");
// 
// var row = document.createElement("tr");
// var cell = document.createElement("td");
      // var cellText = document.createTextNode("Texte 1");
      // cell.appendChild(cellText);
      // row.appendChild(cell);
// };


// écoute le click sur le bouton et déclenche la fonction addRow
// var btn = document.getElementById('add').onclick = function(){}

// var cell = row.insertCell(-1);
// cell.innerHTML = "Texte 3";
// }

    // créer toutes les cellules
    // for (var i = 0; i < 2; i++) {
    // crée une ligne du tableau
    // var row = table.createElement("tr");
    
    // for (var j = 0; j < 2; j++) {
    // crée un élément <td> and un noeuf text, 
    // faire que le texte colle au contenu de la cellule, 
    // et mettre un <td> à la fin de la ligne du tableau
    // var cell =  table.createElement("td");
    // var cellText = table.createTextNode("Texte "+1+", dans colonne "+j)
    // cell.appendChild(cellText);
    //row.appendChild(cell);
    // }
    // ajouter une ligne à la fin du tableau 
    //table.appendChild(row);
    //}


// var cell = row.insertCell(3)
// cell.innerHTML = "Texte 4"
// var addthetext2 =  row.insertCell(3);
// addthetext2.innerHTML = "Texte 5";

/*

texte à l'intérieur de balises =  objet #text 

1. click
2. listen the click then 
3. create a new row

addrow
deleterow
increasesize
decreasesize

document.getElementByID
windows.onload
document.addEventListener
on.click
créer des variables dans lesquelles stocker le reultat des fonctions
*/