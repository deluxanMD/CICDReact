import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };

  return (
    <View>
      <TextInput
        value={name}
        placeholder="Enter your name here"
        onChangeText={handleNameChange}
        style={styles.textInput}
      />
      <Text>Welcome to the project, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 2,
    paddingLeft: 5,
  },
});

export default Greeting;
