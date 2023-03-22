const user = {
  email: "wellysonthomas@gmail.com",
  senha: "123456789",
}
const button = document.getElementById("submit")
button.addEventListener("click", validUser)
function redirect() {
  window.location.href = "https://www.google.com"
}
function validUser(e) {
  e.preventDefault()
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let error = document.getElementById("error")

  if (email.value === user.email) {
    if (password.value === user.senha) {
      email.style.border = "#a1fc98 solid 1px"
      password.style.border = "#a1fc98 solid 1px"
      error.classList.remove("invalid")
      redirect()
    }
  } else {
    email.style.border = "#ED3A5A solid 1px"
    password.style.border = "#ED3A5A solid 1px"
    error.classList.add("invalid")
  }
}
// EYE FORM

const showPassword = document.querySelector(".form-control img")
showPassword.addEventListener("click", show)

function show() {
  let password = document.getElementById("password")
  // password.type = password.type == "text" ? "password" : "text"
  if (password.type == "text") {
    password.type = "password"
    showPassword.src = "./assets/eye-slash-fill.svg"
  } else {
    password.type = "text"
    showPassword.src = "./assets/eye-fill.svg"
  }
}
