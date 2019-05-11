import React from 'react';
import { Text, Dimensions } from 'react-native';
import { View, InputGroup, Input } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchBox = ({
  getInputData,
  toggleSearchResultModal,
  getAddressPredictions,
  selectedAddress
}) => {
  const { selectedPickUp } = selectedAddress || {};
  function handleInput(key, val) {
    getInputData({
      key,
      value: val
    });
    getAddressPredictions();
  }

  return (
    <View style={styles.searchBox}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>PICK UP</Text>
        <InputGroup>
          <Icon name="search" size={15} color="#FF5E3A" />
          <Input
            onFocus={() => toggleSearchResultModal('pickUp')}
            style={styles.inputSearch}
            placeholder="Choose pick-up location"
            onChangeText={handleInput.bind(this, 'pickUp')}
            value={selectedPickUp && selectedPickUp.name}
          />
        </InputGroup>
      </View>
    </View>
  );
};

export default SearchBox;

const width = Dimensions.get('window').width; //full width
const styles = {
  searchBox: {
    top: 0,
    position: 'absolute',
    width
  },
  inputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 7
  },
  secondInputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 0,
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 7
  },
  inputSearch: {
    fontSize: 14
  },
  label: {
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0
  }
};
