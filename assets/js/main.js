/* Swiper portfolio */

let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// Scroll up

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Send email function + validation */

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("button");
  const form = document.getElementById("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // your validation code here
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const project = document.getElementById("project").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !project || !message) {
      alert("Please fill in all fields");
      return;
    }
    // your email sending code here
    const serviceID = "service_xceyk0z";
    const templateID = "template_c9oy037";
    btn.value = "Sending...";
    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        btn.value = "Send message";
        alert("Message sent!");
      },
      (err) => {
        btn.value = "Send message";
        alert(JSON.stringify(err));
      }
    );
  });
});



