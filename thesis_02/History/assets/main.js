gsap.registerPlugin(ScrollTrigger);


gsap.to(".img-right", { 
    scrollTrigger: {
        trigger: ".img-right",
        start: "top center",
        end: "top 500",
        scrub: 1,
        // markers: true,
    },
    y: 200,
    ease: "none",
    duration: 3
})


gsap.to(".holistic", { 
    autoAlpha: 1,
    stagger: {
        each: 0.1
    },
    scrollTrigger: {
        trigger: ".holistic",
        start: "top center",
        end: "bottom 300",
        scrub: 1,
        // markers: true,
    },
    y: 50,
    ease: "none",
    duration: .3
})

gsap.to(".evil", { 
    autoAlpha: 1,
    stagger: {
        each: 0.2
    },
    scrollTrigger: {
        trigger: ".evil",
        start: "top center",
        end: "bottom 300",
        scrub: 1,
        // markers: true,
    },
    x: 200,
    ease: "none",
    duration: .2
})




