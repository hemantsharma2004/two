gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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








 function scrollTrigger()
 {
 gsap.to(".nav .part1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
       trigger:"#page1",
       scroller:"#main",
       start:"top 0",
       end:"top -5%",
        scrub:true,
    }
 })

 
 gsap.to(".right-nav .links ul li",{
  transform:"translateY(-100%)",
  scrollTrigger:{
     trigger:"#page1",
     scroller:"#main",
     start:"top 0",
     opactiy:0,
     end:"top -5%",
      scrub:true,
  }
})
 }
  scrollTrigger();




function video_animation()
{
var videocon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play");

videocon.addEventListener("mouseenter",function(){
       gsap.to(playbtn,{
           opacity:1,
            scale:1,
       })
})

 videocon.addEventListener("mouseleave",function(){
     gsap.to(playbtn,{
         opacity:0,
          scale:0,
         
     })
 })

 videocon.addEventListener("mousemove",function(dets){
      gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
      })
 })
}

 video_animation();




  function loading_animation()
  {
  gsap.from("#page1 h1",{
       y:100,
       opacity:0,
       duration:0.7,
       delay:0.9,
       stagger:0.2,
  })

  gsap.from("#page1 video-container",{
     scale:0.9,
    opacity:0,
    duration:1,
    delay:1.5,
})
}
 loading_animation();




   function cursor()
   {
       var cursor=document.querySelector("#cursor");
       var page3=document.querySelector("#page3");

       page3.addEventListener('mouseenter',function()
       {
         gsap.to("#cursor",{
             scale:1,
             opacity:1,
            
         })
       })
     

       
      page3.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
              left:dets.x,
              top:dets.y,
        })
     })


     page3.addEventListener('mouseleave',function()
     {
       gsap.to("#cursor",{
           scale:0,
           opacity:0,
          
       })
     })

    }
      cursor();
     



 



    

