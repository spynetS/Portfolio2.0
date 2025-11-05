const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const cursor = document.getElementById("cursor");

let mouse = { x: 0, y: 0 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // lower = slower/smoother

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

gsap.ticker.add(() => {
  // Smoothly interpolate between current pos and mouse
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;

  gsap.set(cursor, {
    x: pos.x,
    y: pos.y
  });
});

gsap.fromTo(
  "#cta",
  { y: 20, opacity: 0 },   // start
  { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" } // end
);
gsap.from("#h1", { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
gsap.from("#hero p", { y: 30, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });


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

const cards = gsap.utils.toArray(".card");

cards.forEach(card => {
  gsap.fromTo(card, 
    { opacity: 0, y: 50 },  // start state
    { 
      opacity: 1, 
      y: 0, 
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 20%",    // animation ends when top reaches 20% of viewport
        scrub: true,       // progress follows scroll, fades out when scrolling back
      },
      ease: "power1.out"
    }
  );
});

const linuxTimeline = gsap.timeline({
		scrollTrigger: {
				trigger: "#linux",   // element that triggers animation
				start: "top 0",        // when top of trigger hits 80% of viewport
				end: "+200%",       // when bottom of trigger hits 20% of viewport
				scrub: true,             // smooth scrubbing, animation follows scroll
				markers: false,            // shows start/end markers for debugging
				pin:true
		},
  defaults: { duration: 1, ease: "power1.out" } // default values for all animations
})
linuxTimeline.from("#tux",{x:-300})

const otherTechTimeline = gsap.timeline({
		scrollTrigger: {
				trigger: "#otherTech",   // element that triggers animation
				start: "top 0",        // when top of trigger hits 80% of viewport
				end: "+500%",       // when bottom of trigger hits 20% of viewport
				scrub: true,             // smooth scrubbing, animation follows scroll
				markers: false,            // shows start/end markers for debugging
				pin:true
		},
  defaults: { duration: 1, ease: "power1.out" } // default values for all animations
});

gsap.set("#other-banner", {
		scale: 0.8,
});
linuxTimeline.to("#shapes", {
		top: 0,
});


otherTechTimeline
		.from("#other-banner",{ y: "100vh", duration:3 })
		.to("#other-banner", { scale: 1, duration: 2.5 })


let icons = gsap.utils.toArray(".icon");
icons.forEach((icon) => {
		otherTechTimeline
				.from(icon,{scale:0})
});


const contactTimeline =  gsap.timeline({
		scrollTrigger: {
				trigger: "#contact",   // element that triggers animation
				start: "top 0",        // when top of trigger hits 80% of viewport
				end: "+500%",       // when bottom of trigger hits 20% of viewport
				scrub: true,             // smooth scrubbing, animation follows scroll
				markers: false,            // shows start/end markers for debugging
				pin:true
		},
  defaults: { duration: 1, ease: "power1.out" } // default values for all animations
});


//gsap.set("#contact-title",{x:"70vw",})
//contactTimeline.from("#contact-title",{y:"-50vh", opacity:0})
//contactTimeline.from("#contact-title",{x:"20vw", scale:2},">")
contactTimeline.to("#contact-title",{scale:0.9},">")
contactTimeline.to("#shapes",{x:"-50vw"})
contactTimeline.from("#contact-image",{y:"100vh"})

contactTimeline.from("#emailForm",{y:"100vh"})




// buttons

document.getElementById("homeButton").addEventListener("click", () => {
  const st = contactTimeline.scrollTrigger;

  // Scroll instantly to the end
  window.scrollTo({
			top: 0,
    behavior: "smooth" // smooth scroll
  });
});
document.getElementById("projectButton").addEventListener("click", () => {
		const st = document.getElementById("recent-work")
		window.scrollTo({
				top: st.offsetTop,  // end position in pixels
				behavior: "smooth" // smooth scroll
		});
});
document.getElementById("cta").addEventListener("click", () => {
		const st = document.getElementById("recent-work")
		window.scrollTo({
				top: st.offsetTop,  // end position in pixels
				behavior: "smooth" // smooth scroll
		});
});
document.getElementById("aboutButton").addEventListener("click", () => {
  const st = aboutTimeline.scrollTrigger;

  // Scroll instantly to the end
  window.scrollTo({
    top: st.end,  // end position in pixels
    behavior: "smooth" // smooth scroll
  });
});
document.getElementById("contactButton").addEventListener("click", () => {
  const st = contactTimeline.scrollTrigger;

  // Scroll instantly to the end
  window.scrollTo({
    top: st.end,  // end position in pixels
    behavior: "smooth" // smooth scroll
  });
});
