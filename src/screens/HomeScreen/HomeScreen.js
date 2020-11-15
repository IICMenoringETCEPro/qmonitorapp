import React ,{useContext} from 'react';
import {
    View,
    Text
} from 'react-native';



import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';


export default function HomeScreen({ navigation }) {
    const { logout } = useContext(AuthContext);



    return (
        <View style={styles.container}>
            <Text>This is HomeScreen</Text>

        </View>
    );



}