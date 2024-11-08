document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");

  // Function to check if the user has scrolled enough to display the button
  function toggleScrollBtn() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  // Add scroll event listener to the window
  window.addEventListener("scroll", toggleScrollBtn);

  // Add click event listener to the scroll button
  scrollBtn.addEventListener("click", scrollToTop);

  // Initially hide the scroll button on page load
  toggleScrollBtn();
});

function sendEmail() {
  emailjs.init("79Cjdy-vIptSNil5x");

  const form = document.getElementById("contactForm");
  const statusMessage = document.getElementById("status");

  // Handle the form submission
  async function handleSubmit(e) {
      e.preventDefault(); // Prevent the default form submission behavior

      try {
          // Send the form data using EmailJS
          const result = await emailjs.sendForm(
            "service_uvkfw3b",
            "template_w589v16",
              form
          );
          statusMessage.textContent = "Email Sent Successfully!";
          console.log(result.text);
          form.reset(); // Reset the form fields
      } catch (error) {
          statusMessage.textContent = "Something went wrong!";
          console.error(error.text);
      }
  }

  // Trigger the form submission when the form is submitted
  form.addEventListener('submit', handleSubmit);
}

// Initialize the sendEmail function
sendEmail();

