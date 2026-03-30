const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    status.textContent = "Sending...";

    try {
      const res = await fetch("https://portfolio-backend-y3um.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        status.textContent = "Message sent successfully ✅";
        status.className = "form-status success";
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      status.textContent = "Error sending message ❌";
      status.className = "form-status error";
    }
  });
}