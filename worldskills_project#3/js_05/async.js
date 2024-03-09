// const timeout = setTimeout(() => {
//     console.log('First async')
// } , 2000)

// clearTimeout(timeout)


// setTimeout(() => {
//     console.log('Second async')
// } , 3000)

// let count = 0
// setInterval(() =>{
//     console.log('tick', ++count )
// }, 2000)

// function delay(callBack, time = 1000) {
//     setInterval(callBack, time)
// }
// let count = 0
// delay (() =>{
//     console.log('Yernasip', ++count)
// }, 2000)

const delay = (time = 1000) => {
    const promise = new Promise ((resolve, reject ) => {
        setTimeout(() => {
            resolve([1, 2, 3])   
        }, time)

    })
    return promise
}

// delay(2500)
//     .then((data) => {
//         console.log('Timeout', data)
//         return data.map((x) => x ** 2)
//     })
//     .then((data) => {
//         console.log(data)
//     })

const getData = () => new Promise((resolve) =>
resolve([1,2,3]))

getData().then(array => console.log(array))

async function asyncExample() {
    try{
        const data = await getData()
        console.log(data)
    }   catch (err) {
        console.log(err)
    }   finally{
        console.log('finally')
    }  
}

asyncExample()