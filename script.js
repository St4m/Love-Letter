function openLetter() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.toggle('open');
  envelope.setAttribute(
    'aria-expanded',
    envelope.classList.contains('open')
  );
}
const sound = new Audio('Myktybek-Nurlanbekov-Kyyalymsy-ZHa-y-yr-2022.mp3');

function openLetter() {
  sound.play();
  document.querySelector('.envelope').classList.toggle('open');
}
