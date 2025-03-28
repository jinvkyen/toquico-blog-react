const storeInSession = (key, value) => {
    return sessionStorage.setItem(key, value);
}

const lookInSession = (key) => {
    return sessionStorage.getItem(key);
}

const removeInSession = (key) => {
    return sessionStorage.removeItem(key);
}

const logoutSession = () => {
    return sessionStorage.clear();
}

export { storeInSession, lookInSession, logoutSession, removeInSession };