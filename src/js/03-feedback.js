const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form")

form.addEventListener("input", throttle(onInput, 500))




let info = pullInfo()


if (info) {
    form.elements.email.value = info.email
    form.elements.message.value = info.message
} else {
    info = {
        email: "",
        message: "",
    }
}


function  onInput(e) {
    if (e.target.name === "email")  {
    info.email = e.target.value.trim()
    }
    
    if (e.target.name === "message") {
    info.message = e.target.value.trim()
    }
 
    pushInfo(info)
}
    

 


 function pushInfo (obj) {
   localStorage.setItem("feedback-form-state", JSON.stringify(obj) ) 
} 

function pullInfo() {
 return JSON.parse(localStorage.getItem("feedback-form-state"))   
}

form.addEventListener("submit", onSubmit) 

function onSubmit(e) {
    e.preventDefault()
    localStorage.clear()
    console.log(info);
    form.reset()
    }