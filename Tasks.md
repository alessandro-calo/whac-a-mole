# Whac-a-mole Game Javascript Tutorial

0) HTML
    - In the HTML file, add the `"up"` class to the mole and watch it appear!
        - tip: classes are separated by space, e.g. `class="oneClass anotherClass"`
    - Remove the `"up"` class and watch it (you guessed it) disappear

1) START GAME
    - create a function called `startGame`, which does nothing and has no parameters
        - pay attention to uppercase letters!
    - disable the start button
        - tip: the start button is already present in the Javascript file, it's called `startButton` and it's an object.
        - tip: use the `disabled` property of the button, set it to `true`

2) PEEP
    - create a function `peep()` without parameters
    - create a `mole` variable inside this function
    - get the first element of the `moles` array and assign it to the `mole` variable
        - remember, arrays start at `0`!
    - call `show` on that mole (i.e. pass that mole as parameter to the show function)
    - make the code wait 1 second
        - tip: use the `sleep(time)` function where `time` is a number in milliseconds
        - before `sleep` write `await`
        - if the `peep` function includes an `await`, then it must be declared as "asynchronous". Just add `async` before the keyword `function`.
    - call `hide` on that mole after 1s has passed
    - call the `peep()` function from inside `startGame`

3) PEEP forever
    - inside `startGame()`, wait 1.4s (1400ms 😉) and call `peep()` again, forever
        - tip: use `setInterval(action, time)` where `action` is the name of the `peep()` function, and `time` is a number in milliseconds

4) WHAC
    - create a `whac()` function
    - *outside everything*, add an event listener to the mole: `moles[0].addEventListener('click', whack)`
    - add a log to the `whac()` function to see if it works
        - tip: `console.log()`

5) WHAC with CSS
    - remove the log if you want
    - when you whac a mole, run `hide()` on that mole
        - tip: `whac()` receives an `event` object as parameter. This event has a `target` property, which is the element that was clicked, which is the mole!

6) HTML
    - copy/paste the hole `<divd>` to make 6 holes, one after the other
    - remember to add event listeners to ALL the moles!
        - tip: use a `for` loop

7) RANDOM MOLE
    - above `startGame()`, write a function that returns a random mole (i.e.: a random element from the moles array)
        - think about a good name for this function
        - first select a random index: `Math.floor(Math.random() * moles.length)`
        - then access that index of the `moles` array
        - return that element
    - inside `peep()`, call the function you created and assign it to the `mole` variable

8) SCORE
    - in the beginning of the file, add a variable for the score
        - question: do we use `const` or `let`?
    - set it to `0` when the game starts, before the call to `peep()`
    - show it when the game starts (update the HTML `scoreBoard` element, use the `textContent` property)
    - increase it by 1 when you wack a mole (i.e. in the `whac()` function)
        - tip: first, write the expression for "your score plus 1 point". Then assign this expression to the score-keeping variable
    - show the new score immediately, like we did in `startGame()`


9) TIMEUP
    - add a variable for whether the time is up or not
        - which type?
    - inside `peep()`, add the condition that you don't do anything if the time is up!
    - when the game starts, set the variable to `false`
    - after 15 seconds, finish the game by setting the variable to `true`
        - tip: create a function `finish()` which sets the variable (to what?)
        - before calling `finish()`, use the `sleep(time)` function
        - before `sleep` write `await` and make the `startGame()` function `async`

10) RESTART GAME
    - the `setInterval` function actually returns an object, let's call it `clock` and assign it to a variable
    - after finishing the game, call `clearInterval()` passing the `clock` as parameter
    - add a log to the `peep()` function to see if it worked!
    - now we're able to restart the game. Inside the `finish()` function, re-enable the start button

### Extra exercises

1. RANDOM TIMES
    - instead of 1 mole every second, make each mole after a random time, between 0.5 seconds and 1.5 seconds
        - tip: calculate a new `randomTime` value, and use that instead of `1000`

2. ALWAYS A DIFFERENT HOLE
    - prevent any mole from appearing in the same hole twice in a row
        - tip: you need to remember (i.e. store in a variable) which was the last hole to be chosen, if any. Then, if your new random hole is the same as that one, choose another one (perhaps another random one? or the next one?)

3. NO DOUBLE CLICKING
    - prevent the user from being able to click on the same mole twice (otherwise a double-click would give you 2 points)
        - tip: remove the event listener from the mole that was just hit. Remeber to re-add it as soon as possible!
