export const storeToken = (token) => localStorage.setItem('acsessToken', token);

export const getToken = () => localStorage.getItem('acsessToken');