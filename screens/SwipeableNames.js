import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { AppStyles } from '../styles/AppStyles';
export const SwipeableNames = ({ names }) => {
    return (
        <Swiper
            style={AppStyles.wrapper}
            loop
            showsPagination={false}
            autoplay={false}
            showsButtons={false}
        >
            {names.map((name, index) => (
                <View key={index} style={styles.slide}>
                    <Text>{name.id}</Text>
                    <Text style={styles.arabicName}>{name.arabicName}</Text>
                    <Text style={styles.nameText}>{name.name}</Text>
                    <Text style={styles.meaningText}>{name.meaning}</Text>
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
        backgroundColor: '#B2DFDB'
    },
    arabicName: {
        fontSize: 60,
        textAlign: 'center',
        marginBottom: 20,
        padding: 40,
    },
    nameText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    meaningText: {
        fontSize: 18,
        textAlign: 'center',
    },
});
