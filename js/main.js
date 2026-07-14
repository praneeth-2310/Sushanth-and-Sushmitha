gsap.registerPlugin(ScrollTrigger);
gsap.from(".subtitle",{
    opacity:0,
    y:20,
    duration:0.8
});

gsap.from(".groom",{
    opacity:0,
    y:25,
    duration:1,
    delay:0.2
});

gsap.from(".amp",{
    opacity:0,
    scale:0.9,
    duration:0.6,
    delay:0.5
});

gsap.from(".bride",{
    opacity:0,
    y:25,
    duration:1,
    delay:0.6
});

gsap.from(".date",{
    opacity:0,
    y:20,
    duration:0.8,
    delay:1
});


gsap.to(".heroContent",{

    opacity:0,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"80% top",

        scrub:true

    }

});


// ===============================================
// HERO CLOUD FLOAT
// ===============================================

gsap.to(".cloudLeft", {

    y: -8,

    x: -5,

    duration: 6,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});

gsap.to(".cloudRight", {

    y: 8,

    x: 5,

    duration: 7,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});


gsap.set(".templeCloud", {
    x: window.innerWidth * 0.3,
    opacity: 0.9
});

gsap.to(".templeCloud", {
    x: -window.innerWidth * 1.2,
    duration: 60,
    ease: "none",
    repeat: -1
});

const bgMusic = document.getElementById("bgMusic");

let musicStarted = false;

function startMusic() {

    if (musicStarted) return;

    musicStarted = true;

    bgMusic.play().catch(() => {
        console.log("Autoplay blocked by browser.");
    });

}

window.addEventListener("wheel", startMusic, { once: true });
window.addEventListener("touchstart", startMusic, { once: true });
window.addEventListener("keydown", startMusic, { once: true });
window.addEventListener("click", startMusic, { once: true });


console.log(window.innerWidth);
console.log(window.innerHeight);
