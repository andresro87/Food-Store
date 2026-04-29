import { register } from "../../../utils/auth";

import type { IUser } from "../../../types/IUser";

const form = document.getElementById("registerForm") as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  const newUser: IUser = {
    email: emailInput.value,
    password: passwordInput.value,
    role: "client",
    loggedIn: false
  };

  const success = register(newUser);

  if (!success) {
    alert("El usuario ya existe");
    return;
  }

  alert("Registro exitoso");

  // Redirigir al login
  window.location.href = "/src/pages/auth/login/login.html";
});