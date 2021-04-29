# Whack-a-mole Game Javascript Tutorial

### 0 - HTML
- In the HTML file, add the `"up"` class to the mole and watch it appear!
    - hint: classes are separated by space, e.g. `class="oneClass anotherClass"`
- Remove the `"up"` class and watch it (you guessed it) disappear

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

*HTML*
```html
<div class="mole up"></div>
```
</details>


### 1) START GAME
- create a function called `startGame`, which does nothing and has no parameters
    - pay attention to uppercase letters!
- disable the start button
    - hint: the start button is already present in the Javascript file, it's called `startButton` and it's an object.
    - hint: use the `disabled` property of the button, set it to `true`

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
// starts the game
function startGame() {
    startButton.disabled = true
}
```
</details>


### 2) PEEP
- create a function `peep()` without parameters
- create a `mole` variable inside this function
- get the first element of the `moles` array and assign it to the `mole` variable
    - remember, arrays start at `0`!
- call `show` on that mole (i.e. pass that mole as parameter to the show function)
- make the code wait 1 second
    - hint: use the `sleep(time)` function where `time` is a number in milliseconds
    - before `sleep` write `await`
    - if the `peep` function includes an `await`, then it must be declared as "asynchronous". Just add `async` before the keyword `function`.
- call `hide` on that mole after 1s has passed
- call the `peep()` function from inside `startGame`

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
function startGame() {
    // ...
    peep()
}

async function peep() {
    const mole = moles[0]
    show(mole)
    await sleep(1000)
    hide(mole)
}
```
</details>


### 3) PEEP forever
- inside `startGame()`, wait 1.4s (1400ms 😉) and call `peep()` again, forever
    - hint: use `setInterval(action, time)` where `action` is the name of the `peep()` function, and `time` is a number in milliseconds

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
function startGame() {
    // ...
    setInterval(peep, 1400)
}
```
</details>


### 4) WHACK
- create a `whack()` function
- *outside everything*, add an event listener to the mole: `moles[0].addEventListener('click', whack)`
- add a log to the `whack()` function to see if it works
    - hint: `console.log()`

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
// ...

// runs when a mole is whacked
function whack() {
    console.log('Whackamole!')
}

moles[0].addEventListener('click', whack)
```
</details>


### 5) WHACK with CSS
- optional: remove the log inside of `whack()`
- when you whack a mole, run `hide()` on that mole
    - hint: `whack()` receives an `event` object as parameter. This event has a `target` property, which is the element that was clicked, which is the mole!

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
function whack(event) {
    const mole = event.target
    hide(mole)
}
```
</details>


### 6) HTML
- in the HTML, copy/paste the hole `<div>` (and corresponding mole!) to make 6 holes, one after the other
-  add event listeners to ALL the moles in the javascript code
    - hint: use a `for` loop

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

*HTML*
```html
<div class="game">
    <div class="hole">
        <div class="mole"></div>
    </div>
    <div class="hole">
        <div class="mole"></div>
    </div>
    <div class="hole">
        <div class="mole"></div>
    </div>
    <div class="hole">
        <div class="mole"></div>
    </div>
    <div class="hole">
        <div class="mole"></div>
    </div>
    <div class="hole">
        <div class="mole"></div>
    </div>
</div>
```

*Javascript*
```javascript
// ...

for (let mole of moles) {
    mole.addEventListener('click', whack)
}
```
</details>


### 7) RANDOM MOLE
- above `startGame()`, write a function that returns a random mole (i.e.: a random element from the moles array)
    - think about a good name for this function
    - first select a random index: `Math.floor(Math.random() * moles.length)`
    - then access that index of the `moles` array
    - return that element
- inside `peep()`, call the function you created and assign it to the `mole` variable

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
// returns a random element from the holes array
function randomMole() {
    const index = Math.floor(Math.random() * moles.length)
    const mole = moles[index]
    return mole
}

// ...

async function peep() {
    const mole = randomMole()
    // ...
}
```
</details>


### 8) SCORE
- in the beginning of the file, add a variable for the score
    - question: do we use `const` or `let`?
- set it to `0` when the game starts, before the call to `peep()`
- show it when the game starts (update the HTML `scoreBoard` element, use the `textContent` property)
- increase it by 1 when you wack a mole (i.e. in the `whack()` function)
    - hint: first, write the expression for "your score plus 1 point". Then assign this expression to the score-keeping variable
- show the new score immediately, like we did in `startGame()`

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
let score

// ...

function startGame() {
    score = 0
    scoreBoard.textContent = score
    // ...
}

function whack(event) {
    // ...
    score = score + 1
    scoreBoard.textContent = score
}
```
</details>


### 9) TIMEUP
- add a variable for whether the time is up or not
    - which type?
- inside `peep()`, add the condition that you don't do anything if the time is up!
- when the game starts, set the variable to `false`
- after 15 seconds, finish the game by setting the variable to `true`
    - hint: create a function `finish()` which sets the variable (to what?)
    - before calling `finish()`, use the `sleep(time)` function
    - before `sleep` write `await` and make the `startGame()` function `async`

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
let timeUp

// ...

function finish() {
    timeUp = true
}

async function startGame() {
    timeUp = false
    // ...
    await sleep(15000)
    finish()
}

async function peep() {
    if (!timeUp) {
        // ...
    }
}
```
</details>


### 10) RESTART GAME
- the `setInterval` function actually returns an object, let's call it `clock` and assign it to a variable
- after finishing the game, call `clearInterval()` passing the `clock` as parameter
- add a log to the `peep()` function to see if it worked!
- now we're able to restart the game. Inside the `finish()` function, re-enable the start button

<details>
<summary>Feeling lost? Expand to get a hint!</summary>

```javascript
function finish() {
    // ...
    startButton.disabled = false
}

async function startGame() {
    // ... right after peep() was called
    const clock = setInterval(peep, 1400)
    // ... after finish was called
    clearInterval(clock)
}
```
</details>


## Extra exercises

1. RANDOM TIMES
    - instead of 1 mole every second, make each mole after a random time, between 0.5 seconds and 1.5 seconds
        - hint: calculate a new `randomTime` value, and use that instead of `1000`

2. ALWAYS A DIFFERENT HOLE
    - prevent any mole from appearing in the same hole twice in a row
        - hint: you need to remember (i.e. store in a variable) which was the last hole to be chosen, if any. Then, if your new random hole is the same as that one, choose another one (perhaps another random one? or the next one?)

3. NO DOUBLE CLICKING
    - prevent the user from being able to click on the same mole twice (otherwise a double-click would give you 2 points)
        - hint: remove the event listener from the mole that was just hit. Remeber to re-add it as soon as possible!
