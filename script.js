const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

const heroImages = [
  "images/Construction/barafterfinishingtop.jpg",
  "images/Construction/barbeingrefinished.jpg",
  "images/Construction/barblackrepaint.jpg",
  "images/Construction/barfinishedconstruction.jpg",
  "images/Construction/barframing.jpg",
  "images/Construction/barframing2.jpg",
  "images/Construction/barinshed.jpg",
  "images/Construction/barmappingbeerboxes.jpg",
  "images/Construction/barshedwork.jpg",
  "images/Construction/barwithepoxydrying.jpg",
  "images/Construction/barwithepoxydrying2.jpg",
  "images/Construction/barwithepoxydryingfar.jpg",
  "images/Construction/dyetablebeforecutting.jpg",
  "images/Construction/dyetableclamps.jpg",
  "images/Construction/dyetablefinishedpainting.jpg",
  "images/Construction/dyetablefull.jpg",
  "images/Construction/dyetabletapeoutlines.jpg",
  "images/Construction/dyetablewithpoly.jpg",
  "images/Construction/dyetablewithpoly2.jpg",
  "images/Construction/lettershung1.jpg",
  "images/Construction/lettershung2.jpg",
  "images/Construction/lettershungclose.jpg",
  "images/Construction/pokertabledrying.jpg",
  "images/Construction/pokertablepaintedchipholders.jpg",
  "images/Construction/pokertableplanning.jpg",
  "images/Construction/pokertablestained.jpg",
  "images/Construction/purgolacloseshot.jpg",
  "images/Construction/purgolafarshot.jpg"
];

function buildHeroTrack(trackId, reverse = false) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const images = reverse ? [...heroImages].reverse() : heroImages;

  // duplicate for seamless scroll loop
  const fullSet = images.concat(images);

  track.innerHTML = fullSet
    .map(src => `<img src="${src}" alt="">`)
    .join("");
}

// top row
buildHeroTrack("heroTrackTop");

// bottom row (reverse for visual variety)
buildHeroTrack("heroTrackBottom", true);

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

const projectData = {
  "outdoor-bar": {
    title: "Outdoor Bar",
    description:
      "Refinished an outdoor bar setup with repainting and cleanup work to improve the look and durability of the structure.",
    images: [
      "images/Construction/barblackrepaint.jpg",
      "images/Construction/barfinishedconstruction.jpg",
      "images/Construction/barframing.jpg",
      "images/Construction/barframing2.jpg",
      "images/Construction/barinshed.jpg",
      "images/Construction/barmappingbeerboxes.jpg",
      "images/Construction/barshedwork.jpg",
      "images/Construction/barwithepoxydrying.jpg",
      "images/Construction/barwithepoxydrying2.jpg",
      "images/Construction/barwithepoxydryingfar.jpg"
    ]
  },
  "folding-table": {
    title: "Folding Table",
    description:
      "Worked on a folding table project involving cutting prep, layout, and finish details.",
    images: [
      "images/Construction/dyetablebeforecutting.jpg",
      "images/Construction/dyetableclamps.jpg",
      "images/Construction/dyetablefinishedpainting.jpg",
      "images/Construction/dyetablefull.jpg",
      "images/Construction/dyetabletapeoutlines.jpg",
      "images/Construction/dyetablewithpoly.jpg",
      "images/Construction/dyetablewithpoly2.jpg"
    ]
  },
  "greek-letters": {
    title: "Greek Letters",
    description:
      "Mounted and positioned Greek letters with attention to spacing, alignment, and a clean final presentation.",
    images: [
      "images/Construction/lettershungclose.jpg",
      "images/Construction/lettershung1.jpg",
      "images/Construction/lettershung2.jpg"
    ]
  },
  "poker-table": {
    title: "Poker Table",
    description:
      "Finished a poker table project with staining and surface detail work for a polished final appearance.",
    images: [
      "images/Construction/pokertablestained.jpg",
      "images/Construction/pokertableplanning.jpg",
      "images/Construction/pokertablepaintedchipholders.jpg",
      "images/Construction/pokertabledrying.jpg"
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

if (lightboxClose) lightboxClose.addEventListener("click", closeProject);
if (prevImage) prevImage.addEventListener("click", showPrevImage);
if (nextImage) nextImage.addEventListener("click", showNextImage);

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeProject();
  });
}

document.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.classList.contains("show")) return;

  if (e.key === "Escape") closeProject();
  if (e.key === "ArrowLeft") showPrevImage();
  if (e.key === "ArrowRight") showNextImage();
});

const contactModal = document.getElementById("contactModal");
const contactClose = document.getElementById("contactClose");
const footerTrigger = document.getElementById("footerTrigger");
const contactBtn = document.getElementById("contactBtn");

if (footerTrigger && contactModal) {
  footerTrigger.addEventListener("click", () => {
    contactModal.classList.add("show");
  });
}

if (contactClose && contactModal) {
  contactClose.addEventListener("click", () => {
    contactModal.classList.remove("show");
  });
}

if (contactModal) {
  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("show");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && contactModal) {
    contactModal.classList.remove("show");
  }
});

if (contactBtn && contactModal) {
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      contactModal.classList.add("show");
    }, 400);

    history.replaceState(null, null, " ");
  });
}