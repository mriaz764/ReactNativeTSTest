import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  isTap:boolean,
  onTap: Function;
}

export const ButtonSmall: React.FC<ButtonProps> = ({ title, onTap,isTap }) => {
  return (
    <TouchableOpacity style={styles.btnLogin} onPress={() => onTap()}>
      <Text style={styles.btnText}>{!isTap?title:"            "}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    height: 60,
    
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal:20
    
  },
  btnText: {
    fontSize: 15,
    color: '#000',
  },
});