gsap.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay: 0.2
})
 var h5timer=document.querySelector("#linepart1 h5")
 var counter=0;
 //timer ka code is here!
setInterval(function(){
    if(counter<100){
        h5timer.innerHTML= counter++
        
    }
    else{
        h5timer.innerHTML= counter
    }
    
},30)

var tl =gsap.timeline()

tl.to(".line h2",{
    animationName: "anime",//cs me naam ni dlaa animation ka kyuki phir sequence in chl rha tha yaha pr tl hai to ye shi se work karega
    opacity:1

})
   tl.to("#loader",{//loader page ka kaam khtm to ab wo khalti marega!
    opacity:0,
    duration:0.4,
    delay:3 //3sec ke baad loader bhai chl basenge!
})
tl.from("#page1",{//ab page ayega loader hatega to
  delay:0.2,
  y:1600,
  opacity:0
})
tl.to("#loader",{//loader ka kaam ni h gyb kar diya
    display:"none"
})
 tl.from("#nav",{
     opacity:0//makin nav appear afterwards
 })
 
tl.from("#middle1 h1, #middle2 h1, #middle3 h2 ,  #middle4 h1 ",{//makin appear middle sec(h1) from bottom
    y:140,
    stagger:0.2
})
function cursoranime(){
    //code for cursor
document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
      left:dets.x,
      top:dets.y
    })
  })
  Shery.makeMagnet("#nav2 h4" /* Element to target.*/, {
      //Parameters are optional.
      
    });
}
cursoranime()