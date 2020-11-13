import React from 'react';
import { Text, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';


export default function LoginScreen ({ navigation }) {

        const onSignUpPressed = () => {
            navigation.navigate('Signup')
        }

        return (
            <View style={styles.container}>

                <Image
                    style={styles.loginImage}
                    source={require('../../../assets/images/undraw_mobile_login_ikmv.png')}
                />

                <View style={styles.loginFormContainer}>
                    <TextInput
                        label="Email"
                        value={null}
                        mode='outlined'
                        onChangeText={text => console.log(text)}
                        style={styles.formElements}
                    />
                    <TextInput
                        label="Password"
                        value={null}
                        mode='outlined'
                        onChangeText={text => console.log(text)}
                        style={styles.formElements}
                    />

                    <View style={styles.loginButton}>
                        <Button
                            icon={"login"}
                            mode="contained"
                            uppercase={false}
                            onPress={() => console.log('Pressed')}>
                            <Text style={styles.loginText}>Login</Text>
                        </Button>
                    </View>

                    <View style={styles.signupContainer}>
                        <Text style={styles.dontHaveAnAcoountText}>Don't have an account ?</Text>
                        <Text style={styles.signUpText} onPress={onSignUpPressed}>Sign Up</Text>

                    </View>


                </View>

            </View>
        );

}