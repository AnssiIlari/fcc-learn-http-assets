const message = await applyDamage(25, 100)

// Alternative solution: (comment out console.log(message) below)
/* const message = applyDamage(25, 50)
  .then((resolve) => {
    console.log(resolve);
  }); */


// Don't touch below this line

console.log(message)

function applyDamage(damage, currentHP) {
  return new Promise((resolve) => {
    const newHP = currentHP - damage
    setTimeout(() => {
      resolve(`The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
    }, 1000)
  })
}
