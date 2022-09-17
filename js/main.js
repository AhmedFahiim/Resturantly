// -----------------------------------------------------------------
// -----------------------------------------------------------------
// ------------ change links active class on click -------------------

let links = document.querySelectorAll(".nav-link");

links.forEach((ele) => {
  ele.onclick = (e) => {
    links.forEach((r) => {
      r.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
});

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// ------------ show popup -------------------

let popup = document.getElementById("Video-popup");
let closepop = document.getElementById("close-pop");
let displayPop = document.getElementById("play-video");
let video = document.getElementById("iframe");
function showAndHidePop() {
  if (this === displayPop) {
    popup.classList.add("display");
    video.src = "https://www.youtube.com/embed/xPPLbEFbCAo";
  } else {
    popup.classList.remove("display");
    video.src = "";
  }
}

displayPop.onclick = showAndHidePop;
closepop.onclick = showAndHidePop;

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// ------------ scroll-Event in landing Section -------------------

let button = document.getElementById("scroll");
let landingSection = document.getElementById("landing");
let headerSection = document.getElementById("header");
let nav = document.querySelector("nav");
let collapse = document.querySelector(".collapse");

// check visibilty
window.onscroll = () => {
  if (window.scrollY > landingSection.clientHeight) {
    button.classList.add("visible");
  } else button.classList.remove("visible");
  if (window.scrollY >= 100) {
    nav.classList.add("scrolling");
    headerSection.classList.add("scrolling");
    collapse.classList.add("scrolling");
  } else {
    nav.classList.remove("scrolling");
    headerSection.classList.remove("scrolling");
  }
};
// put click event on scroll-top button
function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
button.onclick = scrollTop;
// put click function on bars icon
let bars = document.getElementById("bars");
bars.onclick = function () {
  collapse.classList.toggle("show");
};

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// --------------------- start Menu Section ----------------------

let lis = document.querySelectorAll("#menu-nav li");
let menuHolder = document.getElementById("menu-holder"),
  items = menuHolder.querySelectorAll(".item"),
  starters = menuHolder.querySelectorAll(".starters"),
  salads = menuHolder.querySelectorAll(".salads"),
  special = menuHolder.querySelectorAll(".special");

// add click event on li
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((r) => {
      r.classList.remove("active");
    });
    e.target.classList.add("active");
    transform(e.currentTarget);
  });
});
// transform menu items
function transform(target) {
  if (target.dataset.type === "starters") {
    removeAndAdd(items, starters);
  } else if (target.dataset.type === "salads") {
    removeAndAdd(items, salads);
  } else if (target.dataset.type === "special") {
    removeAndAdd(items, special);
  } else defaultPosition();
}
// remove and add active class
function removeAndAdd(clear, active) {
  clear.forEach((i) => {
    i.classList.remove("all");
    i.classList.remove("active");
  });
  active.forEach((i) => {
    i.classList.add("active");
  });
  setHeightOnRemove();
}
// set the height while removing the un selected item and put them in a function to call it in window resize event
function setHeightOnRemove() {
  if (window.innerWidth >= 1200) {
    menuHolder.style.height = "250px";
  } else menuHolder.style.height = "300px";
}
// make the default position all
function defaultPosition() {
  items.forEach((i) => {
    i.classList.remove("active");
    i.classList.add("all");
  });
  setHeightOnDefault();
}
defaultPosition();
// set the height in the default posiiton and put them in a function to call it in window resize event
function setHeightOnDefault() {
  if (window.innerWidth >= 1200) {
    menuHolder.style.height = "500px";
  } else menuHolder.style.height = "920px";
}
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// --------------------- start Specials Section ----------------------
let specialLi = document.querySelectorAll("#special-list li");
let plates = document.querySelectorAll(".plate");

// add click event on li
specialLi.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    specialLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    plates.forEach((p) => {
      p.classList.remove("active");
    });
    plates[index].classList.add("active");
  });
});
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// ----------------- start Events-types Section --------------------
let mainSlider = document.getElementById("main-holder"),
  slider = mainSlider.querySelector("#slider"),
  slideItem = slider.querySelectorAll(".event");
let bullets = document.querySelectorAll(".events .bullets span");

let counter = 0;
let slideWidth = slideItem[0].clientWidth;
// ----------- start cloning
let firstClone = slideItem[0].cloneNode(true);
firstClone.classList.add("firstClone");
slider.append(firstClone);

slideItem = slider.querySelectorAll(".event");
// ----------- end cloning

// start translating
setInterval(() => {
  if (counter === slideItem.length - 1) return;
  counter++;
  slider.style.transition = "0.5s ease-in-out";
  slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  bullets.forEach((r) => {
    r.classList.remove("active");
  });
  bullets[counter].classList.add("active");
}, 4000);

// bullets add and remove active
function Bullets() {
  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", (e) => {
      bullets.forEach((r) => {
        r.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      slider.style.transition = "0.5s ease-in-out";
      slider.style.transform = `translateX(${-slideWidth * index}px)`;
    });
  });
}
Bullets();
// check if the transition end
slider.addEventListener("transitionend", () => {
  if (slideItem[counter].classList.contains("firstClone")) {
    slider.style.transition = "none";
    counter = 0;
    bullets[counter].classList.add("active");
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

window.addEventListener("resize", () => {
  counter = 0;
  slideWidth = slideItem[0].clientWidth;
});

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// ----------------- start testimonials Section --------------------

let mainHolderTesi = document.getElementById("main-holder-testi"),
  testiSlider = mainHolderTesi.querySelector("#slider"),
  testiSlideItems = testiSlider.querySelectorAll(".slide-item");
let bulletsTesti = document.querySelectorAll(".testi .bullets span");
let itemWidth = testiSlideItems[0].clientWidth + 24;
let counterTesti = 0;
// start cloning the first 3 items
let [firstCloneTesti, SecCloneTesti, ThirdCloneTesti] = [
  testiSlideItems[0].cloneNode(true),
  testiSlideItems[1].cloneNode(true),
  testiSlideItems[2].cloneNode(true),
];
firstCloneTesti.classList.add("firsClone");
testiSlider.append(firstCloneTesti, SecCloneTesti, ThirdCloneTesti);

testiSlideItems = testiSlider.querySelectorAll(".slide-item");

//end cloning the first 3 items
// set interval
setInterval(function () {
  if (counterTesti === testiSlideItems.length - 1) return;
  counterTesti++;
  testiSlider.style.transition = "0.5s ease-in-out";
  testiSlider.style.transform = `translateX(${-itemWidth * counterTesti}px)`;
  bulletsTesti.forEach((b) => {
    b.classList.remove("active");
  });
  bulletsTesti[counterTesti].classList.add("active");
}, 4000);

// bullets add and remove active
function BulletsTesti() {
  bulletsTesti.forEach((bullet, index) => {
    bullet.addEventListener("click", (e) => {
      bulletsTesti.forEach((r) => {
        r.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      testiSlider.style.transition = "0.5s ease-in-out";
      testiSlider.style.transform = `translateX(${-itemWidth * index}px)`;
    });
  });
}
BulletsTesti();
// check if the item have firstClone class
testiSlider.addEventListener("transitionend", () => {
  if (testiSlideItems[counterTesti].classList.contains("firsClone")) {
    testiSlider.style.transition = "none";
    counterTesti = 0;
    bulletsTesti[0].classList.add("active");
    testiSlider.style.transform = `translateX(${-itemWidth * counterTesti}px)`;
  }
});
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// ----------------- start gallery Section --------------------
let galleryItems = document.querySelectorAll("#gallery .image");
let popUp;
let mainHolder;
let popUpSlider;
let popItemWidth;
let Close;
let next;
let prev;
let Gallerycounter = 0;

// function creating the popUp elemnts
function createPopElemnts() {
  popUp = document.createElement("div");
  popUp.classList.add("popUp");
  document.body.append(popUp);
  mainHolder = document.createElement("div");
  mainHolder.classList.add("slide-holder");
  popUp.append(mainHolder);
  popUpSlider = document.createElement("div");
  popUpSlider.classList.add("popup-slider");
  mainHolder.append(popUpSlider);
}
// create for loop to take clone of gallery items
function looping(parent) {
  for (let i = 0; i <= galleryItems.length - 1; i++) {
    popUpItem = galleryItems[i].cloneNode(true);
    popUpItem.classList.add("popUp-item");
    parent.append(popUpItem);
    popItemWidth = popUpItem.clientWidth;
  }
}
// start creating the right,left and close
function slideControlers() {
  Close = document.createElement("i");
  Close.classList.add("Close", "fa-solid", "fa-xmark");
  next = document.createElement("i");
  next.classList.add("next", "fa-solid", "fa-angle-right");
  prev = document.createElement("i");
  prev.classList.add("prev", "fa-solid", "fa-angle-left");
  popUp.append(Close);
  popUp.append(next);
  popUp.append(prev);
}
// start adding click events on the arrows

function clickEvent() {
  Close.onclick = function () {
    popUp.style.cssText = "transform: scale(0); transition:0.2s";
  };
  // next click
  next.onclick = function () {
    if (Gallerycounter === galleryItems.length - 1) return;
    Gallerycounter++;
    popUpSlider.style.transition = "0.4s ease-in-out";
    popUpSlider.style.transform = `translateX(${
      -popItemWidth * Gallerycounter
    }px)`;
  };
  // prev click
  prev.onclick = function () {
    if (Gallerycounter === 0) return;
    Gallerycounter--;
    popUpSlider.style.transition = "0.4s ease-in-out";
    popUpSlider.style.transform = `translateX(${
      -popItemWidth * Gallerycounter
    }px)`;
  };
}
// PopUp processing
function popUpProcess() {
  galleryItems.forEach((img) => {
    img.addEventListener("click", function (e) {
      // start appending all items inside popUp
      createPopElemnts();
      looping(popUpSlider);
      // choose the selected picture as a active one
      Gallerycounter = parseInt(e.currentTarget.dataset.index);
      popUpSlider.style.transition = "none";
      popUpSlider.style.transform = `translateX(${
        -popItemWidth * Gallerycounter
      }px)`;
      // start creating the right,left and close
      slideControlers();
      // add click event on angles
      clickEvent();
    });
  });
}
popUpProcess();
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// ----------------- Window on resize event --------------------
window.onresize = resizeEvent;

function resizeEvent() {
  // set the menu height
  items.forEach((i) => {
    if (i.classList.contains("all")) {
      setHeightOnDefault();
    } else setHeightOnRemove();
  });
  // change the slider item width
  itemWidth = testiSlideItems[0].clientWidth + 24;
  slideWidth = slideItem[0].clientWidth;
}
