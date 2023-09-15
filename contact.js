// Variables

const url =
  "https://script.google.com/macros/s/AKfycbyFdHvzswXYay60dhdQzLTcS3v4GhHGDJwRLtYjmceUrJS1VUxstY3AdTU4nzPXppphJw/exec";

const myForm = document.querySelector("form");

const userName = document.querySelector("#name");

const userEmail = document.querySelector("#email");

const userMessage = document.querySelector("#message");

const honeypot = document.querySelector("#address");

// Form eventlistener

myForm.addEventListener("submit", submitter);

// Function returning user data as object

function submitter(e) {
  if (honeypot.value == "" || honeypot.value == null) {
    e.preventDefault();

    const myObj = {
      name: userName.value,

      email: userEmail.value,

      message: userMessage.value,
    };

    addSendMail(myObj);

    myForm.reset();

    let emailConfirm = document.createElement("div");

    emailConfirm.id = "formSent";

    emailConfirm.innerHTML = `<p>Din e-mail er sendt.</p>`;

    emailConfirm.innerHTML += `<p>Du har modtaget en bekræftelse i din mail.</p>`;

    myForm.append(emailConfirm);

    setTimeout(() => {
      emailConfirm.remove();
    }, 5000);
  }
}

function addSendMail(data) {
  fetch(url, {
    method: "POST",

    body: JSON.stringify(data),
  }).then((res) => res.json());
}

// Honeypot for bots

honeypot.style.display = "none";
