console.log("JS WORKING");

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const btn = document.getElementById("submitBtn");

if (btn) {
  btn.addEventListener("click", async () => {

    console.log("BUTTON CLICKED"); // debug

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
        form.reset();
      } else {
        status.textContent = "Error ❌";
      }

    } catch (err) {
      console.log(err);
      status.textContent = "Server error ❌";
    }

  });
}