import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const EditorScreen = () => {
  const markdown = `
# Hello Markdown 👋
## Dhanushka Sandaruwan

This is a simple **Markdown** example in _React Native_.

- List item 1
- List item 2
- List item 3

[Visit Expo](https://expo.dev)

1 . Apple
2 . Banana
3 . Orange

[React native](https://reactnative.dev/docs/getting-started)


This is a Markdown.

# Hello Markdown 👋
## Dhanushka Sandaruwan

This is a simple **Markdown** example in _React Native_.

- List item 1
- List item 2
- List item 3

[Visit Expo](https://expo.dev)

1 . Apple
2 . Banana
3 . Orange

[React native](https://reactnative.dev/docs/getting-started)


![Create Image ](https://livecode.byu.edu/imgs/Shuksan.jpg)
'[Create a link](https://reactnative.dev/docs/getting-started)'


[React](https://reactnative.dev/docs/getting-started)

- Dhanushka
- Pawan
- Nadun
`;

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior='automatic'>
      <Stack.Screen options={{ title: "Markdown" }} />
      <Markdown style={markdownStyles}>{markdown}</Markdown>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1
  },
});

const markdownStyles = StyleSheet.create({
  heading1: {
    color: 'red'
  },

  heading2: {
    color: 'blue'
  },
  body: {
    color: 'brown',
    fontFamily: 'Inter',
    marginBottom: 10

  }
})
export default EditorScreen;
