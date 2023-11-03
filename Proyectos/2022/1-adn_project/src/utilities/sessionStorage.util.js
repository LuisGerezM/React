export const persistLocalStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorage = (key) => {
  sessionStorage.removeItem(key);
};
