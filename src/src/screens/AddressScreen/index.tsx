import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../../components/Button';
import styles from './styles';
import states from '../../data/states';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [apartment, setApartment] = useState('');
  const [apartmentError, setApartmentErr] = useState('');


  const [city, setCity] = useState('');
  const [selectedOption, setSelectedOption] = useState(
    states.options ? states.options[0] : null,
  );

  console.log(fullname);

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Fix all field errors before submiting');
      return;
    }
    if (apartmentError) {
      Alert.alert('Fix all field errors before submiting');
      return;
    }


    if (!fullname) {
      Alert.alert('Please fill in the fullname field');
      return;
    }

    if (!phone) {
      Alert.alert('Please fill in the phone number field');
      return;
    }

    console.warn('Success. CHeckout');
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }
  };
  const validateApartmentNumber = () => {
    if (apartment.length < 1) {
      setApartmentErr(' Enter your Apt, or unit number ');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
        <Text style={styles.label}> United States only  (For international shipping email us please)</Text>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
              <Picker.Item value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>

        {/* Full name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/* Phone number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {/* Apartment Number */}
          <TextInput
            style={styles.input}
            placeholder="Apartment, suite, etc"
            value={apartment}
            onEndEditing={validateApartmentNumber}
            onChangeText={text => {
              setApartment(text);
              setApartmentErr('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>
        {/* State selector */}
        <Text style={styles.label}>State</Text>
        <View style={{ paddingVertical:10}}>
        <Picker 
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {states.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
        </View>
      
      {/* Zip Code  */}
      <View style={styles.row}>
          <Text style={styles.label}> Zip Code  </Text>
          <TextInput
            style={styles.input}
            placeholder="Zip Code  "
            value={phone}
            onChangeText={setPhone}
            keyboardType={'numeric'}
          />
        </View>
      

        <Button text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;