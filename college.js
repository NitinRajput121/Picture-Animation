gsap.to(".imageContainer",{   //     it is for one thing and the things is got from gsap cdn
    width:"100%",
    ease:Expo.easeInOut,
   top:"0",
   
    duration:2,
    stagger:2
})

gsap.to(".text h1",{
    duration:1,
    ease:Expo.easeInOut,
    stagger:2,
    top:"0"
})

gsap.to(".text h1",{
    duration:1,
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%"
})