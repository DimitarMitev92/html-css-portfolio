(function () {
  emailjs.init("7i1D6XZF81cwJwgiY");
})();

function SendMail() {
  event.preventDefault();
  const params = {
    from_name:
      document.getElementById("firstName").value +
      " " +
      document.getElementById("lastName").value,
    email_id: document.getElementById("emailId").value,
    message: document.getElementById("message").value,
  };

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("emailId").value = "";
  document.getElementById("message").value = "";

  emailjs.send("service_s9ci90m", "template_9q3a10j", params).then(
    function (res) {
      alert("✔ You have successfully sent a message. ✔");
    },
    function (error) {
      alert("❌ Something went wrong. Try again later. ❌");
    }
  );
}
