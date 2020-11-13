import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: "column",
        height:Dimensions.get('window').height
    },
    registerFormContainer: {

        flexDirection:"column",
        marginLeft:15,
        marginRight:15,
        marginTop:50,
        marginBottom:8

    },
    formElements:{
        marginTop:6,
        marginBottom:6
    },
    registerButton:{
       marginTop:8,
       justifyContent:"center",
       flexDirection:"row"
    },
    registerText:{
        fontSize:20
    }
})