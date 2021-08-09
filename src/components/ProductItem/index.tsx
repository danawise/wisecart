import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { Video } from 'expo-av'
import styles from './styles';
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

interface ProductItemProps {
  
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
    videoURI: string;
    paused:any,
    video:string
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  let [fontsLoaded,error] = useFonts({
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_400Regular,
  })
  
  if(!fontsLoaded) {
     return <AppLoading/>;
    }
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
  };
  const vidPress = () => {
    navigation.navigate('ProductVideo', {id: item.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri:item.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#F83251'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price. toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ${item.oldPrice. toFixed(2)}</Text>
          )}
        </Text>
      </View>
      <Pressable onPress={vidPress} 
       style={styles.viewVidwe} >
       <Video source={{uri: item.video}}
            style={styles.video}
             //useNativeControls 
             resizeMode={'cover'}
              isLooping={true}
              shouldPlay ={true}
              isMuted={true}
                />
                
                </Pressable>
      
    </Pressable>
  );
};

export default ProductItem;