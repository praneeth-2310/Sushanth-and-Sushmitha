const track = document.querySelector('.scroll-track');
const bgImage = document.querySelector('.temple-bg');

window.addEventListener('scroll', () => {
    // 1. Get the current scroll position
    const scrollY = window.scrollY;
    
    // 2. Calculate the maximum distance we can scroll within the 250vh track
    // (Total track height minus one viewport height)
    const trackScrollDistance = track.offsetHeight - window.innerHeight;
    
    // 3. Create a progress ratio between 0 (top) and 1 (bottom of track)
    let progress = scrollY / trackScrollDistance;
    
    // 4. Clamp the progress so it doesn't go below 0 or above 1
    progress = Math.max(0, Math.min(progress, 1));
    
    // 5. Move the image up. 
    // Since the image is 150vh and the screen is 100vh, we pan it up by a maximum of 50vh.
    const moveDistance = 50 * progress; 
    
    // Apply the movement
    bgImage.style.transform = `translateY(-${moveDistance}vh)`;
});