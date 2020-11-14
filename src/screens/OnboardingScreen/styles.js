import { StyleSheet,Dimensions } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextButton:{
        marginRight:5,
        marginTop:8,
        marginBottom:8
    },
    onboardingImage:{
        height:Dimensions.get('screen').height*(0.9/2),
        width:Dimensions.get("screen").width*(1.98/2)
    }
})