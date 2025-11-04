const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.from("#h1", { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
gsap.from("#hero p", { y: 30, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });
gsap.from("#hero a", { y: 20, opacity: 0, duration: 1, delay: 1, ease: "power3.out" });



gsap.registerPlugin(ScrollTrigger);

const aboutTimeline = gsap.timeline({
		scrollTrigger: {
				trigger: "#about",   // element that triggers animation
				start: "top top",        // when top of trigger hits 80% of viewport
				end: "bottom 20%",       // when bottom of trigger hits 20% of viewport
				scrub: true,             // smooth scrubbing, animation follows scroll
				markers: false,            // shows start/end markers for debugging
				pin:true
		},
  defaults: { duration: 1, ease: "power1.out" } // default values for all animations
});

aboutTimeline
		.from("#about h2", { opacity:0 })
		.from("#about p", {opacity:0})
		.from("#about .card",{opacity:0})


const otherTechTimeline = gsap.timeline({
		scrollTrigger: {
				trigger: "#otherTech",   // element that triggers animation
				start: "top top",        // when top of trigger hits 80% of viewport
				end: "bottom 20%",       // when bottom of trigger hits 20% of viewport
				scrub: true,             // smooth scrubbing, animation follows scroll
				markers: false,            // shows start/end markers for debugging
				pin:true
		},
  defaults: { duration: 1, ease: "power1.out" } // default values for all animations
});
