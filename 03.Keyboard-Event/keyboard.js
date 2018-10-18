// Exercice 3 : keyboard event //

// Exercice 3.1 : 
    //   Crée (en HTML) une DIV avec l'id "character" //
    //   Faire changer de couleur de fond a cette DIV à chaque fois qu'on appuie 
    //   sur une touche numérique de 0 à 9 sur le clavier
//   Tip: utiliser le switch / et event.charCode //
/*        
    function changerfond(event) {    
        switch (event.charCode) {
            case 48:
                document.querySelector("#character").style.backgroundColor="cyan";        
                break;
            case 49:
                document.querySelector("#character").style.backgroundColor="blue";
                break;
            case 50:
                document.querySelector("#character").style.backgroundColor="green";
                break;
            case 51:
                document.querySelector("#character").style.backgroundColor="yellow";
                break;
            case 52:
                document.querySelector("#character").style.backgroundColor="teal";
                break;
            case 53:
                document.querySelector("#character").style.backgroundColor="pink";
                break;
            case 54:
                document.querySelector("#character").style.backgroundColor="black";
                break;
            case 55:
                document.querySelector("#character").style.backgroundColor="gray";
                break;
            case 56:
                document.querySelector("#character").style.backgroundColor="lightblue";
                break;
            case 57:
                document.querySelector("#character").style.backgroundColor="dimgray";
                break;
            default:
                document.querySelector("#character").style.backgroundColor="darkgray";
                alert('Appuyez sur un chiffre de 0 to 9 : (maj+num)');
        };
    };

    document.querySelector("body").addEventListener("keypress", changerfond);
*/

// Exercice 3.2 : 
    /*
    Créer (en HTML) 4 div avec les id suivantes : "up, down, left, right"
    Créer une class 'highlight' dans le CSS qui réduit l'opacité de l'élément
    Pour chaque div ajouter la classe 'highlight' quand une des touches directionnelles est enfoncée
    Pour chaque div retirer la classe 'highlight' quand on relâche la touche

    Tip : Faire la structure HTML sans JavaScript*/

let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

function presse(event) {
    switch (event.keyCode) {/*preferez event.keyCode à event.charCode ici, sinon ça fout la merde*/
        case 38:
            up.classList.add("highlight");
            break;
        case 40:
            down.classList.add("highlight");
            break;
        case 37:
            left.classList.add("highlight");
            break;
        case 39:
            right.classList.add("highlight");
            break;
        default:
            window.confirm("Veuillez n'utiliser que les flèches directionnelles !");
            
    };
};

function relacheBouton(event) {
    switch (event.keyCode) {
        case 38:
            up.classList.remove("highlight");
            break;
        case 40:
            down.classList.remove("highlight");
            break;
        case 37:
            left.classList.remove("highlight");
            break;
        case 39:
            right.classList.remove("highlight");
            break;
     
    };
};

document.body.addEventListener("keydown", presse);
document.body.addEventListener("keyup", relacheBouton);
 
    
 