import React, { useState } from 'react';
import {View, StyleSheet, Button, Text, FlatList, TouchableOpacity} from 'react-native';
import { SwipeableNames } from './SwipeableNames';
import names from '../data/names';

export const NameListScreen = ({ navigation }) => {
  const [isSwipeable, setIsSwipeable] = useState(false);

  const toggleView = () => {
    setIsSwipeable(!isSwipeable);
  };

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Scroll View" onPress={() => setIsSwipeable(false)} />
          <Button title="Swipe View" onPress={() => setIsSwipeable(true)} />
        </View>
        {isSwipeable ? (
            <SwipeableNames names={names} />
        ) : (
            <FlatList
                data={names}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('NameDetailsScreen', { name: item })}>
                      <View style={styles.nameContainer}>
                        <Text style={styles.arabicName}>{item.arabicName}</Text>
                        <Text style={styles.nameText}>{index + 1}. {item.arabic} - {item.name}</Text>
                        <Text style={styles.meaningText}>{item.meaning}</Text>
                      </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  nameContainer: {
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  arabicName: {
    fontSize: 24,
    textAlign: 'center',
  },
  nameText: {
    fontSize: 18,
  },
  meaningText: {
    fontSize: 16,
  },
});

