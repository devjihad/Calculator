let display = document.getElementById('display')
let buttons = document.querySelectorAll('button')
let output = document.getElementById('h1')

let value = ""

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (f) =>{
        if (f.target.innerHTML =="="){
        value = eval(value);
        output.innerText= value
        }
        else if( f.target.innerHTML == "AC"){
            value=""
            output.innerText = value
        }
        else if(f.target.innerHTML == "DEL"){
            value= value.substring(0, value.length-1)
            output.innerText = value
        }
        else if(f.target.innerHTML =="ON"){
            value = 0
            output.innerText = value
        }
        else{
            value += f.target.innerHTML;
        output.innerText = value 
        }
    })

})