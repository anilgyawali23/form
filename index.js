
 let leftSection= document.querySelector(".left")
 let rightSection= document.querySelector(".right")
     let parent= leftSection.parentNode
 let secondHeading= document.querySelector('.right h1')
 let btn= document.querySelector('.btn')
  let input= document.querySelectorAll('input')
  btn.addEventListener('click', function(e){
   mainFunction()
  })
 let mainFunction=  function(){
     parent.insertBefore(leftSection, rightSection)
leftSection.classList.remove('add2')
 rightSection.classList.remove('add1')
leftSection.classList.add('add1')
 rightSection.classList.add('add2')
 let heading= document.querySelector('.left h1')
  let ancor= document.querySelector('.left a')
  setTimeout(function(){
     heading.innerText="Hellow Friends!"
ancor.innerText= "SIGN UP"
  secondHeading.innerText= "SIGN IN"
 },200)
  setTimeout(function(){
 btn.innerText="SIGN IN"
input[0].style.visibility="hidden";
},400)
ancor.addEventListener('click', function(e){
     parent.insertBefore(rightSection, leftSection)
leftSection.classList.remove('add1')
 rightSection.classList.remove('add2')
leftSection.classList.add('add2')
 rightSection.classList.add('add1')
  setTimeout(function(){
     heading.innerText="Welcome Back"
 ancor.innerText= "SIGN IN"
  secondHeading.innerText= "SIGN UP"
 },400)

  setTimeout(function(){
 btn.innerText="SIGN UP"
 // input[0].style.display="block"
input[0].style.visibility= "visible";
},200)
})
 }



