const textGame = document.getElementById("text")
const buttons = document.getElementById("option-btns")

function startGame () {
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

function showOption () {
    return true
}

function optionSelect (option) {
    const nextTextId = option.nextText
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
        text: 'Te levantas en un cuarto vacio',
        options:  [
            {
                text: "Caminas hacia adelante",
                nextText:4
            },
            {
                text: "Volves a inspeccionar",
                nextText: 5,
            }
            
        ]
    },
    {
        id:4,
        text: "Caminando hacia adelante llegas a otro cuarto"
    },
    {
        id: 5,
        text: 'Te encontras con una pared, ¿que esperabas?'
    }
]

startGame()