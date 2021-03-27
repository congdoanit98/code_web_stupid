var tl = gsap.timeline();

tl.from(".loading-picture", {duration: 1, opacity: 0, ease: "power3"})
tl.to(".loading-picture", {duration: 1, opacity: 0, ease: "power3"})

tl.from(".myname", {duration: 1, y: 100, opacity: 0, ease: "power3"})
tl.from(".maxim", {duration: 1, y: 100, opacity: 0, ease: "power3"},"-=0.5")
tl.from(".vietnamese-info", {duration: 1, y: 100, opacity: 0, ease: "power3", stagger: 0.2})

// tl.from(".manage-video-right", {duration: 1, y: 100, opacity: 0.5, scale: 0.8});

gsap.registerPlugin(ScrollTrigger);

const videoRight = gsap.from(".manage-video-right", {
    y: 100,
    duration: 2,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
  });


  
ScrollTrigger.create({
    trigger: ".video",
    animation: videoRight,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 300px",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});

const videoLeft = gsap.from(".manage-video-left", {
    delay: 0.25,
    y: 100,
    duration: 2,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
});
ScrollTrigger.create({
    trigger: ".video",
    animation: videoLeft,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 300px",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});

const projectIntro = gsap.from(".project-intro", {
    delay: 0.25,
    x: -200,
    duration: 2,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
});
ScrollTrigger.create({
    trigger: ".project",
    animation: projectIntro,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 450px",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});

const project = gsap.from(".project-item", {
    delay: 0.25,
    y: 50,
    duration: 2,
    opacity: 0,
    ease: "power3",
    stagger: 0.5
});
ScrollTrigger.create({
    trigger: ".project",
    animation: project,
    // Uncomment these to see how they affect the ScrollTrigger
    // markers: true,
    start: "top 500px",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
    // onUpdate: self => {
    //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    // }
});