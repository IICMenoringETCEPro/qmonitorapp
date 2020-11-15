
import React, { useState,useContext,useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    SafeAreaView
} from 'react-native';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

import {AuthContext} from '../../navigation/AuthProvider';

import styles from './styles';

export default function EditProfileScreen({ navigation }) {

    const [name, setName] = useState();
    const [phoneNo, setphoneNo] = useState();
    const [email, setemail] = useState();
    const [address, setaddress] = useState();

    const {user} = useContext(AuthContext);

    const [image, setImage] = useState('https://avatars0.githubusercontent.com/u/74367493?s=400&u=48f4a912b9b3db9839ae8ff442b4089dc96549b8&v=4');

    useEffect(() => {
        const checkImageData = async () => {
            if (user.photoURL) {
                setImage(user.photoURL);
            }
        }
        checkImageData();
    }, []);

    const { colors } = useTheme();

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            bs.current.snapTo(1);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
            bs.current.snapTo(1);
        });
    }

    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <FormButton
                buttonTitle="Take Photo"
                onPress={takePhotoFromCamera}
            />
            <FormButton
                buttonTitle="Choose From Library"
                onPress={choosePhotoFromLibrary}
            />
            <FormButton
                buttonTitle="Cancel"
                onPress={() => bs.current.snapTo(1)}
            />
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    return (

        <SafeAreaView style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <ImageBackground
                                source={{
                                    uri: image,
                                }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Icon
                                        name="camera"
                                        size={35}
                                        color="#fff"
                                        style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        {user.displayName}
                    </Text>

                </View>

                <View style={styles.updateFormContainer}>
                    <FormInput
                        labelValue={name}
                        onChangeText={(userEmail) => setName(userEmail)}
                        placeholderText="Your Name"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={phoneNo}
                        onChangeText={(userEmail) => setphoneNo(userEmail)}
                        placeholderText="Your Phone no"
                        iconType="phone"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setemail(userEmail)}
                        placeholderText="Your Email"
                        iconType="mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                     <FormInput
                        labelValue={address}
                        onChangeText={(userEmail) => setaddress(userEmail)}
                        placeholderText="Address"
                        iconType="home"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                </View>

                <FormButton
                    buttonTitle="Submit"
                    onPress={() => console.log('pressed')}
                />
            </Animated.View>
        </SafeAreaView>
    );



}