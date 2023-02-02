$(".owl-carousel").owlCarousel({
  items: 4,
  loop: true,
    margin: 10,
    nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
    autoplayHoverPause: true,
  dots: true
});

const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("https://formspree.io/f/xknaokyk", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => {
      console.log("Success:", response);
      confirm("Message sent successfully! We will get back to you within the given time")
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});


