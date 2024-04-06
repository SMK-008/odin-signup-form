const enter=document.querySelector("#submit")



enter.addEventListener('click',()=>{
   const invalid=document.querySelector("form")
   invalid.className="invalid"
})

document.querySelector("form").addEventListener('submit',(e)=>{
e.preventDeault()
alert("Success")
})


// const email=document.querySelector("#email")
// email.addEventListener("input",()=>{
//    const emailReg='/^([a-z0-9]{1,}\@gmail\.(com|org|edu|net|gov))$/'

//    let emailContent=email.textContent
//    const emailMatch=emailContent.match(emailReg)
//    // email.style.border="5px solid red"

//    if(emailMatch==null){
//       email.style.border="5px solid red"
//    }else if(emailMatch!=null){
//       email.style.border="2px solid green"
//    }
   
// })
