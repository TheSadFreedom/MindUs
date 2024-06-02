import { create} from 'zustand';

// Создаем хранилище состояния для аутентификации
export const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  login: (userData, tokens) => set({
    user: userData,
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken
  }),
  logout: () => set({ user: null, accessToken: null, refreshToken: null }),
}));

// Вспомогательные функции для работы с хранилищем состояния аутентификации
export function getCurrentAccessToken() {
  return useAuthStore.getState().accessToken;
}

export function getCurrentRefreshToken() {
  return useAuthStore.getState().refreshToken;
}

export function setRefreshTokens(tokens) {
  useAuthStore.getState().login(tokens);
}
