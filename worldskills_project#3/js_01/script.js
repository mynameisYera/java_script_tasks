// let num = 23 //number  
// const firstName = 'Yernasip'  //string
// let isProgrammer = true; //bolean


// alert(num, firstName)

// console.log(num + 20)
// console.log(num - 20)
// console.log(num / 20)
// console.log(num * 20)
// console.log(num )

// let num3 = num + (10 * 2) / 5 - 1
// console.log(num3)
 
// const fullName = firstName + ' Duisebay'
// console.log(fullName)


const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+' 

plusBtn.onclick = function () {
    action = '+'
    console.log(action)
}

minusBtn.onclick = function () {
    action = '-'
    console.log(action)
}


function colorResult(resul) {
    if (resul < 0){
        result.style.color = 'red'
    } else {
        result.style.color = 'green'
    }
    result.textContent = resul
}



submitBtn.onclick = function () {
    
    // const sum = (Number(input1.value) + Number(action) + Number(input2.value))

    if (action == '+') {
        let sum = (Number(input1.value) + Number(input2.value))
        colorResult(sum)
    }
    else{
        let sum = (Number(input1.value) - Number(input2.value))
        colorResult(sum)
    }
   

}







