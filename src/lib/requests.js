import backend from "./pseudoBackend/backend";
import {getToken} from "./auth";
// since we don't have a backend - here we call pseudo backend layer

const resetPassword = async (params) => {
    return backend.resetPassword(params)
}

const activateUser = async (params) => {
    return backend.activateUser(params)
}

const login = async (params) => {
    return backend.login(params)
}

const getMe = async () => {
    const token = getToken()
    return backend.getMe({token});
}

export default {
    resetPassword,
    activateUser,
    login,
    getMe,
}