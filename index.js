// Add your functions and code here
function destructivelyAppendKitten(Ralph) {
  kittens.splice(3, 0, "Ralph")
}

function destructivelyPrependKitten(Bob) {
  kittens.splice(0, 0, "Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(Broom) {
  return [...kittens, Broom]
}

function