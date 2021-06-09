const btnhamburger = document.querySelector('#btnHamburger').addEventListener('click', function() {
   console.log('open Hamburger');
   // if btnHamburger contains class 'open'
   if(btnHamburger.classList.contains('open')) {
      // remove 'open'
      btnHamburger.classList.remove('open');
   }
   else {
      // add 'open'
      btnHamburger.classList.add('open');
   }
});
