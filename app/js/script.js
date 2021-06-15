const btnhamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function() {
   // close hamburger menu
   // if btnHamburger contains class 'open'
   if(header.classList.contains('open')) {
      // remove 'open'
      header.classList.remove('open');
      body.classList.remove('noscroll');
      fadeElems.forEach(function(element) {
         element.classList.remove('fade-in');
         element.classList.add('fade-out');
      });
   }

   // Open hamburger menu
   else {
      // add 'open'
      header.classList.add('open');
      body.classList.add('noscroll');
      fadeElems.forEach(function(element) {
         element.classList.remove('fade-out');
         element.classList.add('fade-in');
      });
   }
});
