// // document.getElementById("count-el").innerText = 5

// // to comment a whole bunch of lines press ctrl+k+c or cmd+k+c

// let firstbatch = 5
// let secondbatch = 7

// let count = firstbatch + secondbatch

// console.log(count)

// let myAge = 26

// console.log(myAge)

// let humanDogratio = 7

// let myDogage = myAge * humanDogratio

// console.log(myDogage)

// let bonuspoint = 50

// bonuspoint = bonuspoint + 50
// console.log(bonuspoint)
// bonuspoint = bonuspoint - 75
// console.log(bonuspoint)
// bonuspoint = bonuspoint + 50
// console.log(bonuspoint) 

// let count = 0

// function increment () {
//     count += 1
//     document.getElementById("count-el").innerText = count
//     console.log(count)
// }

// function save(){
//     console.log(count)
// }

// let not = "You have three notification"

// console.log(not)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Previous Entries:"
// let greeting = 

// welcomeEl.innerText = name + greeting

//welcomeEl.innerText += "Yoo"


//console.log(myGreeting)



let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let result = count + "-"
    saveEl.innerText += result
    console.log(count)
}

