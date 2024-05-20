// main.js


function locomotiveanime(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

} 
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
tl.from("#middle1,#page2",{
  opacity:0,
},"-=1.2");/*page 1 ke content ka anime fst kr diya*/

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
locomotiveanime()
function Sheryanime(){
  Shery.imageEffect(".imgdiv",{
    style:5,
    debug:true,
    gooey:true
  })
}
Sheryanime()
