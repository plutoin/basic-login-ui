const selectBox = document.querySelector('.btn-select');
const listBox = document.querySelector('.list-member');
const itemBtn = document.querySelectorAll('button, .btn-item');

selectBox.addEventListener('click', () => {
  listBox.classList.toggle('show');
  selectBox.classList.toggle('on');
  selectBox.classList.toggle('down');
})

for (let i = 0; i < itemBtn.length; i++) {
  const lang = itemBtn[i];
  lang.addEventListener('click', () => {
    selectBox.innerText = lang.innerText;
  })
}