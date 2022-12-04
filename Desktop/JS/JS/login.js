let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let btn = document.querySelector(".btn")
let divFourth = document.querySelector(".divFourth")

btn.onclick = function(){
    if(input1.value != "" && input2.value != ""){
        if(input1.value === "admin" && input2.value === "123"){
            divFourth.innerHTML = `
                <p class="p">Welcome</p>
            `
        }else{
            divFourth.innerHTML = `
                <p class="p">Not Register</p>
        `
        }
    }else{
        divFourth.innerHTML = `
            <p class="p">Please enter your username and password</p>
        `
    }
}
