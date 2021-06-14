const btnhamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function() {

   // if btnHamburger contains class 'open'
   if(header.classList.contains('open')) {
      // remove 'open'
      header.classList.remove('open');
   }
   else {
      // add 'open'
      header.classList.add('open');
   }
});
