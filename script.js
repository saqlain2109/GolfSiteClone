var crs= document.querySelector("#cursor");
var blur= document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crs.style.left= dets.x+30+"px"
    crs.style.top= dets.y+"px"
    blur.style.left= dets.x-150+"px"
    blur.style.top= dets.y-150+"px"

})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crs.style.scale = 3
        crs.style.border = "1px solid #fff"
        crs.style.backgroundColor= "transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1
        crs.style.border = "0px solid #119F3A"
        crs.style.backgroundColor= "#119F3A"

    })

})

gsap.to('#nav',{
    backgroundColor:'black',
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -15px",
        end:"top -20px",
        scrub:1
    }

})
gsap.to('#main',{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -55%",
        end:"top -70%",
        scrub:1
    }

})
gsap.from('#aboutus img ,#about-us-in',{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
gsap.from('#colon1',{
    y:-80,
    x:-80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from('#colon2',{
    y:90,
    x:90,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from('#page4 h1',{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})
