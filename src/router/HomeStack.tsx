import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MainHomeScreen from '../screens/MainHomeScreen';
import ProductScreen from '../screens/ProductScreen';
import Home from '../screens/PagerView/Home';
import {Text, SafeAreaView, View, TextInput} from 'react-native';
import {AntDesign,Feather} from '@expo/vector-icons';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius:15,
          borderWidth:0.25,
          borderColor:'#F83251'
        }}>
        <Feather name="search" size={25} color='#F83251' />
        <TextInput
          style={{height: 40, marginLeft: 10,width:500  }}
          placeholder=" Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="MainHomeScreen" options={{title: 'Home'}}>
        {() => <MainHomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
      <Stack.Screen component={Home} name="ProductVideo" />
    </Stack.Navigator>
  );
};

export default HomeStack;