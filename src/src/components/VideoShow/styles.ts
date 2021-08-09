import {StyleSheet, Dimensions} from 'react-native';
import { startClock } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container:{
          
         width:"100%",
         height:Dimensions.get('window').height-48,
         backgroundColor:"black"


        

    },
    video:{
        position:"absolute",
         top:0,
         left :0,
         bottom:0,
         right:0,
         
          
          
        

    },
    reviewAndLike:{
        width:80,
        alignSelf:'flex-end',
        justifyContent:"center",
        marginTop:"45%",
        //backgroundColor:'black',
        alignItems:"center",
        height:400,
        
        
        
    },
    ratings:{
        padding:20,
        alignItems:"center"
        
    },
    
    productdetails:{
        //height:"95%",
        marginTop:'8%',
        justifyContent:"flex-start",
        //backgroundColor:"#F6DFE3",
        height:'100%',
        flexDirection:"row",
        borderWidth: 1,
        borderColor:"gray",
        borderRadius:10
        
        
    },
    imagec1:{
        flex:1,
        //backgroundColor:'red',
         

    },
    image:{
        marginVertical:10,
        height:70,
        width:70,
        marginLeft:15,
        resizeMode: 'contain',
        borderRadius:15

    },
    secondcolum:{
        flex:2,

    },
    title:{
        fontSize:16,
        color:'white',
        fontWeight:'bold'

    },
    description:{

    },
    price:{
        fontSize: 16,
    fontWeight: 'bold',
    color:'#18FFFF'
    },
    oldPrice:{
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',    
    },

    bottons:{
        flex:1,
        flexDirection:'column',
        marginRight:15
        
        

    },
    addtocart:{
        paddingVertical:15,
        

    },
    buynow:{

    }
 
});

export default styles;