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
    left: 60,

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
})