import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-paper';

const Scanner = ({ onCancel, onSocketIDRead }) => {

    const [isFlashOn, setIsFlashOn] = useState(false)
    const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);

    const onBarcodeDetected = (barcode) => {
        try {
            console.log(barcode.data);
            const data = JSON.parse(barcode.data);
            if (data && data.socketId) {
                (onSocketIDRead || Function.prototype)(data.socketId);
                // console.log("socoket id is " + data.socketId)
            }
        } catch (e) {
            console.error(e);
        }

    }

    const toggleFlash = () => {
        isFlashOn ? setFlashMode(RNCamera.Constants.FlashMode.off) : setFlashMode(RNCamera.Constants.FlashMode.torch)
        setIsFlashOn(!isFlashOn);

    }

    return (

        <View style={styles.container}>
            <RNCamera style={styles.camera}
                onBarCodeRead={onBarcodeDetected}
                flashMode={flashMode}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            >
                <BarcodeMask edgeRadius={25} outerMaskOpacity={0} edgeHeight={50} edgeWidth={50} />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={styles.cameraIconButton} onPress={onCancel}>
                        <Icon size={32} color={'white'} name={'close'} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cameraIconButton} onPress={toggleFlash}>
                        <Icon size={32} color={'white'} name={isFlashOn ? 'flashlight-off' : 'flashlight'} />
                    </TouchableOpacity>

                </View>


            </RNCamera>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    camera: {
        flex: 1,
        width: "100%"
    },
    cameraIconButton: {
        // alignItems: 'center',
        marginTop: 16,
        marginHorizontal: 16

    }
})

export default Scanner;