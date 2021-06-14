const btnhamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
   // close hamburger menu
   // if btnHamburger contains class 'open'
   if(header.classList.contains('open')) {
      // remove 'open'
      header.classList.remove('open');
      overlay.classList.remove('fade-in');
      overlay.classList.add('fade-out');
   }
   // Open hamburger menu
   else {
      // add 'open'
      header.classList.add('open');
      overlay.classList.remove('fade-out');
      overlay.classList.add('fade-in');
   }
});
