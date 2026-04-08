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

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("show");
  });
});

const projectData = {
  "outdoor-bar": {
    title: "Outdoor Bar",
    description:
      "Refinished an outdoor bar setup with repainting and cleanup work to improve the look and durability of the structure.",
    images: [
      "images/Construction/barblackrepaint.JPG",
      "images/Construction/barfinishedconstruction.JPG",
      "images/Construction/barframing.jpg",
      "images/Construction/barframing2.jpg",
      "images/Construction/barinshed.JPG",
      "images/Construction/barmappingbeerboxes.JPG",
      "images/Construction/barshedwork.JPG",
      "images/Construction/barwithepoxydrying.JPG",
      "images/Construction/barwithepoxydrying2.JPG",
      "images/Construction/barwithepoxydryingfar.JPG"
    ]
  },
  "folding-table": {
    title: "Folding Table",
    description:
      "Worked on a folding table project involving cutting prep, layout, and finish details.",
    images: [
      "images/Construction/dyetablebeforecutting.JPG",
      "images/Construction/dyetableclamps.JPG",
      "images/Construction/dyetablefinishedpainting.jpg",
      "images/Construction/dyetablefull.JPG",
      "images/Construction/dyetabletapeoutlines.JPG",
      "images/Construction/dyetablewithpoly.JPG",
      "images/Construction/dyetablewithpoly2.JPG"
    ]
  },
  "greek-letters": {
    title: "Greek Letters",
    description:
      "Mounted and positioned Greek letters with attention to spacing, alignment, and a clean final presentation.",
    images: [
      "images/Construction/lettershungclose.JPG",
      "images/Construction/lettershung1.JPG",
      "images/Construction/lettershung2.JPG"
    ]
  },
  "poker-table": {
    title: "Poker Table",
    description:
      "Finished a poker table project with staining and surface detail work for a polished final appearance.",
    images: [
      "images/Construction/pokertablestained.JPG",
      "images/Construction/pokertableplanning.JPG",
      "images/Construction/pokertablepaintedchipholders.JPG",
      "images/Construction/pokertabledrying.JPG"
    ]
  },
  "backyard-purgola": {
    title: "Backyard Purgola",
    description:
      "Contributed labor and outdoor carpentry work on a backyard pergola-style structure, focusing on build support and finish details.",
    images: [
      "images/Construction/purgolafarshot.jpg",
      "images/Construction/purgolacloseshot.jpg"
    ]
  }
};

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const imageCounter = document.getElementById("imageCounter");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

let currentProject = null;
let currentImageIndex = 0;

function updateProjectModal() {
  if (!currentProject || !currentProject.images.length) return;

  lightboxImage.src = currentProject.images[currentImageIndex];
  lightboxImage.alt = currentProject.title;
  modalTitle.textContent = currentProject.title;
  modalDescription.textContent = currentProject.description;
  imageCounter.textContent = `${currentImageIndex + 1} / ${currentProject.images.length}`;
}

function openProject(projectKey) {
  currentProject = projectData[projectKey];
  if (!currentProject) return;

  currentImageIndex = 0;
  updateProjectModal();
  lightbox.classList.add("show");
}

function closeProject() {
  lightbox.classList.remove("show");
}

function showPrevImage() {
  if (!currentProject) return;
  currentImageIndex =
    (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
  updateProjectModal();
}

function showNextImage() {
  if (!currentProject) return;
  currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
  updateProjectModal();
}

document.querySelectorAll(".card[data-project]").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    openProject(card.dataset.project);
  });
});

lightboxClose.addEventListener("click", closeProject);
prevImage.addEventListener("click", showPrevImage);
nextImage.addEventListener("click", showNextImage);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeProject();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("show")) return;

  if (e.key === "Escape") closeProject();
  if (e.key === "ArrowLeft") showPrevImage();
  if (e.key === "ArrowRight") showNextImage();
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