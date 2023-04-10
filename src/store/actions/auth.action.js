import { SIGN_UP_URL } from '../../constants/Database'

export const SIGN_UP = 'SIGN_UP';

export const signUp = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error.message);
            }

            console.log(data);

            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId,
            })
        } catch (error) {
            console.error(error);
        }
    }
}