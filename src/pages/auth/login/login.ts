import { login } from "../../../utils/auth";
import type { IUser } from "../../../types/IUser";

const form = document.getElementById("loginForm") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  const success = login(emailInput.value, passwordInput.value);

  if (!success) {
    alert("Credenciales incorrectas");
    return;
  }

  alert("Login exitoso");

  const user = JSON.parse(localStorage.getItem("userData") as string) as IUser;

if (user.role === "admin") {
  window.location.href = "/src/pages/admin/home/home.html";
} else {
  window.location.href = "/src/pages/store/home/home.html";
}
});