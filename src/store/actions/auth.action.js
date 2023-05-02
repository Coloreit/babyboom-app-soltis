import { Alert } from 'react-native';
import { SIGN_UP_URL, LOG_IN_URL } from '../../constants/Database'

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';

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
                if (errorId === 'EMAIL_EXISTS') Alert.alert('Este email ya está registrado');

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

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(LOG_IN_URL, {
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

                let message = 'No se ha podido logear';
                if (errorId === 'EMAIL_NOT_FOUND') Alert.alert('Este email no está registrado');
                if (errorId === 'INVALID_PASSWORD') Alert.alert('La contraseña no es correcta');

                throw new Error(message);
            }

            const result = await response.json();

            dispatch({
                type: SIGN_UP,
                token: result.idToken,
                userId: result.localId,
            })
        } catch (error) {
            console.error(error);
        }
    }
}