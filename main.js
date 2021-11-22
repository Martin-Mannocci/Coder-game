player = prompt("Ingrese su nombre")



function Enemy(nombre, atk, hp, def) {
    this.nombre = nombre;
    this.atk = atk;
    this.hp = hp;
    this.def = def;
}


function Weapons(nombre, minAtk, maxAtk) {
    this.nombre = nombre;
    this.minAtk = minAtk;
    this.maxAtk = maxAtk;
}

const dagger = new Weapons("Dagas", 1, 7)
const sword = new Weapons("Espada", 4, 4)
const fist = new Weapons("Puño", 3, 5)


const playerLvl1 = {
    nombre: player,
    hp: 30,
    atk: 5,
    def: 5
};

const lobo = {
    nombre: "Lobo",
    hp: 15,
    atk: 2,
    def: 1
};

let weaponArray = [
    dagger, sword
]

//desafios:
weaponArray.push(fist)

let sortArray = weaponArray.sort((a, c) => a.nombre.length - c.nombre.length);
console.log("Array", sortArray)

//fin desafios

let getRandomAtk = function (min, max) {
    let randomAtk = Math.floor((Math.random() * max) + min);
    while (randomAtk > max) {
        randomAtk = Math.floor((Math.random() * max) + min)
    }
    return randomAtk;
}




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

    battle();
};



const batalla = (a, b) => a - b;

const battle = () => {

    if (lobo.hp != 0 && playerLvl1.hp != 0)
        while (lobo.hp != 0 && playerLvl1.hp != 0) {
            alert(
                "Levantas tu " + arma + " atacando al lobo con toda la fuerza que tenes"
            );
            lobo.hp = batalla(lobo.hp, playerLvl1.atk);
            playerLvl1.hp = batalla(playerLvl1.hp, lobo.atk);
            console.log("Los puntos de salud del lobo son", lobo.hp);
            console.log("los puntos de salud de " + player + " son", playerLvl1.hp);
        }

    if (lobo.hp <= 0) {
        alert("Pudiste derrotar al lobo con facilidad y continuas tu camino.")
    } else if (playerLvl1.hp <= 0) {
        alert("El lobo obtuvo lo mejor de vos en este combate. Fin del juego.")
    }
}

StartGame();

alert("Finalmente llegas al campamento y despues de tu merecido descanso te pones a ver de lo que es capaz tu arma. Decidis atacar al muñeco de paja.");

switch (arma) {
    case "espada":
        console.log("Decidis probar tu espada contra el muñeco de paja y despues de tu ataque de 99 puntos de salud inciales dejas el muñeco de paja en " + batalla(99, getRandomAtk(sword.minAtk, sword.maxAtk)) + " puntos de salud");
        break;

    case "dagas":
        console.log("Decidis probar tus dagas contra el muñeco de paja y despues de tu ataque de 99 puntos de salud inciales dejas el muñeco de paja en " + batalla(99, getRandomAtk(dagger.minAtk, dagger.maxAtk)) + " puntos de salud");
        break

    case "puños":
        console.log("Decidis probar tus puños contra el muñeco de paja y despues de tu ataque de 99 puntos de salud inciales dejas el muñeco de paja en " + batalla(99, getRandomAtk(fist.minAtk, fist.maxAtk)) + " puntos de salud");
        break

}