import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export function signInApi() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
            console.log(payload);
            dispatch(setUser(payload.user));
        })
        .catch((error) => alert(error.message));
    };
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUser(user));
            }
        })
    }
}