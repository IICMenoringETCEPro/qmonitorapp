import React from 'react';
import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';


export default function SignupScreen ({ navigation }) {
        return (

            <View style={styles.container}>


                <View style={styles.registerFormContainer}>
                    <TextInput
                        label="Name"
                        value={null}
                        mode='outlined'
                        onChangeText={text => console.log(text)}
                        style={styles.formElements}
                    />
                    <TextInput
                        label="Phone No"
                        value={null}
                        mode='outlined'
                        onChangeText={text => console.log(text)}
                        style={styles.formElements}
                    />
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
                    <TextInput
                        label="Confirm Password"
                        value={null}
                        mode='outlined'
                        onChangeText={text => console.log(text)}
                        style={styles.formElements}
                    />

                    <View style={styles.registerButton}>
                        <Button
                            icon={"login"}
                            mode="contained"
                            uppercase={false}
                            onPress={() => console.log('Pressed')}>
                            <Text style={styles.registerText}>Register</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );

}


