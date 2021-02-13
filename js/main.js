let isInit = false
function openModal(){
  let modal  = document.querySelector('.modal');
  if(isInit==false) {
   isInit = true;
   document.querySelector('.close').addEventListener('click',
        function(event) {
           event.preventDefault();
           modal.classList.toggle('is-open');
        }
    );
  }
  modal.classList.toggle('is-open');
}

new WOW().init();