import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/auth.action'

const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    onHandleRegister = () => {
        dispatch(signUp(email, password))
    }

    return (
    <KeyboardAvoidingView style={styles.screen} behavior='padding'>
        <View style={styles.container}>
            <Text style={styles.title}>REGISTRO</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.textInput} 
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput style={styles.textInput} 
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize='none'
                    placeholder='Debe contener al menos 6 caracteres'
                />
                <TouchableOpacity style={styles.loginButton} onPress={onHandleRegister}>
                    <Text style={styles.loginButtonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.prompt}>
                <Text style={styles.promptMessage}>
                    ¿Ya tenes una cuenta?
                </Text>
                <TouchableOpacity>
                    <Text style={styles.promptButton}>Iniciar Sesión</Text>
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
    title: {
        fontSize: 24,
        fontFamily: 'JosefinSans_700Bold',
        marginBottom: 12,
        textAlign: 'center',
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