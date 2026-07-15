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




// ======================================================
// CINEMATIC INVITATION
// ======================================================

const invitationTL = gsap.timeline({

    scrollTrigger:{

        trigger:".invitation",

        start:"top 65%",

        once:true

    }

});



// ----------------------------
// GANESH
// ----------------------------

invitationTL.from(".ganeshIcon",{

    y:40,

    opacity:0,

    scale:.65,

    rotation:-10,

    duration:.8,

    ease:"back.out(1.8)"

});

// ----------------------------
// MANTRA
// ----------------------------

invitationTL.from(".ganeshMantra",{

    y:25,

    opacity:0,

    duration:.5

},"-=.25");

// ----------------------------
// MANGALA
// ----------------------------

invitationTL.from(".mangalaVakya",{

    y:20,

    opacity:0,

    duration:.5

},"-=.2");

// ----------------------------
// HEADING
// ----------------------------

invitationTL.from(".inviteHeading",{

    y:25,

    opacity:0,

    duration:.6

},"-=.2");

// ----------------------------
// GROOM
// ----------------------------

invitationTL.from(".inviteGroom",{

    x:-60,

    opacity:0,

    duration:.7,

    ease:"power3.out"

});

// ----------------------------
// AMPERSAND
// ----------------------------

invitationTL.from(".inviteAmp",{

    scale:0,

    rotation:180,

    opacity:0,

    duration:.5,

    ease:"back.out(2)"

},"-=.25");

// ----------------------------
// BRIDE
// ----------------------------

invitationTL.from(".inviteBride",{

    x:60,

    opacity:0,

    duration:.7,

    ease:"power3.out"

},"-=.3");

// ----------------------------
// SUMUHURTHAM
// ----------------------------

invitationTL.from(".sumuhurthamBlock",{

    y:30,

    opacity:0,

    duration:.5

});

// ----------------------------
// TIME
// ----------------------------

invitationTL.from(".timeBlock",{

    y:30,

    opacity:0,

    duration:.5

},"-=.2");

// ----------------------------
// MESSAGE
// ----------------------------

invitationTL.from(".messageBlock",{

    y:30,

    opacity:0,

    duration:.5

},"-=.2");

// ----------------------------
// VENUE
// ----------------------------

invitationTL.from(".venueBlock",{

    y:30,

    opacity:0,

    duration:.5

},"-=.2");


console.log(window.innerWidth);
console.log(window.innerHeight);
