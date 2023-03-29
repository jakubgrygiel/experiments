const body = document.querySelector("body");
const galleryWrapper = document.querySelector(".gallery-wrapper");
const gallery = document.querySelector(".gallery");

const animTiming = {
  duration: 3000,
  fill: "forwards",
  easing: "cubic-bezier(.36,.75,.35,.99)",
};

let mousePosX;
let mousePosY;
let movePos;
let galleryWrapperWidth = galleryWrapper.clientWidth;
let galleryWidth = gallery.clientWidth;
let galleryWrapperHeight = galleryWrapper.clientHeight;
let galleryHeight = gallery.clientHeight;

function getMousePos(e) {
  mousePosX = e.pageX;
  mousePosY = e.pageY;
}

function getImagesPosition() {
  let posX = mousePosX / galleryWrapperWidth;
  let posY = mousePosY / galleryWrapperHeight;
  movePosX = (galleryWidth - galleryWrapperWidth) * posX;
  movePosY = (galleryHeight - galleryWrapperHeight) * posY;
  console.log(movePosX, movePosY);
  return [movePosX, movePosY];
}

body.addEventListener("mousemove", (e) => {
  getMousePos(e);
  getImagesPosition();
  const animKeyframes = {
    transform: `translate(-${movePosX}px,-${movePosY}px)`,
  };
  gallery.animate(animKeyframes, animTiming);
});

window.addEventListener("resize", () => {
  galleryWrapperWidth = galleryWrapper.clientWidth;
  galleryWrapperHeight = galleryWrapper.clientWidth;
});
