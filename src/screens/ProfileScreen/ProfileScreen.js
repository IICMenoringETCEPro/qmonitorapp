import React, { useContext,useEffect,useState } from 'react';
import { View } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple
} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import { AuthContext } from '../../navigation/AuthProvider';
import { color } from '../../utils/color';


export default function ProfileScreen({ navigation }) {
    const { logout, user } = useContext(AuthContext);
    let defaultPic = 'https://avatars0.githubusercontent.com/u/74367493?s=400&u=48f4a912b9b3db9839ae8ff442b4089dc96549b8&v=4';
    const [ photoUrl, setphotoUrl] = useState(defaultPic);

    useEffect(() => {
        const checkImageData = async () => {
            if (user.photoURL) {
                setphotoUrl(user.photoURL);
            }
        }
        checkImageData();
    }, []);


    return (
        <View style={styles.container}>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: photoUrl,
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>{user.displayName}</Title>
                        <Caption style={styles.caption}>@abiswas</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="map-marker-radius" color={color.lightthemesecondary} size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata, India</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="phone" color={color.lightthemesecondary} size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>+91-900000009</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="email" color={color.lightthemesecondary} size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>{user.email}</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: '#dddddd',
                    borderRightWidth: 1
                }]}>
                    <Title>140</Title>
                    <Caption>Total earned</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Groups</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="share-outline" color={color.lightthemesecondary} size={25} />
                        <Text style={styles.menuItemText}>Share your code</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate('ProfileEdit')}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="account-edit" color={color.lightthemesecondary} size={25} />
                        <Text style={styles.menuItemText}>Edit your Profile</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="account-check-outline" color={color.lightthemesecondary} size={25} />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="settings-outline" color={color.lightthemesecondary} size={25} />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => logout()}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="logout" color={color.lightthemesecondary} size={25} />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </View>
                </TouchableRipple>
            </View>
        </View>
    );



}