import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList,  } from 'react-native';

import ProductItem from '../../components/ProductItem';
import { Video } from 'expo-av'
import {DataStore} from 'aws-amplify'
import {Product} from '../../models'
//import api from '../../data/api'

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
   }, [])
   
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;