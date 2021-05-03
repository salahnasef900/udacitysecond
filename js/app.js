//click to scrool  section1
const porofolio = document.getElementById('porofolio');
porofolio.addEventListener("click", function() {
  let porto = document.getElementById('porto');
  porto.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
//click to scrool  to section 2
const services = document.getElementById('services');
services.addEventListener("click", function ser() {
  let servicesc = document.getElementById('servicesc');
  servicesc.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
//click to scrool
const contact = document.getElementById('contact');
contact.addEventListener("click", function scont() {
  let contactc = document.getElementById('contactc');
  contactc.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
// when scrool add the nav bar sticky class
window.onscroll = function() {
  scrollFunction()
};
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
const topFunction =() =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
