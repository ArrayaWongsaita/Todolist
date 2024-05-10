export const storeToken = (token) => localStorage.setItem('acsessToken', token);
export const getToken = () => localStorage.getItem('acsessToken');

export const storeId = (id) => localStorage.setItem('acsessid', id);
export const getId = () => localStorage.getItem('acsessid');