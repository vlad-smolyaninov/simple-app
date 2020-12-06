export const getToken = () => {
    return window.localStorage.getItem('token');
}

export const setToken = (newToken) => {
    return window.localStorage.setItem('token', newToken);
}

export const removeToken = () => {
    return window.localStorage.removeItem('token');
}
