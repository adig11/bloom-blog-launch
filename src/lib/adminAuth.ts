const ADMIN_PASSWORD = "123456";
const AUTH_KEY = "thepaperfounder_admin_auth";

export const checkPassword = (password: string): boolean => {
  return password === ADMIN_PASSWORD;
};

export const setAuthenticated = () => {
  sessionStorage.setItem(AUTH_KEY, "true");
};

export const isAuthenticated = (): boolean => {
  return sessionStorage.getItem(AUTH_KEY) === "true";
};

export const logout = () => {
  sessionStorage.removeItem(AUTH_KEY);
};
