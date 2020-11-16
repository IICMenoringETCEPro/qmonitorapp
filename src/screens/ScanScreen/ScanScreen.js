import React ,{useContext,useState} from 'react';
import {
    View,
    Text
} from 'react-native';

import Scanner from '../../components/Scanner';



import styles from './styles';

export default function ScanScreen({ navigation }) {
    const [isSocketRead, setIsSocketRead] = useState(false)

    const onCancel = () => {
		console.log('back')
		navigation.goBack();
	}

	const onSocketIDRead = socketId => {
        if (!isSocketRead) {
            console.log("navigating to create booking")
            navigation.replace("CreateBooking", {socketId: socketId});
            setIsSocketRead(true)
        }
    }



    return (
        <View style={styles.container}>
            <Scanner onCancel={onCancel} onSocketIDRead={onSocketIDRead} />
        </View>
    );



}