const allCard = document.querySelectorAll('[data-card]');
const allCloseBtn = document.querySelectorAll('[data-closeBtn]');
const shadow = document.querySelector('#shadow');

const closeCard = function () {
  allCard.forEach((card) => {
    const modal = document.querySelector('#' + card.dataset.card);
    modal.classList.add('none');
    shadow.classList.add('none');
  });
};

// открыть
allCard.forEach((card) => {
  card.addEventListener('click', () => {
    const modal = document.querySelector('#' + card.dataset.card);
    modal.classList.remove('none');
    shadow.classList.remove('none');
  });
});

// закрыть по кнопке внутри модального окна
allCloseBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    closeCard();
  });
});

// для закрытия модального окна при нажатии вне его
shadow.addEventListener('click', function () {
  closeCard();
});

// чтобы не закрывалась при нажатии внутри модального окна
allCard.forEach((card) => {
  const modal = document.querySelector('#' + card.dataset.card);
  modal.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

// закрыть при нажатии на esc
document.addEventListener('keydown', (e) => {
  closeCard();
});
