import React ,{useContext} from 'react';
import {
    View,
    Text
} from 'react-native';



import styles from './styles';
import FormButton from '../../components/FormButton';
import {AuthContext} from '../../navigation/AuthProvider';
import { Block, Button, TextView } from '../../components/covidui';
import { color } from '../../utils/color';
import Feather from 'react-native-vector-icons/Feather'

export default function GroupScreen({ navigation }) {
    const { logout } = useContext(AuthContext);



    return (
        <View style={styles.container}>
            
            <Button>
                <Block color={'#fff'} style={{ marginTop: 5, marginLeft: 0}}>
                    <Block direction="row" justifyContent="space-between" style={{paddingLeft: 10}}>
                        <TextView h6>Group Chat 1</TextView>
                    </Block>
                    <Block color={'#fff'} style={styles.map}>
                        <TextView>This is the sample group</TextView>
                    </Block>
                </Block>
            </Button>
            <Button>
                <Block color={'#fff'} style={{ marginTop: 5, marginLeft: 0}}>
                    <Block direction="row" justifyContent="space-between" style={{paddingLeft: 10}}>
                        <TextView h6>Group Chat 2</TextView>
                    </Block>
                    <Block color={'#fff'} style={styles.map}>
                        <TextView>This is the sample group</TextView>
                    </Block>
                </Block>
            </Button>
            <Button>
                <Block color={'#fff'} style={{ marginTop: 5, marginLeft: 0}}>
                    <Block direction="row" justifyContent="space-between" style={{paddingLeft: 10}}>
                        <TextView h6>Group Chat 3</TextView>
                    </Block>
                    <Block color={'#fff'} style={styles.map}>
                        <TextView>This is the sample group</TextView>
                    </Block>
                </Block>
            </Button>
            <Button>
                <Block color={'#fff'} style={{ marginTop: 5, marginLeft: 0}}>
                    <Block direction="row" justifyContent="space-between" style={{paddingLeft: 10}}>
                        <TextView h6>Group Chat 4</TextView>
                    </Block>
                    <Block color={'#fff'} style={styles.map}>
                        <TextView>This is the sample group</TextView>
                    </Block>
                </Block>
            </Button>
            <Button>
                <Block color={'#fff'} style={{ marginTop: 5, marginLeft: 0}}>
                    <Block direction="row" justifyContent="space-between" style={{paddingLeft: 10}}>
                        <TextView h6>Group Chat 5</TextView>
                    </Block>
                    <Block color={'#fff'} style={styles.map}>
                        <TextView>This is the sample group</TextView>
                    </Block>
                </Block>
            </Button>
            <TextView style={{padding: 30}}>Here all the chats will be shown</TextView>

        </View>
    );



}