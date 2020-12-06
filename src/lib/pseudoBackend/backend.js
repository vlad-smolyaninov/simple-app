import storage from "./storage";

const getRandomString = () => {
    return Math.random().toString(36).substring(7);
}

const resetPassword = ({email}) => {
    const current = storage.getByEmail(email);
    const link = getRandomString();

    if (!current) return storage.create({
        email,
        link
    })

    return storage.update({email, link});
}

const checkLink = ({link}) => {
    const user = storage.getByLink(link);
    return user;
}

const activateUser = ({link, password}) => {
    const user = checkLink({link});
    if (!user) {
        console.error('User link is not found');
        return;
    }

    storage.update({email: user.email, password});
}

const login = ({email, password}) => {
    const current = storage.getByEmail(email);
    if (current.password !== password) {
        throw new Error();
    }
    const token = getRandomString();

    storage.update({email, password, token});
    return token;
}

const getMe = ({token}) => {
    const user = storage.getByToken(token);
    if (!user) {
        console.error('User is not found');
        throw new Error();
    }
    return user;
}

export default {
    resetPassword,
    activateUser,
    login,
    getMe,
}