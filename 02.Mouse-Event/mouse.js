// Exercice 2 : Mouse event //

// Exercice 2.1 : 
 //   Créer (en HTML) 3 DIV possèdant la même classe 'hoverMe' //
 //   Faire disparaître les divs lorsque l'on passe la souris dessus //
 //   Tip : utilise le mouseenter ou mouseover //
/*
 let mouseLocky = document.querySelectorAll(".hoverMe");

 function mouseOver() {
     this.style.opacity = "0.5"; //le "this" ici va chercher la valeur courante (ici, mouseLocky) lors son appel et l'utiliser//
 }
 for (i=0; i < mouseLocky.length ; i++){
     mouseLocky[i].addEventListener("mouseover", mouseOver);
 };

 */

// Exercice 2.2 : 
    //Créer (en HTML) une DIV avec une l'id "reset" //
    //Faire de sorte que quand on clique dessus elle fasse réapparaitre les 3 divs premièrement créées //
    //Tip : avec une animation ce serait super cool //


/*
let mouseLockyAppear = document.querySelector("#reset");
    //querySelector va chercher directement la premiere occurence tandis qu'avec querySelectorAll il faut préciser avec [0]//

function mouseAppear() {
    
    for(i=0;i<mouseLocky.length;i++){
        mouseLocky[i].style.opacity = "0.9";
    }
};
mouseLockyAppear.addEventListener("click", mouseAppear);

*/

// Exercice 2.3 : 

    //Créer (en HTML) 2 DIV avec une id chacune 'axe-x' et 'axe-y'
    //Faire de sorte que lorsque l'on bouge la souris dans la fenêtre, la position soit affichée dans les divs associées
    //Tip : Utiliser l'évènement reçu en argument Tip : Utiliser innerHTML ou innerText
    //Tip Locky : Bien comprendre l'utilisation de "element.addEventListener("click", function(){ myFunction(p1, p2); });"
        //car c'est cela qui permet lancer automatiquement la fonction dans les div ou autres d'HTML


//ATTENTION ! inclure en début "window.onload = function () {...}, car on a besoin de laisser le temps à la page HTML de charger
// sinon ça va retourner une erreur ! car le script js externe veut se lancer d'abord et retourne une valeur null pour un
// addEventListener //

window.onload = function () {
    document.querySelector("body").addEventListener("mousemove",
        //ici on crée un event "mousemove" pour body, puis ajoute la fonction// alt: document.body.addEventListener(...)//

    function souris(event) {
        let x = event.clientX;
        let y = event.clientY;
        document.getElementById('axe-x').innerHTML = `Position de x : ${x}px`;
        document.getElementById('axe-y').innerHTML = `Position de y : ${y}px`;

    });
};

