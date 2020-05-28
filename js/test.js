


let clip =document.getElementById("clip");
let scrol =document.getElementById("scroll");






scrol.addEventListener('scroll',()=>{
    console.log("scrolling")

    let x = (6858/7563)*scrol.scrollTop
    clip.scrollLeft=Math.round(x)


})
