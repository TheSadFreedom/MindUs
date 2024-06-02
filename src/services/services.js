import { client } from "./axiosClient";
import { useAuthStore } from "../stores/authStore";

export function register({ username, email, password }) {
  return client.post(
    "/users/",
    {
      user: {
        username,
        email,
        password
      }
    }
  );
}

export function login({ email, password }) {
  return client.post(
    "users/login/", {
    user: {
      email,
      password
    }
  }
  )
}

export function getProfile() {
  return client.get(
    "/user/"
  );
}
