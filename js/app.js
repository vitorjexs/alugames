//ID dos jogos

let gameOne = document.getElementById("game-1");
let gameTwo = document.getElementById("game-2");
let gameThree = document.getElementById("game-3");

let gameList = [gameOne, gameTwo, gameThree];

console.log(gameList);

console.log()



function alterarStatus(game) {

    console.log("Botão apertado");



    if (game == 1) {

        let gameOneImg = document.getElementById("game-1-img");
        let gameOneButton = document.getElementById("game-1-button");

        if (gameOneImg.className == "dashboard__item__img" ||
            gameOneButton.className == "dashboard__item__button") {

            gameOneButton.innerHTML = "Devolver";
            gameOneImg.className = "dashboard__item__img dashboard__item__img--rented";
            gameOneButton.className = "dashboard__item__button dashboard__item__button--return";


        } else if (gameOneImg.className == "dashboard__item__img dashboard__item__img--rented" ||
            gameOneButton.className == "dashboard__item__button dashboard__item__button--return") {

            gameOneImg.className = "dashboard__item__img";
            gameOneButton.className = "dashboard__item__button";
            gameOneButton.innerHTML = "Alugar";

        }


    } else if (game == 2) {
        let gameTwoImg = document.getElementById("game-2-img");
        let gameTwoButton = document.getElementById("game-2-button");

        if (gameTwoImg.className == "dashboard__item__img" ||
            gameTwoButton.className == "dashboard__item__button") {

            gameTwoButton.innerHTML = "Devolver";
            gameTwoImg.className = "dashboard__item__img dashboard__item__img--rented";
            gameTwoButton.className = "dashboard__item__button dashboard__item__button--return";


        } else if (gameTwoImg.className == "dashboard__item__img dashboard__item__img--rented" ||
            gameTwoButton.className == "dashboard__item__button dashboard__item__button--return") {

            gameTwoImg.className = "dashboard__item__img";
            gameTwoButton.className = "dashboard__item__button";
            gameTwoButton.innerHTML = "Alugar";

        }

    } else if (game == 3) {

        let gameThreeImg = document.getElementById("game-3-img");
        let gameThreeButton = document.getElementById("game-3-button");

        if (gameThreeImg.className == "dashboard__item__img" ||
            gameThreeButton.className == "dashboard__item__button") {

            gameThreeButton.innerHTML = "Devolver";
            gameThreeImg.className = "dashboard__item__img dashboard__item__img--rented";
            gameThreeButton.className = "dashboard__item__button dashboard__item__button--return";


        } else if (gameThreeImg.className == "dashboard__item__img dashboard__item__img--rented" ||
            gameThreeButton.className == "dashboard__item__button dashboard__item__button--return") {

            gameThreeImg.className = "dashboard__item__img";
            gameThreeButton.className = "dashboard__item__button";
            gameThreeButton.innerHTML = "Alugar";

        }

    }
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