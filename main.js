const lobo = {
    nombre: "Lobo",
    hp: 15,
    atk: 2,
    def: 1
};

player = prompt("Ingrese su nombre")

const playerLvl1 = {
    nombre: player,
    hp: 30,
    atk: 5,
    def: 5
};

let arma = prompt(
    "Frente a vos, encontras dos tipos de sets de armas. Un par de dagas, o una espada y un escudo. Tambien podrias elegir ser orgulloso y confiar en que tus puños harian mejor el trabajo \n\n Ingrese 'espada', 'dagas, o 'puños' "
);
const StartGame = () => {

    switch (arma.toLowerCase()) {
        case "espada":
            alert(
                "Decidis que la espada es la mejor opcion. La tomas con una de tus manos, mientras que con la otra te aseguras de que el escudo quede firme en tu mano");
            break;

        case "dagas":
            alert("Las armas cortas siempre fueron lo ideal para vos. Ajustas las dagas junto con sus fundas en tu cinturon, escondiendo tus discretas armas.");
            break;

        case "puños":
            alert("Tus puños fueron suficientes para llevarte hasta aca. Contas con que lo seguiran siendo. \n\nContinuas con tu camino, dejando ambas armas atras.");
            break;

        default:
            alert("Por favor, ingrese 'espada', 'dagas', o  'puños'.");
            break;
    }

    alert(
        "Un lobo es lo primero que cruza tu camino. Tomas tu " + arma + " y te preparas para enfrentarlo"
    );

    Battle();
};

const batalla = (a, b) => a - b;

const Battle = () => {

   if  (lobo.hp != 0 && playerLvl1.hp != 0)
    while (lobo.hp != 0 && playerLvl1.hp != 0) {
        alert(
            "Levantas tu " + arma + " atacando al lobo con toda la fuerza que tenes"
        );
        lobo.hp = batalla(lobo.hp, playerLvl1.atk);
        playerLvl1.hp = batalla(playerLvl1.hp, lobo.atk);
        console.log("Los puntos de salud del lobo son", lobo.hp);
        console.log("los puntos de salud de " + player + " son", playerLvl1.hp);
    }

    if (lobo.hp <= 0 ) {
        alert("Pudiste derrotar al lobo con facilidad y continuas tu camino.")
    }

    else if  (playerLvl1.hp <= 0) {
        alert("El lobo obtuvo lo mejor de vos en este combate. Fin del juego.")
    }
}

StartGame();