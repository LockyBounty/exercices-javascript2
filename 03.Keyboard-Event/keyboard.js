// Exercice 3 : keyboard event //

// Exercice 3.1 : 
    //   Crée (en HTML) une DIV avec l'id "character" //
    //   Faire changer de couleur de fond a cette DIV à chaque fois qu'on appuie 
    //   sur une touche numérique de 0 à 9 sur le clavier
//   Tip: utiliser le switch / et event.charCode //
        
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
    
    
 