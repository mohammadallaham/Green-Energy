// Green Energy Benefits settings
let span = document.querySelector(".info span");



// togglet active
let navButton = document.querySelector(".nav-button");
let navul = document.querySelector(".nav ul");
navButton.addEventListener("click",function(){
    navul.classList.toggle("block");
} )

// window.onload = function(){
//     let body = document.querySelector("body")
//     let overlay = document.createElement("div");
//     overlay.className = "overlay"
//     body.appendChild(overlay);
// }

var swiperx = document.querySelectorAll(".switching-list .trans li");
var swipertarget = document.querySelectorAll(".x .switch-content");


swiperx.forEach((s)=>{
    s.addEventListener("click",(()=>{
        swipertarget.forEach((swTarget)=>{
            swTarget.style.display = "none"
            if(s.getAttribute("data-target") == (swTarget.getAttribute("data-target") ) ){
                swTarget.style.display = "flex"
                
            }
        })
    }))
  
})

// onscroll event

let arrow = document.querySelector(".arrow")
arrow.addEventListener("click",function(){
    window.scrollTo(0,0)
})
window.onscroll= function(){

    if(window.scrollY > 200 ){
        arrow.style.display = "block"
    }else{
        arrow.style.display = "none"

    }
    
    
       
           }

// nav settings
function setAction(ele){
    ele.forEach((e)=>{
        e.addEventListener("click",function(){
            ele.forEach((e)=>{
                e.classList.remove("active")
            })
            e.classList.add("active")
        })
    })
}

let lis = document.querySelectorAll(".nav ul li");
setAction(lis)
lis.forEach((li)=>{
li.addEventListener("click",function(){
  
   window.scrollTo(0,li.getAttribute("data-height"))
    
})
})
let switchingListLis = document.querySelectorAll(".switching-list ul li")
switchingListLis.forEach((li)=>{
li.addEventListener("click",function(){
    switchingListLis.forEach((x)=>{
x.classList.remove("border")
    })
    li.classList.add("border")
})
})


let ReadMore = document.querySelector(".sec1-content .info span");
ReadMore.addEventListener("click",()=>{
    window.location = "https://justenergy.com/blog/what-is-green-energy/"
})
