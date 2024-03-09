// const arr = [1, 3, , , 5, 20]

// arr[1] = 'one'
// arr[2] = 'two'
// arr[3] = 'three'
// console.log(arr)
// console.log(arr.length)
// console.log(arr[3])
// console.log(arr[arr.length - 2])

const title = document.getElementById('title')
const create = document.getElementById('create')
const list = document.getElementById('list')

const arr = ['mal sugaru', 'homeworkl', 'yernasip']

function render (){
    for (let i = 0; i < arr.length; i++){
        list.insertAdjacentHTML('beforeend',
        `
        <li style="width: 100px;
            height: 50px; background-color: rgb(24, 27, 63); color: white;">
                <span>${arr[i]}</span>
        </li>`
        )
    }





    // list.insertAdjacentHTML('beforeend',
    //     `
    //     <li style="width: 100px;
    //         height: 50px; background-color: rgb(24, 27, 63); color: white;">
    //             <span>${arr[0]}</span>
    //     </li>`
    // )

    // list.insertAdjacentHTML('beforeend',
    //     `
    //     <li style="width: 100px;
    //         height: 50px; background-color: rgb(24, 27, 63); color: white;">
    //             <span>${arr[1]}</span>
    //     </li>`
    // )
}

render()

create.onclick = function(){
    // list.innerHTML = title.value 
    if(title.value.length === 0){
        return
    }
    list.insertAdjacentHTML('beforeend',
        `
        <li style="width: 100px;
            height: 50px; background-color: rgb(24, 27, 63); color: white;">
                <span>${title.value}</span>
        </li>`
    )
    title.value = ''
    
}