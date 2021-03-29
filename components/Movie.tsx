import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { ProgressCircle } from './ProgressCircle';
import Constants from 'expo-constants';

let { width } = Dimensions.get('window');
let imageSize = '/w500' // h 750
let ratio = 1.5
// if (width > 780) {
//     imageSize = '/original' // w 2000 h 3000
if (width > 500) {
    imageSize = '/w780' // h 1170
}
const IMG_BASE = `${Constants.manifest.extra.IMG_BASE}${imageSize}`

const emToPx = (em) => {
    return em * 16
}
const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width - 16,
        height: 48,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width - 20,
        height: 55,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'rgb(230,230,230)',
        fontSize: emToPx(1.5),
    },
    image: {
        width: width,
        height: width,
        backgroundColor: 'rgb(200,200,200)',
    },
    textContainer: {
        width: width,
        marginBottom: 10
    },
    ratingContainer: {
        position: 'absolute',
        zIndex: 3,
        right: 9,
        top: 9,
        fontSize: emToPx(1),
        borderRadius: 10,
        height: emToPx(3),
        width: emToPx(3),
    },
    pCircleContainer: {
        position: 'absolute',
        zIndex: 3,
        right: 9,
        top: 9,
        backgroundColor: 'transparent',
    },
    rating: {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'transparent',
        height: emToPx(2),
        width: emToPx(2),
        fontSize: emToPx(3),
        lineHeight: emToPx(2)

    }
});
export function Movie({ item }: { item: any }) {
    const color = item.vote_average > 7.5 ? '#6c3' : '#fc3'
    const colorStyles = {
        backgroundColor: color
    };
    return (
        <View>
            <View style={styles.titleContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                        style={{ paddingLeft: 15, fontSize: emToPx(1.4), fontWeight: '500' }}> {item.title || item.name}</Text>
                </View >
            </View>
            <Image style={styles.image} source={{ uri: `${IMG_BASE}${item.poster_path}` }} />
            <View style={[styles.pCircleContainer]}>
                <ProgressCircle item={{ Color: color, Progress: item.vote_average * 10 }} />
            </View>
            <View style={styles.btnContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', left: -6 }}>
                    <Image style={{ height: 22, }} source={require('../assets/images/icons/photo_btn_heart.png')} />
                    <Image style={{ height: 22, }} source={require('../assets/images/icons/photo_btn_comment.png')} />
                    <Image style={{ height: 22, }} source={require('../assets/images/icons/photo_btn_share.png')} />
                </View>
            </View>
        </View >
    )
};