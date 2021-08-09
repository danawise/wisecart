import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    width:50
  },
  viewVidwe:{
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    width:50,
    marginTop:10,
    paddingLeft:5
    

  },
  video:{
    position:"absolute",
     top:0,
     left :0,
     bottom:0,
     right:0,
     borderRadius:10,
     margin:5
     },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 16,
    fontFamily:"Poppins_400Regular"
  },
  price: {
    fontSize: 18,
    fontFamily:"Poppins_600SemiBold"
  },
  oldPrice: {
    fontSize: 12,
    fontFamily:"Poppins_400Regular",
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default styles;