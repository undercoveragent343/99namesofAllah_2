// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import {AppStyles} from "../styles/AppStyles";
//
// const IntroductionScreen = ({ navigation }) => {
//     return (
//         <View style={[AppStyles.container, styles.centerContent]}>
//             <Text style={styles.title}>The 99 Names of Allah</Text>
//             <Text style={styles.subtitle}>hadith here ab who learns enters jannah</Text>
//             <Image
//                 source={{ uri: 'https://via.placeholder.com/150' }}
//                 style={styles.image}
//             />
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('NameListScreen')}
//             >
//                 <Text style={styles.buttonText}>Learn Names</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('MemorizationToolsScreen')}
//             >
//                 <Text style={styles.buttonText}>Memorization Tools</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('LanguagesScreen')}
//             >
//                 <Text style={styles.buttonText}>Languages</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('SettingsScreen')}
//             >
//                 <Text style={styles.buttonText}>Settings</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     centerContent: {
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     title: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         marginTop: 50,
//     },
//     subtitle: {
//         fontSize: 18,
//         fontStyle: 'italic',
//         marginBottom: 20,
//     },
//     image: {
//         width: 150,
//         height: 150,
//         resizeMode: 'contain',
//         marginBottom: 30,
//     },
//     button: {
//         backgroundColor: '#2c3e50',
//         borderRadius: 4,
//         paddingVertical: 8,
//         paddingHorizontal: 16,
//         marginBottom: 8,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: '500',
//     },
// });
//
// export default IntroductionScreen;
//

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {AppStyles} from "../styles/AppStyles";

const IntroductionScreen = ({ navigation }) => {
    return (
        <View style={[AppStyles.container, styles.centerContent]}>
            <Text style={styles.title}>The 99 Names of Allah</Text>
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.image}
            />
            <Text style={styles.subtitle}>"Allah has ninety-nine names, and whoever knows them will go to Paradise."</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.buttonColor1]}
                    onPress={() => navigation.navigate('NameListScreen')}
                >
                    <Text style={styles.buttonText}>99 Names of Allah</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonColor2]}
                    onPress={() => navigation.navigate('MemorizationToolsScreen')}
                >
                    <Text style={styles.buttonText}>Memorization Tools</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonColor3]}
                    onPress={() => navigation.navigate('LanguagesScreen')}
                >
                    <Text style={styles.buttonText}>Languages</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonColor4]}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centerContent: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    buttonsContainer: {
        marginBottom: 30,
    },
    button: {
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 8,
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    buttonColor1: {
        backgroundColor: '#3498db',
    },
    buttonColor2: {
        backgroundColor: '#9b59b6',
    },
    buttonColor3: {
        backgroundColor: '#2ecc71',
    },
    buttonColor4: {
        backgroundColor: '#e67e22',
    },
});

export default IntroductionScreen;

