// console.log(new Date())


// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())

// //set zadavat znachenie


// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleTimeString())

let mode = 'full'
const now = new Date()

const output = document.getElementById('output')
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')

full.onclick = function() {
    mode = 'full'
    update()
}
date.onclick = function() {
    mode = 'date'
    update()
}
time.onclick = function() {
    mode = 'time'
    update()
}


setInterval(update, 1000)

update()

function update() {
    output.textContent = formate(mode)
}

function formate(formatMode){
    const now = new Date()
    switch(formatMode) {
        case 'time': 
            return now.toLocaleTimeString()
        case 'date': 
            return now.toLocaleDateString()
        case 'full': 
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}