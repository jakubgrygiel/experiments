const noBtn = document.querySelector(".btn--no");
const yesBtn = document.querySelector(".btn--yes");

let currentCardIndex = 1;

function setStatusNo(currentCards, nextCards) {
  nextCards.dataset.status = "after";
  currentCards.dataset.status = "before";
  setTimeout(() => {
    currentCards.dataset.status = "waiting";
    nextCards.dataset.status = "current";
  }, 310);
}

function setStatusYes(currentCards, nextCards) {
  nextCards.dataset.status = "before";
  currentCards.dataset.status = "after";
  setTimeout(() => {
    currentCards.dataset.status = "waiting";
    nextCards.dataset.status = "current";
  }, 310);
}

function handleClickNo() {
  const currentCards = document.querySelector(`[data-status="current"]`);

  if (currentCardIndex === 1) {
    const nextCards = document.querySelector(`[data-num="2"]`);
    currentCardIndex = 2;
    return setStatusNo(currentCards, nextCards);
  }
  if (currentCardIndex === 2) {
    const nextCards = document.querySelector(`[data-num="3"]`);
    currentCardIndex = 3;
    return setStatusNo(currentCards, nextCards);
  }
  if (currentCardIndex === 3) {
    const nextCards = document.querySelector(`[data-num="1"]`);
    currentCardIndex = 1;
    return setStatusNo(currentCards, nextCards);
  }
}

function handleClickYes() {
  const currentCards = document.querySelector(`[data-status="current"]`);

  if (currentCardIndex === 1) {
    const nextCards = document.querySelector(`[data-num="3"]`);
    currentCardIndex = 3;
    return setStatusYes(currentCards, nextCards);
  }
  if (currentCardIndex === 2) {
    const nextCards = document.querySelector(`[data-num="1"]`);
    currentCardIndex = 1;
    return setStatusYes(currentCards, nextCards);
  }
  if (currentCardIndex === 3) {
    const nextCards = document.querySelector(`[data-num="2"]`);
    currentCardIndex = 2;
    return setStatusYes(currentCards, nextCards);
  }
}

noBtn.addEventListener("click", handleClickNo);
yesBtn.addEventListener("click", handleClickYes);
