





document.addEventListener("DOMContentLoaded",function(){
let counting=(id,start,end,durations)=>{
    let obj=document.getElementById(id),
    current=start,
    range=end-start,
    increment=end>start ?1 :-1,
    stop=Math.abs(Math.floor(durations/range)),
    timer=setInterval(()=>{
        current+=increment;
        obj.textContent=current;
        if(current==end){
            clearInterval(timer);
        }
    },stop);


}


counting("count1",0,200,3000)
counting("count2",100,400,3000)
counting("count3",0,600,3000)
counting("count4",0,1000,3000)


})

let navContent=document.getElementById("navbarSupportedContent");
let all=document.querySelectorAll(".nav-item");
all.forEach(element => {
    element.addEventListener("click",()=>{
        navContent.classList.remove('show');
    })
});
navContent.classList.add('done');

let navheight=document.querySelector(".navbar").offsetHeight;


document.documentElement.style.setProperty("--scroll-padding",navheight + 1 + "px");


