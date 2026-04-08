const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");

      if (filter === "all" || categories.includes(filter)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("show");
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }
});

const constructionImages = [
  "images/Construction/barafterfinishingtop.JPG",
  "images/Construction/barbeingrefinished.JPG",
  "images/Construction/barblackrepaint.JPG",
  "images/Construction/barfinishedconstruction.JPG",
  "images/Construction/barframing.jpg",
  "images/Construction/barframing2.jpg",
  "images/Construction/barinshed.JPG",
  "images/Construction/barmappingbeerboxes.JPG",
  "images/Construction/barshedwork.JPG",
  "images/Construction/barwithepoxydrying.JPG",
  "images/Construction/barwithepoxydrying2.JPG",
  "images/Construction/barwithepoxydryingfar.JPG",

  "images/Construction/dyetablebeforecutting.JPG",
  "images/Construction/dyetableclamps.JPG",
  "images/Construction/dyetablefinishedpainting.jpg",
  "images/Construction/dyetablefull.JPG",
  "images/Construction/dyetabletapeoutlines.JPG",
  "images/Construction/dyetablewithpoly.JPG",
  "images/Construction/dyetablewithpoly2.JPG",

  "images/Construction/lettershung1.JPG",
  "images/Construction/lettershung2.JPG",
  "images/Construction/lettershungclose.JPG",

  "images/Construction/pokertabledrying.JPG",
  "images/Construction/pokertablepaintedchipholders.JPG",
  "images/Construction/pokertableplanning.JPG",
  "images/Construction/pokertablestained.JPG",

  "images/Construction/purgolacloseshot.jpg",
  "images/Construction/purgolafarshot.jpg"
];

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Fill a track with random images
function populateTrack(trackId) {
  const track = document.getElementById(trackId);
  const shuffled = shuffle([...constructionImages]);

  shuffled.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    track.appendChild(img);
  });
}

document.querySelector('.btn-primary').addEventListener('click', function(e) {
  e.preventDefault();

  const target = document.querySelector('#portfolio');
  const start = window.scrollY;
  const end = target.offsetTop;
  const distance = end - start;

  const duration = 500;
  let startTime = null;

  function smoothScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;

    // smooth easing (this is what makes it feel nice)
    const progress = easeInOutCubic(time / duration);
    window.scrollTo(0, start + distance * progress);

    if (time < duration) {
      requestAnimationFrame(smoothScroll);
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  requestAnimationFrame(smoothScroll);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.pageYOffset;
    const distance = end - start;
    const duration = 500;
    let startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animateScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * eased);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  });
});

// Run on load
populateTrack("heroTrackTop");
populateTrack("heroTrackBottom");