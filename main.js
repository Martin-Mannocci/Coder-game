const textGame = document.getElementById("text")
const buttons = document.getElementById("option-btns")

let equip = {}

function startGame () {
    equip = {}
    showText (1)
}

function showText (textMain) {
    const textA = textArray.find(textA => textA.id === textMain)
    textGame.innerText = textA.text

    while (buttons.firstChild) {
        buttons.removeChild(buttons.firstChild)
    }

    textA.options.forEach (a => {
        if(showOption (a)){
            const button1 = document.createElement ('button')
            button1.innerText = a.text
            button1.classList.add ('test-btn')
            button1.addEventListener('click', () => optionSelect(a))
            buttons.appendChild(button1)
        }
    })


}

function showOption (option) {
    return option.reqEqp == null || option.reqEqp (equip)
}

function optionSelect (option) {
    const nextTextId = option.nextText
    equip = Object.assign (equip, option.setEquip)
    showText(nextTextId)
    
}

const textArray = [
    {
        id: 1,
        text: "Bienvenido",
        options: [
            {
                text: 'Jugar',
                nextText: 2,
            },
            
        ]
    },
    {
        id: 2,
        text: 'Te levantas en un cuarto vacio. O eso pensas en primera instancia. Luego de dar un par de pasos hacia adelante escuchas un sonido de algo deslizandose. Cuando miras hacia atras, para tu sorpresa, eran las baldosas del suelo. De ellas salen dos pilares, una contiene una espada media, de una mano, y un escudo de madera pequeño. \n El otro tiene un pequeño estuche, perfectamente ajustable a tu cinturon con dos dagas.',
        options:  [
            {
                text: "Tomas el escudo y la espada antes de seguir tu camino. ",
                nextText:4,
                setEquip: {SnS: true}
                
            },
            {
                text: "Te tomas el trabajo de ajustar las dagas a tu cinturon, antes de seguir tu camino.",
                nextText: 5,
                setEquip: {daggers: true}
            },
            {
                text: "Decidis que las armas solo te van a hacer mas lento. Y lo que sea que haya delante tuyo, lo podes enfrentar con tus puños.",
                nextText: 6,
                setEquip: {fists: true}
            }
        ]
    },
    {
        id:4,
        text: "Test espadas",
        reqEqp: (equipped)  => equipped.SnS
    },
    {
        id: 5,
        text: 'Test dagas',
        reqEqp: (equipped)  => equipped.daggers
    },
    {
        id:6,
        text: "test fists",
        reqEqp: (equipped)  => equipped.fists
    }
]

startGame()