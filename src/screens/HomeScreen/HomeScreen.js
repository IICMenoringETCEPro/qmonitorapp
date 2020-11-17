import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import moment from 'moment';

import { Block, Button, TextView } from '../../components/covidui';
import { color } from '../../utils/color';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import FormButton from '../../components/FormButton';
import { AuthContext } from '../../navigation/AuthProvider';


export default function HomeScreen({ navigation }) {
    const { logout } = useContext(AuthContext);

    const ItemDot = ({ color1, color2, num, title }) => {
        return (
            <Block block>
                <Block middle>
                    <Block
                        width={30}
                        height={30}
                        middle
                        centered
                        borderRadius={30}
                        color={color1}>
                        <Block
                            width={20}
                            height={20}
                            borderWidth={4}
                            borderRadius={20}
                            borderColor={color2}
                        />
                    </Block>
                    <TextView padding={15} color={color2} h5>
                        {num}
                    </TextView>
                    <TextView color="gray" h6>
                        {title}
                    </TextView>
                </Block>
            </Block>
        );
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <Block block color="#fafafa">
                <Block height={300} color={color.blue} style={styles.bg}>
                    <Block style={styles.wrapperimage}>
                        <Image
                            style={styles.doctor}
                            source={require('../../../assets/images-covidui/Drcorona.png')}
                        />
                    </Block>
                </Block>
                <Block style={styles.containerHeader}>
                    <Image style={styles.img} source={require('../../../assets/images-covidui/virus.png')} />
                </Block>
                <Block>
                    <Button
                        color="#fff"
                        borderWidth={1}
                        borderColor="#f0f0f0"
                        margin={10}
                        borderRadius={30}>
                        <Block direction="row" paddingHorizontal={15} middle>
                            <Feather name="map-pin" size={16} color={color.blue1} />
                            <Block block padding={10}>
                                <TextView h6>West Bengal</TextView>
                            </Block>
                            <Feather name="chevron-down" size={16} color={color.blue1} />
                        </Block>
                    </Button>
                </Block>
                <Block padding={10} style={{ marginTop: 10 }}>
                    <Block justifyContent="space-between" direction="row">
                        <Block>
                            <TextView h6>Case Update</TextView>
                            <TextView>Newest update {moment().format("MMM Do YY")}</TextView>
                        </Block>
                        <Button
                            textColor={color.blue1}
                            onPress={() => navigation.navigate('Details')}
                        >
                            See details
                        </Button>
                    </Block>
                    <Block
                        color="#fff"
                        borderRadius={8}
                        padding={10}
                        shadow
                        style={{ marginTop: 10 }}
                        direction="row">
                        <ItemDot
                            color1={color.carot_op}
                            color2={color.carot}
                            num={434563}
                            title={'Infected'}
                        />
                        <ItemDot
                            color1={color.red_op}
                            color2={color.red}
                            num={7714}
                            title={'Deaths'}
                        />

                        <ItemDot
                            color1={color.green_op}
                            color2={color.green}
                            num={398952}
                            title={'Recovered'}
                        />
                    </Block>
                    <Block style={{ marginTop: 20 }}>
                        <Block direction="row" justifyContent="space-between">
                            <TextView h6>Spread of Virus</TextView>
                            <Button
                                textColor={color.blue1}
                                onPress={() => navigation.navigate('SafetyMeasures')}>
                                Be healthy
                            </Button>
                        </Block>
                        <Block color={'#fff'} style={styles.map}>
                            <Image source={require('../../../assets/images-covidui/map.png')} />
                        </Block>
                    </Block>
                    <Block style={{ marginTop: 15 }}>
                        <FormButton
                            buttonTitle="Follow this Safety steps"
                            onPress={() => navigation.navigate('SafetyMeasures')}
                        />
                    </Block>
                </Block>
            </Block>
        </ScrollView>
    );



}