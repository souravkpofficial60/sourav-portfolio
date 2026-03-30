console.log("JS WORKING");

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const btn = document.getElementById("submitBtn");

btn.addEventListener("click", async function () {

  status.textContent = "Sending...";

  try {
    const res = await fetch("https://portfolio-backend-y3um.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      })
    });

    if (res.ok) {
      status.textContent = "Message sent successfully ✅";
      status.style.color = "lime";
      form.reset();
    } else {
      status.textContent = "Error sending ❌";
      status.style.color = "red";
    }

  } catch (error) {
    status.textContent = "Server error ❌";
    status.style.color = "red";
  }

});