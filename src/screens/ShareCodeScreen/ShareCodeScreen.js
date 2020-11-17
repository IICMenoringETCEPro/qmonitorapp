import React, { useContext } from 'react';
import { Image, ScrollView, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Block, Button, TextView } from '../../components/covidui';
import styles from './styles';
import { color } from '../../utils/color';
import FormButton from '../../components/FormButton';



export default function ShareCodeScreen({ navigation }) {




    return (
        <ScrollView style={{ flex: 1 }}>
            <Block block color="#fafafa" height={300}>
                <Block height={300} color={color.blue} style={styles.bg}>
                    <Block style={styles.wrapperimage}>
                        <Image
                            style={styles.doctor}
                            source={require('../../../assets/images-covidui/coronadr.png')}
                        />
                    </Block>
                </Block>
                <Block style={styles.containerHeader}>
                    <Image style={styles.img} source={require('../../../assets/images-covidui/virus.png')} />
                </Block>

            </Block>

            <Block padding={10} color={'white'}>
                <View style={styles.qrcodeContainer}>
                    <TextView h6>Share your code to make group</TextView>
                    <View style={{ marginTop: 20, marginBottom: 10 }}>
                        <QRCode
                            value="http://awesome.link.qr"
                            size={200}
                        />

                    </View>
                </View>
            </Block>
            <Block padding={10} color={'white'}>
                <View style={{height:200,marginTop:20}}>
                    <FormButton
                        buttonTitle="Share with your Friends"
                        onPress={() => console.log('share button pressed')}
                    />

                </View>

            </Block>




        </ScrollView>
    );



}