const body = document.querySelector("body");
const imagesWrapper = document.querySelector(".images-wrapper");
const imagesSlider = document.querySelector(".images-slider");
const cursor = document.querySelector(".cursor");
const cursorVisual = document.querySelector(".cursor-visual");
const images = document.querySelectorAll(".image");

const cursorTiming = {
  duration: 300,
  fill: "forwards",
  easing: "linear",
};
const animTiming = {
  duration: 1000,
  fill: "forwards",
  easing: "ease",
};

let cursorOverImage = false;
let mousePosX;
let mousePosY;
let movePos;
let imagesWrapperWidth = imagesWrapper.clientWidth;
let imagesSliderWidth = imagesSlider.clientWidth;
let windowX = window.innerWidth;

function getMousePos(e) {
  mousePosX = e.pageX;
  mousePosY = e.pageY;
}

function getImagesPosition() {
  let padding = (windowX - imagesWrapperWidth) / 2;
  if (mousePosX < padding) {
    movePos = 0;
    return;
  }
  if (mousePosX > windowX - padding * 2) {
    movePos = imagesSliderWidth - imagesWrapperWidth;
    return;
  }
  let pos = (mousePosX - padding) / (windowX - padding * 2);
  movePos = (imagesSliderWidth - imagesWrapperWidth) * pos;
  return;
}

body.addEventListener("mousemove", (e) => {
  getMousePos(e);
  getImagesPosition();
  const cursorKeyframes = {
    transform: `translate(${mousePosX - 16}px, ${mousePosY - 16}px)`,
  };
  const animKeyframes = { transform: `translateX(-${movePos}px)` };
  cursor.animate(cursorKeyframes, cursorTiming);
  imagesSlider.animate(animKeyframes, animTiming);
});

window.addEventListener("resize", () => {
  imagesWrapperWidth = imagesWrapper.clientWidth;
  windowX = window.innerWidth;
  h2wr.textContent = `${imagesWrapperWidth} / ${windowX}`;
});

images.forEach((image) => {
  image.addEventListener("mouseenter", (e) => {
    cursorVisual.classList.add("cursor-visual--over-image");
  });
  image.addEventListener("mouseleave", (e) => {
    cursorVisual.classList.remove("cursor-visual--over-image");
  });
});
