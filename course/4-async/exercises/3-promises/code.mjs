const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newHP = currentHP - damage
      if (newHP <= 0) {
        reject(`The player suffers ${damage} points of damage and has fallen unconscious.`)
      } else {
        resolve(`Player has ${newHP} HP remaining`)
      }
      // ?
    }, 1000)
  })
}

// Don't touch below this line

function runApplyDamageTest(damage, currentHP) {
  console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
  applyDamage(damage, currentHP).then((message) => {
    console.log(`...applyDamage resolved with: ${message}`)
  }).catch((message) => {
    console.log(`...applyDamage rejected with: ${message}`)
  })
}

runApplyDamageTest(27, 50)
await sleep(1100)
runApplyDamageTest(50, 50)
await sleep(1100)
runApplyDamageTest(110, 100)
await sleep(1100)

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
