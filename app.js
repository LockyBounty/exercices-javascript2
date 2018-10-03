

//Exercice 1: Manipulation de classes//

//Bon à savoir //

/* Aide : https://www.w3schools.com/jsref */
/* ́equivalences des śelecteurs*/
/*
document.getElementById("unId")
≡ équivaut à :
document.querySelector("#unId")
------------------------------------------------
document.getElementsByClassName("uneClasse")
≡ équivaut à :
document.querySelectorAll(".uneClasse")
-------------------------------------------------
document.getElementsByTagName("uneBalise")
≡ équivaut à :
document.querySelectorAll("uneBalise")
-----------------------------------------------------*/

//1.a: sélectionner le body / lui retirer la class bg-aqua / lui ajouter la class bg-olive //

//document.getElementsByTagName('body')[0].classList.remove('bg-aqua');//enleve bg-aqua de la liste de class de body//
//document.getElementsByTagName("body")[0].classList.add('bg-olive');

//1.b: sélectioner first-paragraph / lui retirer bg-lime et gray / lui ajouter bg-aqua //

/*document.getElementById("first-paragraph").className+=' yellow'; *///ajoute yellow dans la liste de class de first-paragraph//
/*document.getElementById("first-paragraph").classList.remove('bg-lime', 'gray');*///enleve bg-lime et gray de la liste de class //
//document.getElementById("first-paragraph").className='bg-aqua';// remplace le contenu de class par "bg-aqua"//

//1.c: sélectionner tous les éléments qui ont la classe 'bg-silver' / modifier tout ces éléments en leurs ajoutant la classe "bg-teal" 
// modifier tout ces éléments en leurs supprimant la classe "bg-silver"//

/*let a = document.querySelectorAll(".bg-silver"); //On met le resultat dans une variable / Attention au "." devant //
for (i = 0; i < a.length; i++){ //On fait une boucle pour parcourir toutes les occurences //
    a[i].classList.remove("bg-silver"); // On retire "bg-silver" de toutes les occurences //
    a[i].classList.add("bg-teal");// On ajoute "bg-teal à toutes les occurences."
}*/

//1.d: sélectionne tous les éléments de type 'blockquote' / modifier tout ces éléments en leurs ajoutant la classe "bg-white" //

/*let a = document.querySelectorAll("blockquote"); //On met le resultat dans une variable / Attention, insérer directement l'element //
for (i = 0; i < a.length; i++){ //On fait une boucle pour parcourir toutes les occurences // 
    a[i].classList.add("bg-white");// On ajoute "bg-teal à toutes les occurences."
}*/

//Exercice 2 : Selecteurs CSS//

//2.a: avec querySelector sélectioner l'élément 'my-table'/ lui ajouter la classe "bg-purple" //

/*document.querySelector("#my-table").classList.add("bg-purple");*/

//2.b: avec querySelectorAll sélectioner tous les paragraphes dans 'container' / 
//modifier tout ces éléments en leurs ajoutant la classe 'shadow' //
/*

let varLocky = document.querySelectorAll(".container p"); //sélectioner tous les paragraphes "p" dans 'container'//
for (i = 0; i < varLocky.length; i++){
    varLocky[i].classList.add("shadow");
};

*/

// Exercice 3 //

//3.a: sélectionne tous les éléments de type 'pre' / avec la propriété style change la couleur de texte // 

/*
let a = document.querySelectorAll("pre");
for (i = 0; i < a.length; i++) { //On fait une boucle pour parcourir toutes les occurences // 
    a[i].style.color = "white"; //On ajoute style="color:white" au "pre"//
    a[i].style.backgroundColor = "blue";//On ajoute style="backgroundColor:"blue" au "pre"//
    a[i].style.borderTop = "3px solid red";//On ajoute border-top="3px solid red" au "pre"//
    a[i].style.borderBottom = "3px solid red";//On ajoute border-bottom="3px solid red" au "pre"//
}
*/


//3.b: sélectionne le premier élément de type 'h3'/ remplacer son contenu HTML en <em>Italic title ! yeah !</em> // 

/*
document.querySelectorAll('h3')[0].innerHTML='<em>Italic title ! yeah !</em>';
*/

//3.c: sélectionne le premier élément de type 'h2'/ remplacer son contenu texte en <strong>HTML doens't work !</strong> // 

/*
document.querySelectorAll('h2')[0].innerText=`<strong>HTML doens't work !</strong>`;

//marche aussi avec textContent a la place de innerText //
*/

// Exercice 4: Création d'éléments //

//4.a: sélectioner le premier 'ul' / créer un élément de type 'li' /
//ajouter ce texte Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li' / 
//et l'ajouter dans le ul //

let lockyTroller = document.querySelectorAll("ul")[0];
lockyTroller.innerHTML=`<li>Mon meilleur ami est <a href='http://www.google.com'>Google</a></li>`;

//4.b: sélectionner le premier lien dans le 'li' précedement créé/
//avec la propriété style changer la couleur de texte du lien //

document.querySelectorAll("ul a[href]")[0].style.border = "10px solid red"; // ligne d'exercice pour le fun//
document.querySelectorAll("ul a[href]")[0].style.textDecoration = "none"; // ligne d'exercice pour le fun//
document.querySelectorAll("ul a[href]")[0].style.color = "green"; 

// Exercice 5: Création et suppression de plusieurs éléments //




