import React ,{useContext} from 'react';
import {
    View,
    Text
} from 'react-native';



import styles from './styles';

import FormButton from '../../components/FormButton';
import {AuthContext} from '../../navigation/AuthProvider';


export default function GroupScreen({ navigation }) {
    const { logout } = useContext(AuthContext);



    return (
        <View style={styles.container}>
            <Text>This is GroupScreen</Text>


        </View>
    );



}