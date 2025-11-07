// JavaScript to create the typing effect for Liza Siddiqui
let text = "Liza Siddiqui";
let index = 0;
let speed = 100; // Speed of typing effect in milliseconds

function typeText() {
    if (index < text.length) {
        document.getElementById("name").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
    }
}

// Start typing animation once the page loads
window.onload = typeText;
function playVideo(button) {
    const card = button.closest('.card');
    const video = card.querySelector('video');
  
}
function playVideo(button) {
    const card = button.closest('.card00');
    const video = card.querySelector('video');
  
    // Pause all other videos
    document.querySelectorAll('video').forEach(v => {
      if (v !== video) {
        v.pause();
        v.currentTime = 0;
        const otherOverlay = v.previousElementSibling;
        if (otherOverlay) otherOverlay.style.display = 'flex';
        v.controls = false;
      }
    });
  
    button.style.display = 'none';
    video.play();
    video.controls = true;
  
    video.addEventListener('ended', () => {
      button.style.display = 'flex';
      video.controls = false;
    });
  }

