import React from "react";
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, name }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  }
};

export { Button };
