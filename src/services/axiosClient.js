import { createAxiosClient } from "./createAxiosClient";
import { useAuthStore } from "../stores/authStore";
import axios from "axios";

const REFRESH_TOKEN_URL = 'http://localhost:8000/api/v1/users/refresh/'
const BASE_URL = 'http://127.0.0.1:8000/api/v1/'

function getCurrentAccessToken() {
    return useAuthStore.getState().accessToken;
}

function getCurrentRefreshToken() {
    return useAuthStore.getState().refreshToken;
}

function setRefreshTokens(tokens) {
    console.log('set refresh tokens...')
    const login = useAuthStore.getState().login;
    login(tokens);
}

function logout() {
    console.log('logout...')
    const logout = useAuthStore.getState().logout;
    logout();
}

export const client = createAxiosClient({
    options: {
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    },
    getCurrentAccessToken,
    getCurrentRefreshToken,
    refreshTokenUrl: REFRESH_TOKEN_URL,
    logout,
    setRefreshTokens
});
