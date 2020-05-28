



// section5

const preview=document.querySelectorAll(".sec5 .row .col-3")


const listPreview = [...preview]

listPreview.map((value)=>{
    value.onmouseenter=()=>value.querySelector(".sec5__card-icon--bg").classList.add("hover");
    value.onmouseleave=()=>value.querySelector(".sec5__card-icon--bg").classList.remove("hover");
    
    }
    
    )


// price section code
    
const cards=document.querySelectorAll(".sec6 .pricing div.bd-highlight");


const listCard = [...cards]

listCard.map((value)=>{

value.onmouseenter=()=>{
    value.classList.add("elevate");
    value.querySelector(".sec6__card-select-btn--bg").classList.remove("d-none");
}

value.onmouseleave=()=>{
    value.classList.remove("elevate");
    value.querySelector(".sec6__card-select-btn--bg").classList.add("d-none");

}
});      



    
    


// news letter label

const labels=document.querySelectorAll(".sec10 .newletter input");
labels.forEach(function(value){
        value.onfocus=function(){
        value.parentElement.parentElement.querySelector("label").classList.remove("_label")
        }
        value.onblur=function(){
        if(!value.value){
            value.parentElement.parentElement.querySelector("label").classList.add("_label")
        }
        }
    })



let searchBtn = document.querySelector(".search-btn");
let searchClose = document.querySelector(".close-btn");
let searchPage = document.querySelector(".search");



searchBtn.onclick=function(){
    searchPage.classList.remove("d-none")
    Console.log("open")
}

searchClose.onclick=function(){
    searchPage.classList.add("d-none")
    Console.log("open")
}
