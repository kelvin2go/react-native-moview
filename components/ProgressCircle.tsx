import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';

const emToPx = (em) => {
    return em * 16
}

const styles = StyleSheet.create({
    progressContainer: {
        margin: emToPx(0.2),
        position: 'relative',
        height: emToPx(3),
        width: emToPx(3),
        fontSize: emToPx(4),
        backgroundColor: 'transparent',
    },
    pieContainer: {
        left: 0,
        position: 'absolute',
        top: 0,
        height: `110%`,
        width: `110%`,
        backgroundColor: 'transparent',
    },
    label: {
        borderRadius: emToPx(3),
        color: '#ecf0f1',
        fontSize: emToPx(1.6),
        fontWeight: 'bold',
        position: 'absolute',
        textAlign: 'center',
        top: `${emToPx(1)}%`,
        left: `${emToPx(1)}%`,
        height: `100%`,
        width: `100%`,
        lineHeight: emToPx(2.7),
        backgroundColor: '#34495e',
        zIndex: 5,
    },
    smaller: {
        color: '#bdc3c7',
        fontSize: emToPx(0.6),
    },
})

export function ProgressCircle({ item }: { item: any }) {
    const $color = item.Color
    const $progress = item.Progress
    const circle = {
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent',
        borderRadius: emToPx(2),
        zIndex: 3,
        borderWidth: emToPx(2),
        borderStyle: `solid`,
    }
    const leftSide = {
        borderColor: $color,
        ...circle,
    }
    return (
        <View style={styles.progressContainer}>
            <Text style={styles.label}>{$progress}<Text style={styles.smaller}>%</Text></Text>
            <View style={styles.pieContainer}>
                <View style={leftSide}></View>
            </View>
        </View >
    )
}