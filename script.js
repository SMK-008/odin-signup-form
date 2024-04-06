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


//CHECK IF PASSWORD MATCH
const pwd=document.querySelector("#pwd")
const confir=document.querySelector("#confirm_pwd")
const warning=document.querySelector("#confirm")

confir.addEventListener("input",()=>{
   
   if(pwd.value!==confir.value){
      warning.textContent="Passwords do not match!!"
      warning.style="color:red;"
      confir.style.border=" 4px solid red"
   }else{
      warning.textContent=""
      warning.style="color:black;"
      confir.style.border=" 4px solid green"
   }
   
})