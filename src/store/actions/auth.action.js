import { SIGN_UP_URL } from '../../constants/Database'

export const SIGN_UP = 'SIGN_UP';

export const signup = (email, password) => {
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

            if (!response.ok) {
                const errorResponse = await response.json();
                const errorId = errorResponse.error.message;

                let message = 'No se ha podido registrar';
                if (errorId === 'EMAIL_EXIST') message= 'Este email ya está registrado';

                throw new Error(message);
            }

            const data = await response.json();

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