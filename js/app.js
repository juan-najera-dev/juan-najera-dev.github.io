const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

const link = document.querySelectorAll(".link");
link.forEach((element) => {
  element.addEventListener("click", () => {
    links.classList.toggle("show-links");
  });
});

// Proyect 1

const preview1 = document.querySelectorAll(".project-1-thumbnail-btn");
const images1 = document.querySelectorAll(".views-project-1");

preview1.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    const trigger = event.target.dataset.id;
    images1.forEach((image) => {
      image.style.display = "none";
    });
    if (trigger) {
      if (trigger === "thumb1") {
        let tmp = document.querySelector(".view1-project-1");
        tmp.style.display = "block";
      }

      if (trigger === "thumb2") {
        let tmp = document.querySelector(".view2-project-1");
        tmp.style.display = "block";
      }

      if (trigger === "thumb3") {
        let tmp = document.querySelector(".view3-project-1");
        tmp.style.display = "block";
      }
    }
  });
});

// Proyect 2

const preview2 = document.querySelectorAll(".project-2-thumbnail-btn");
const images2 = document.querySelectorAll(".views-project-2");

preview2.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    const trigger = event.target.dataset.id;
    images2.forEach((image) => {
      image.style.display = "none";
    });
    if (trigger) {
      if (trigger === "thumb1") {
        let tmp = document.querySelector(".view1-project-2");
        tmp.style.display = "block";
      }

      if (trigger === "thumb2") {
        let tmp = document.querySelector(".view2-project-2");
        tmp.style.display = "block";
      }

      if (trigger === "thumb3") {
        let tmp = document.querySelector(".view3-project-2");
        tmp.style.display = "block";
      }
    }
  });
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 250) {
    topLink.classList.add("show-arrow");
  } else {
    topLink.classList.remove("show-arrow");
  }
});

// ********** smooth scroll ************
// select links

const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 92) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// ********** carrousel ************

window.addEventListener(
  "resize",
  function (event) {
    if (window.innerWidth >= 992) {
      const btn5 = document.querySelector(".fifth");
      btn5.style.display = "none";
      const btn6 = document.querySelector(".sixth");
      btn6.style.display = "none";
    } else {
      const btn5 = document.querySelector(".fifth");
      btn5.style.display = "inline";
      const btn6 = document.querySelector(".sixth");
      btn6.style.display = "inline";
    }
  },
  true
);

if (window.innerWidth >= 992) {
  const btn5 = document.querySelector(".fifth");
  btn5.style.display = "none";
  const btn6 = document.querySelector(".sixth");
  btn6.style.display = "none";
}

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("selected")
    );
  }

  if (window.innerWidth <= 992) {
    if (event.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("second")) {
      slides.style.transform = "translateX(-18%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("third")) {
      slides.style.transform = "translateX(-36.1%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("fourth")) {
      slides.style.transform = "translateX(-54.3%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("fifth")) {
      slides.style.transform = "translateX(-72.6%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("sixth")) {
      slides.style.transform = "translateX(-90%)";
      event.target.classList.add("selected");
    }
  } else {
    if (event.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("second")) {
      slides.style.transform = "translateX(-27%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("third")) {
      slides.style.transform = "translateX(-54.5%)";
      event.target.classList.add("selected");
    } else if (event.target.classList.contains("fourth")) {
      slides.style.transform = "translateX(-75%)";
      event.target.classList.add("selected");
    }
  }
});

// ********** email ************

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  document.location.href =
    "mailto:jcnajeradev@gmail.com?from=" +
    correo +
    "&subject=" +
    encodeURIComponent("Portafolio feedback") +
    "&body=" +
    nombre +
    " esctibió: " +
    mensaje;
});
