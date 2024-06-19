//ID dos jogos

let gameOne = document.getElementById("game-1");
let gameTwo = document.getElementById("game-2");
let gameThree = document.getElementById("game-3");

let gameList = [gameOne, gameTwo, gameThree];

console.log(gameList);

console.log()



function alterarStatus() {
  
    console.log("Botão apertado");

    let gameThreeImg = document.getElementById("game-3-img");

    gameThreeImg.className = "dashboard__item__img";

    let gameThreeButton = document.getElementById("game-3-button");
    
    gameThreeButton.className = "dashboard__item__button";

    if (gameThreeButton.className == "dashboard__item__button"){
        console.log("True");
    } else {
        console.log("False");
    }
    
    gameThreeButton.innerHTML = "Alugar";
    // gameThreeButton.className = dashboard__item__button;

   

    // gameThree.innerHTML = "Teste";


    // if (gameThree.className == "dashboard__item__img dashboard__item__img--rented"){
    //     gameThree.className = "dashboard__items__item";
    //     console.log(gameThree.className)
    // };

    // if (gameThree.className == "dashboard__item__button dashboard__item__button--return"){
    //     gameThree.className == "dashboard__item__button";
    // };
};
//     imagem:
//     deixar de ser classe "dashboard__item__img dashboard__item__img--rented"
//     para ser classe "dashboard__items__item"

//     Botão:
//     deixar de ser classe "dashboard__item__button dashboard__item__button--return"
//     para ser classe "dashboard__item__button"


// };