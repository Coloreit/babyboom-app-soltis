import { Alert, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { useDispatch } from 'react-redux'
import { login, signup } from '../store/actions/auth.action'
import Input from '../components/Input'
import { Image } from 'react-native'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value,
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        }
        let formIsValid = true;

        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }
        return {
            formIsValid,
            inputValidities,
            inputValues
        }
    }
    return state;
}

const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formState, formDispatch] = React.useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    const onHandleRegister = () => {
        console.log(formState)
        if (formState.formIsValid) {
            dispatch(signup(formState.inputValues.email, formState.inputValues.password));
        } else {
            Alert.alert(
                'Formulario inválido',
                'Ingrese mail y/o contraseña válido',
                [{ text: 'OK' }]
            );
        }
    }

    const onHandleLogin = () => {
        console.log(formState)
        if (formState.formIsValid) {
            dispatch(login(formState.inputValues.email, formState.inputValues.password));
        } else {
            Alert.alert(
                'Formulario inválido',
                'Ingrese mail y/o contraseña válido',
                [{ text: 'OK' }]
            );
        }
    }

    const onInputChangeHandler = React.useCallback((inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        })
    }, [formDispatch]);

    return (
        <KeyboardAvoidingView style={styles.screen} behavior="padding">
            <View style={styles.container}>
                <Image source={require('../img/favicon.png')} style={styles.image}/>
                <Text style={styles.title}>REGISTRO</Text>
                
                <View style={styles.form}>
                    <Input
                        style={styles.textInput}
                        initialValue={formState.inputValues.email}
                        initiallyValid={formState.inputValidities.email}
                        onInputChange={onInputChangeHandler}
                        id='email'
                        required
                        email
                        label='Email'
                        errorText='Por favor, ingrese un email válido'
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                    <Input
                        style={styles.textInput}
                        initialValue={formState.inputValues.password}
                        initiallyValid={formState.inputValidities.password}
                        onInputChange={onInputChangeHandler}
                        id='password'
                        required
                        minLength={5}
                        label='Contraseña'
                        errorText='Por favor, ingrese una contraseña válida'
                        autoCapitalize='none'
                        keyboardType='default'
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.loginButton} onPress={onHandleLogin}>
                        <Text style={styles.loginButtonText}>Acceder</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.registerButton} onPress={onHandleRegister}>
                        <Text style={styles.loginButtonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'JosefinSans_700Bold',
        marginBottom: 12,
        textAlign: 'center',
        color: COLORS.naranja,
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,
        fontFamily: 'JosefinSans_700Bold'
    },
    textInput: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    loginButton: {
        width: '100%',
        justifyContent: 'center',
        height: 40,
        backgroundColor: COLORS.celeste,
        marginVertical: 12,
    },
    registerButton:{
        width: '100%',
        justifyContent: 'center',
        height: 40,
        backgroundColor: COLORS.verde,
        marginVertical: 12,
    },
    loginButtonText: {
        fontSize: 18,
        fontFamily: 'JosefinSans_700Bold',
        textAlign: 'center',
        color: '#fff',
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        fontFamily: 'JosefinSans_400Regular',
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        fontFamily: 'JosefinSans_700Bold',
        color: COLORS.celeste
    },
    button: {
        backgroundColor: COLORS.celeste,
        marginVertical: 20,
    }
})