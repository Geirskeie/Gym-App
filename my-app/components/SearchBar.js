import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';


const SearchBar = ({ searchQuery }) => {
    const [text, setText] = React.useState('');

    handleChangeText = (newText) => {
        setText(newText);
        searchQuery(newText);
    }

    return (
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeText}
            value={text}
            placeholder="Search"
          />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor:"#ffff",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 14,
  },
});

export default SearchBar;