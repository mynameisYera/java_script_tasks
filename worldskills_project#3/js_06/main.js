// const car = {
//     model: 'Tesla',
//     year: 2023
// }

// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)

// console.log(json)
// console.log(parsed)

const list = document.getElementById('list')
const filter = document.getElementById('filter')
let USERS = []

filter.addEventListener('input', (event) =>{
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter(user => {
        return user.name.toLowerCase().includes(value)
    })

    render(filteredUsers)
})


async function start(){
    list.innerHTML = 'Loading....'
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)
    }   catch (err) {
        list.innerHTML = `<h1 class='h1dar'>Something happen wrong</h1>`
    }
}

function render(users = []){
    const html = users.map(toHTML).join('')
    list.innerHTML = html
}

function toHTML(user){
    return`
    <li class='liler'>${user.name}</li>
    `
}

start()