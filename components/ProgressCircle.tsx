import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../components/Themed';

const styles = StyleSheet.create({
    progressContainer: {
        margin: 15,
        position: 'relative',
        height: '1em',
        width: '1em',
        fontSize: '10em',
        backgroundColor: 'transparent',
    },
    pieContainer: {
        left: 0,
        position: 'absolute',
        top: 0,
        height: `100%`,
        width: `100%`,
        backgroundColor: 'transparent',
    },
    label: {
        borderRadius: '50%',
        color: '#ecf0f1',
        cursor: 'default',
        display: 'block',
        fontSize: '0.25em',
        position: 'absolute',
        textAlign: 'center',
        right: '0.4em',
        top: '0.4em',
        left: '0.4em',
        lineHeight: '2.8em',
        backgroundColor: '#34495e',
        bottom: '0.4em',
        zIndex: 5,
    },
    smaller: {
        color: '#bdc3c7',
        fontSize: '.45em',
        paddingBottom: 20,
        textVerticalAlign: 'super',
    },
    circle: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'transparent',
        borderRadius: `50%`,
        zIndex: 3,
        border: `0.1em solid`,
    }
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
        borderRadius: `50%`,
        zIndex: 3,
        border: `0.1em solid`,
    }
    const leftSide = {
        borderColor: $color,
        ...circle,
        transform: `rotate(${parseInt($progress * 36) % 10000 / 10}deg)`,
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