<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>

// Create 200 stars
function createStars(count) {
  for (let i = 0; i < count; i++) {
    drawStar();
  }
}

// Draw a single star
function drawStar() {
  const tmpStar = document.createElement('figure');
  tmpStar.className = 'star';
  tmpStar.style.top = `${Math.random() * 100}%`;
  tmpStar.style.left = `${Math.random() * 100}%`;
  document.getElementById('stars').appendChild(tmpStar);
}

// Select all stars
function selectStars() {
  return document.querySelectorAll('.star');
}

// Animate stars using GSAP
function animateStars(stars) {
  stars.forEach((el, i) => {
    gsap.to(el, {
      opacity: Math.random(),
      duration: Math.random() * 0.5 + 0.5,
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 2,
    });
  });
}

// Initialize stars
const stars = selectStars();
createStars(200);
animateStars(stars);
