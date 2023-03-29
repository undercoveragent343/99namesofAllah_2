import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

export const SwipeableNames = ({ names }) => {
    return (
        <Swiper style={styles.wrapper} showsButtons loop showsPagination={false}>
            {names.map((name, index) => (
                <View key={index} style={styles.slide}>
                    <Text style={styles.text}>{index + 1}. {name.arabicName} - {name.name}</Text>
                    <Text style={styles.meaning}>{name.meaning}</Text>
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 20,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
    meaning: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
});
