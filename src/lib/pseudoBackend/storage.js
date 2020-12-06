const USERS = 'users';

const initStorage = () => {
    const initValue = JSON.stringify([])
    window.localStorage.setItem(USERS, initValue);
    return initValue;
}

const getUsers = () => {
    const rawUsers = window.localStorage.getItem(USERS);
    if (!rawUsers) return [];

    const users = JSON.parse(rawUsers);
    return users || [];
}

const getByEmail = (email) => {
    const users = getUsers();
    return users.find((i) => i.email === email);
}

const getByLink = (link) => {
    const users = getUsers();
    return users.find((i) => i.link === link);
}

const getByToken = (token) => {
    const users = getUsers();
    return users.find((i) => i.token === token);
}

const create = ({email, link}) => {
    let rawUsers = window.localStorage.getItem(USERS);

    if (!rawUsers) {
        rawUsers = initStorage();
    }

    const users = JSON.parse(rawUsers);
    const newUser = {email, link};
    window.localStorage.setItem(USERS, JSON.stringify([...users, newUser]));
    return newUser
}

const update = (user) => {
    // TODO: there should be password encryption in perfect case (but there is no encryption :)
    const users = getUsers();
    const updated = users.map((current) => {
        if (current.email === user.email) {
            return user
        }
        return current
    });
    window.localStorage.setItem(USERS, JSON.stringify(updated));
    return user;
}

export default {
    getByEmail,
    getByLink,
    getByToken,
    update,
    create
}