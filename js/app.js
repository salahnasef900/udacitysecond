//click to scrool 
function add(){
    let porto = document.getElementById('porto');
    porto.scrollIntoView({behavior:"smooth",block:"start",inline:block});
}
;

//click to scrool 
function services(){
   
    let services = document.getElementById('services');

    services.scrollIntoView({behavior:"smooth",block:"start",inline:block});
}
;
//click to scrool 

function contact(){
    let contact = document.getElementById('contact');
    contact.scrollIntoView({behavior:"smooth",block:"start",inline:block});
}
;
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// when scrool add the nav bar sticky class
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.getElementById('bo').classList.add('sticky');

  } else {
    mybutton.style.display = "none";
    document.getElementById('bo').classList.remove('sticky');

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};