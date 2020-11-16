import React from 'react';
import { Image, ScrollView } from 'react-native';

import { Block, Button, TextView } from '../../components/covidui';
import { color } from '../../utils/color';

import styles from './styles';

export default function SafetyMeasuresScreen({ navigation }) {

    const Item = ({ icon, title }) => {
        return (
            <Block block centered>
                <Button middle shadow color="#fff" padding={10} borderRadius={12}>
                    <Image source={icon} />
                    <TextView bold center>
                        {title}
                    </TextView>
                </Button>
            </Block>
        );
    };

    const ItemField = ({ icon, title, desc }) => {
        return (
            <Button>
                <Block
                    direction="row"
                    borderRadius={10}
                    shadow
                    color="#fff"
                    padding={6}
                    paddingHorizontal={10}
                    style={{ marginTop: 10 }}>
                    <Image style={styles.img_item} resizeMode="contain" source={icon} />
                    <Block padding={10} style={styles.field_con}>
                        <TextView size={16} bold>
                            {title}
                        </TextView>
                        <TextView style={styles.textDesc}>{desc}</TextView>
                    </Block>
                </Block>
            </Button>
        );
    };


    return (
        <ScrollView style={{ flex: 1 }}>
            <Block block color="#fafafa">
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
                <Block padding={10}>
                    <TextView h6>Symptomps</TextView>
                    <Block direction="row" paddingVertical={10}>
                        <Item icon={require('../../../assets/images-covidui/headache.png')} title="Headache" />
                        <Block width={10} />
                        <Item icon={require('../../../assets/images-covidui/caugh.png')} title="Caugh" />
                        <Block width={10} />
                        <Item icon={require('../../../assets/images-covidui/fever.png')} title="Fever" />
                    </Block>
                </Block>
                <Block padding={10}>
                    <TextView h6>Prevention</TextView>
                    <Block>
                        <ItemField
                            title="Wear face mask"
                            desc="Since the start of the coronavirus outbreak some places have fully embraced wearing face masks, and anyone caught without one risks becoming a social pariah."
                            icon={require('../../../assets/images-covidui/wear_mask.png')}
                        />
                        <ItemField
                            title="Wash your hands"
                            desc="These diseases include gastrointestinal infections, such as Salmonella, and respiratory infections,such as influenza."
                            icon={require('../../../assets/images-covidui/wash_hands.png')}
                        />
                    </Block>
                </Block>
            </Block>
        </ScrollView>
    );



}