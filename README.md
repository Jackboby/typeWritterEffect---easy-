# typeWritterEffect-easy
this is a `very` easy way of making a typewritter effect!

## how does it work?
well, with the power of `setTimeout((){`codehere`},`1000`);` you can seprate each text by a `variable`

- `var` a
- `var` b
- `var` c

this is how you can dived your variables!

## what do i put into the `setTimeout` time?
you can easily do what i did and do this:

`document.getElementById("main").innerHTML = "";
setTimeout(() => {
document.getElementById("main").innerHTML = (a);
}, 100);
setTimeout(() => {
document.getElementById("main").innerHTML = (a + b);
}, 200);
setTimeout(() => {
document.getElementById("main").innerHTML = (a + b + c);
}, 400);`

and every second `+` 2 to the last second.

## here is a working version of the typewritter effect: https://typewriter-effect.jacktoons.repl.co.

