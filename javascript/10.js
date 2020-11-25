// the "start" button
const startButton = document.getElementById("startButton")
// an array of moles
const moles = document.querySelectorAll('.mole') 
// the counter of your score
const scoreBoard = document.querySelector('.score')

let score
let timeUp

// waits for the given amount of milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// shows the specified mole
function show(mole) {
    // add the CSS class so selected mole can "pop up"
    mole.classList.add('up')   
}

// hides the specified mole
function hide(mole) {
    // remove the CSS class so selected mole can "pop down"
    mole.classList.remove('up')
}

// returns a random element from the holes array
function randomMole() {
    const index = Math.floor(Math.random() * moles.length)
    const mole = moles[index]
    return mole
}

function finish() {
    timeUp = true
    startButton.disabled = false
}

// starts the game
async function startGame() {
    startButton.disabled = true
    score = 0
    timeUp = false
    scoreBoard.textContent = score
    peep()
    const clock = setInterval(peep, 1400)

    await sleep(15000)
    finish()
    clearInterval(clock)
}

// makes a mole appear and then disappear
async function peep() {
    if (!timeUp) {
        const mole = randomMole()
        show(mole)
        await sleep(1000)
        hide(mole)
    }
}

// runs when a mole is whacked
function whack(event) {
    const mole = event.target
    hide(mole)
    score = score + 1
    scoreBoard.textContent = score
}

for (let mole of moles) {
    mole.addEventListener('click', whack)
}
    
