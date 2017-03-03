// exercice analyse
// 4 event handlers à mettre 
// ajouter la même ligne à un tableau et 3 de ses éléments TD
// (en programmation, c'est 1 boucle, on créé une table et 
// on rajoute 3 enfants TD à la ROW.
// boucle de 0 à 2. = le i sert juste à changer le texte. )
// le vrai indice commence à 1. 
// 
// dès qu'on clique sur le bouton : on récupère l'élément table et son indice à [0]
// pour le premier.
// on créé une ligne
// puis on créé

// mettre hander eb haut

// ajouter une ligne

 // créer 1 ligne 
// créer 3 colonnes
// mettre le contenu 

// fonction qui ajoute la ligne
function addRow(){
   
    // récupère la référence du tableau par tagname 
    var tables = document.getElementsByTagName("table")[0];
    // on créé un TR qu'on stocke dans sa variable
    var row = document.createElement("tr");
    // dans ce TR, on doit boucler pour créer les 3 enfants TD 
    // > conditions pour rester dans la boucle
    for (let i = 1; i <= 3; i++) {
    // crée un élément <td> qu'on va stocker dans une variable
    var td = document.createElement("td"); 
    // dans le td, on met du texte (au lieu du HTML innerHTML) + code d'interpolation
    td.innerText = "Texte `${i}`";
    // le texte créé dans toutes les TD, on ferme la TR
    row.appendChild(td);
    }
    tables.appendChild(row);
};


function setSize(){
    document.getElementById("td").style.fontSize = "medium";
};

// supprimer une ligne
// fonction qui supprime la ligne

// augmenter taille de police 

// fonction qui augmente la taille de police


// partie active onclick

document.getElementById("add").onclick = addRow; 
document.getElementById("del").onclick = dellRow;