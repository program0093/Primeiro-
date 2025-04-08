document.getElementById("togglePassword").addEventListener("click", function (e) {
  const password = document.getElementById("password");
  const isHidden = password.type === "password";

  password.type = isHidden ? "text" : "password";
  this.innerHTML = isHidden ? "&#128683;" : "&#128065;";

  const pos = password.selectionStart;
  setTimeout(() => {
    password.setSelectionRange(pos, pos);
    password.focus();
  }, 0);
});

function loginUsuario(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  alert(`Login: ${username}\nSenha: ${password}`);
  return false;
}