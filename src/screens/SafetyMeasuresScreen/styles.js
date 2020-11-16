import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    img: {
        width: '100%',
        height: 300,
    },
    doctor: {
        position: 'absolute',
        top: 100,
        left: -30,

        // width: 50,
        // height: 80,
    },
    wrapperimage: {
        position: 'absolute',
        bottom: 0,

        alignSelf: 'center',
        width: Dimensions.get('window').width,
        height: 300,
    },
    bg: {
        position: 'absolute',
        width: 1000,
        height: 1000,
        top: -(930 - Dimensions.get('window').width / 2),
        alignSelf: 'center',
        // top: 500 - Dimensions.get('window').width / 2,
        // left: 500 - Dimensions.get('window').width / 2,
        borderRadius: 1000,
        overflow: 'hidden',
    },
    containerHeader: {
        position: 'relative',
    },
    map: {
        borderRadius: 8,
        marginTop: 15,
        padding: 15,
    },

    img_item: {
        width: (1.2 * Dimensions.get('window').width) / 3,
        height: (1.2 * Dimensions.get('window').width) / 3,
    },
    field_con: {
        // marginLeft: Dimensions.get('window').width / 2,
        position: 'absolute',
        width: (2 * Dimensions.get('window').width) / 3,
        left: Dimensions.get('window').width / 3 + 10,
        top: 10,
        paddingVertical: 10,
    },
    textDesc: {
        lineHeight: 20,
        marginTop: 10,
        maxWidth: (2 * Dimensions.get('window').width) / 3.4,
    },
    btn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
})