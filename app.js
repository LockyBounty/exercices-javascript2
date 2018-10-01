//Exercice 1//

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

let a = document.querySelectorAll("blockquote"); //On met le resultat dans une variable / Attention, directement l'element //
for (i = 0; i < a.length; i++){ //On fait une boucle pour parcourir toutes les occurences // 
    a[i].classList.add("bg-white");// On ajoute "bg-teal à toutes les occurences."
}
