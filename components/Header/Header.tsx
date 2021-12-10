import React from 'react'
import { View, Text } from 'react-native'
import TopicPicker from '../TopicPicker'
import styles from './styles'

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Text style={styles.line1}>HeadLines</Text>
                <Text style={styles.line2}>NOW</Text>
            </View>
            <View style={styles.pickerContainer}>
                <TopicPicker />
            </View>
        </View>
    )
}

export default Header
