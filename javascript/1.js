// the "start" button
const startButton = document.getElementById("startButton")
// an array of moles
const moles = document.querySelectorAll('.mole') 
// the counter of your score
const scoreBoard = document.querySelector('.score')

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

// starts the game
function startGame() {
    startButton.disabled = true
}
