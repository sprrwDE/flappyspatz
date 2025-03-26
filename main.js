const c = document.getElementById('canvas');
const ctx = c.getContext("2d");

const img1 = new Image();
const img2 = new Image();

img1.src = 'assets/images/down.png';
img2.src = 'assets/images/up.png';

function drawImage(img) {
    setInterval(() => {
        ctx.clearRect(0, 0, c.width, c.height); // Canvas leeren
        ctx.drawImage(img, 32, 32, 64, 64); // Optional: Größe anpassen
    }, 300);

}

// Sobald beide Bilder geladen sind, zeige das erste
let imagesLoaded = 0;
img1.onload = img2.onload = () => {
  imagesLoaded++;
  if (imagesLoaded === 2) {
    drawImage(img1);
  }
};

// Event Listener für Tastendruck
document.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    drawImage(img2);
  }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'a') {
      drawImage(img1);
    }
  });

  class Character {
    constructor() {}
  }