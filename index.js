
function scroller(){
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


}
scroller()
function cursorEffect(){
    var page1Content=document.querySelector("#page1-content")
var cursor=document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })

})
page1Content.addEventListener("mouseenter",function(){

    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()
function BreakTheWords(){
    var h1=document.querySelector("#page1 h1")
var h1Text=document.querySelector("#page1 h1").textContent

var splittedText=h1Text.split("")

var clutter=""

splittedText.forEach(function(elem){
    clutter+=`<span>${elem}</span>`
})
h1.innerHTML=clutter

}
BreakTheWords()

gsap.from("h1 span",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.1,
    stagger:0.1,
})

function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.01,
        duration:3,
        delay:3,
        // ease:"back.out",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 55%",
            end:"top 30%",
            // markers:true,
            scrub:2.5
        }
    })
}
page2Animation();


function MenuAnimation(){
    var menu=document.querySelector("nav h4")
    var cross=document.querySelector("#full i")
    // var display=document.querySelector("#page1")
    var tl= gsap.timeline()
    
    
     tl.to("#full",{
        top:"0",
        duration:0.8,
    })
    tl.from("#full h4",{
        y:100,
        duration:0.7,
        stagger:0.3,
        opacity:0
    })
    tl.from('.socials',{
        y:100,
        duration:0.7,
        stagger:0.3,
        opacity:0
    })
    tl.pause()

    menu.addEventListener("click",function(){
        tl.play()
    })
    cross.addEventListener("click",function(){
        tl.reverse()

    })


}
MenuAnimation()

function hrAnimation(){

    const container = document.querySelector("#page3-top");

    // Create GSAP timeline
    const tl = gsap.timeline({ paused: true });

    // Define the animation
    tl.to("#page3-top hr", { scaleX: 1, transformOrigin: 'bottom left', duration: 0.6, ease: 'power2.out' });

    // Add event listeners to play/reverse the animation on hover
    container.addEventListener('mouseenter', () => tl.play());
    container.addEventListener('mouseleave', () => tl.reverse());
}

hrAnimation()

function page3TextAnimation(){
    gsap.to(".reveal",{
            opacity:0,
    })
    gsap.from(".reveal",{
        y:120,
        stagger:0.3,
        duration:3,
        delay:3,
        opacity:0,
        // ease:"back.out",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 55%",
            end:"top 30%",
            // markers:true,
            scrub:2.5
        }

    })
    gsap.to("#page3-top",{
        opacity:0,
})

    gsap.from("#page3-top",{
        y:130,
        stagger:0.3,
        duration:3,
        delay:3,
        opacity:1,
        // ease:"back.out",
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 55%",
            end:"top 30%",
            // markers:true,
            scrub:2.5
        }
    })
}
page3TextAnimation();
