import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: "column",
        height:Dimensions.get('window').height
    },
    loginFormContainer: {

        flexDirection:"column",
        marginLeft:15,
        marginRight:15,
        marginTop:5,
        marginBottom:8

    },
    formElements:{
        marginTop:6,
        marginBottom:6
    },
    loginButton:{
       marginTop:8,
       justifyContent:"center",
       flexDirection:"row"
    },
    loginText:{
        fontSize:20
    },
    loginImage:{
        height:Dimensions.get("window").height*(1.3/5),
        width:Dimensions.get('window').width*(7.5/10),
        alignSelf:"center",
        marginTop:25,
        marginBottom:10
    },
    signupContainer:{
        flexDirection:"row",
        marginTop:15
    },
    signUpText:{
        marginLeft:9,
        fontSize:18
    },
    dontHaveAnAcoountText:{
        fontSize:18
    }
})