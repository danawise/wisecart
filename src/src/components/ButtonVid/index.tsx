import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const ButtonVid = ({ text, onPress, containerStyles }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor:'#F83251',
    marginHorizontal: 10,
    height: 30,
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
      
    
    //borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    fontSize: 14,
    fontWeight:"bold",
    color:'white'
  },
})

export default ButtonVid;