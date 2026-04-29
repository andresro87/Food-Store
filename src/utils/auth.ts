import type { IUser } from "../types/IUser";
import type { Rol } from "../types/Rol";
import { getUSer, removeUser } from "./localStorage";
import { navigate } from "./navigate";

export const checkAuhtUser = (
  redireccion1: string,
  redireccion2: string,
  rol: Rol
) => {
  console.log("comienzo de checkeo");

  const user = getUSer();

  if (!user) {
    console.log("no existe en local");
    navigate(redireccion1);
    return;
  } else {
    console.log("existe pero no tiene el rol necesario");

    const parseUser: IUser = JSON.parse(user);
    if (parseUser.role !== rol) {
      navigate(redireccion2);
      return;
    }
  }
};

export const logout = () => {
  removeUser();
  navigate("/src/pages/auth/login/login.html");
};
const USERS_KEY = "users";
const USER_DATA_KEY = "userData";

// Obtener usuarios
export function getUsers(): IUser[] {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

// Guardar usuarios
export function saveUsers(users: IUser[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Registro
export function register(user: IUser): boolean {
  const users = getUsers();

  const exists = users.some(u => u.email === user.email);
  if (exists) return false;

  users.push(user);
  saveUsers(users);
  return true;
}

// Login
export function login(email: string, password: string): boolean {
  const users = getUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) return false;

  localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  return true;
}

// Usuario actual
export function getCurrentUser(): IUser | null {
  const user = localStorage.getItem(USER_DATA_KEY);
  return user ? JSON.parse(user) : null;
}