const blockModal = document.querySelector('#block_for_open_modal');
const modalWindow = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeBtn');
const body = document.querySelector('#body');
const shadow = document.querySelector('#shadow');

// open window
blockModal.addEventListener('click', function () {
  modalWindow.classList.remove('none');
  shadow.classList.remove('none');
});
// close btn
closeBtn.addEventListener('click', function () {
  modalWindow.classList.add('none');
  shadow.classList.add('none');
});
// close outside the window
shadow.addEventListener('click', function () {
  modalWindow.classList.add('none');
  shadow.classList.add('none');

  modalWindow.onclick = function (e) {
    e.stopPropagation();
  };
});
