console.log("JS WORKING");

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const btn = document.getElementById("submitBtn");

btn.addEventListener("click", function () {

  status.textContent = "Sending...";

  fetch("https://portfolio-backend-y3um.onrender.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    })
  })
  .then(res => {
    if (res.ok) {
      status.textContent = "Message sent successfully ✅";
      form.reset();
    } else {
      status.textContent = "Error sending ❌";
    }
  })
  .catch(() => {
    status.textContent = "Server error ❌";
  });

});