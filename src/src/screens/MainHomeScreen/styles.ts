import {StyleSheet,Dimensions} from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
         
         backgroundColor:'white'
        

    },
    topics:{
        fontSize:18,
        //fontWeight:'bold',
        marginTop:20,
        marginLeft:10,
        color:'#172133',
        fontFamily:"Poppins_600SemiBold"
    },
    whatsNew:{
        flexDirection:'row',
        height:800,
        width:800
    },
    whatsNPic:{
        height:180,
        width:'100%',
        resizeMode: 'cover',
        borderRadius:10,
    },
    whatsNText:{
        fontSize:16,
        margin:8,
        textAlign:"center",
        fontFamily:"Poppins_500Medium"
        
    },

    view: {
        marginTop: 20,
        backgroundColor: '#F6DFE3',
        width: width - 100,
        margin: 10,
        height: 220,
        borderRadius: 10,
        //paddingHorizontal : 30
      },
      view2: {
        marginTop: 20,
        backgroundColor: '#F6DFE3',
        width: width - 80,
        margin: 10,
        height: 220,
        borderRadius: 10,
        marginLeft:20
        //paddingHorizontal : 30
      },
      top5pic:{
          height:50,
          width:50,
          margin:10,
          borderRadius:20

      },
      top5number:{
        fontSize:18,
        color:"#F83251",
        //fontWeight:'bold',
        margin:5,
        paddingTop:12,
        marginLeft:16,
        fontFamily:"Poppins_600SemiBold"

      },
      top5TextTitle:{
          fontSize:14,
          paddingTop:20,
          marginLeft:10,
          fontFamily:"Poppins_300Light"

      },
      catagorContainer:{
        marginTop: 20,
        backgroundColor: 'white',
        width: 150,
        margin: 10,
        height: 220,
        borderRadius: 10,
        marginLeft:20,
        marginHorizontal:2,
        borderWidth:0.5,
        borderColor:'grey'
      },
      catagoryPic:{
        height:180,
        width:'100%',
        resizeMode: 'cover',
        borderRadius:10,
        
      },
      catagoryText:{
        fontSize:14,
        marginLeft:8,
        paddingTop:2,
        //fontWeight:'bold',
        color:'#172133',
        fontFamily:"Poppins_400Regular"
        //textAlign:"center",
      }
   
 
});

export default styles;