import React from 'react'
import { View, Text, Image, Pressable, Linking } from 'react-native'
import styles from './styles'

export type NewsProps = {
    data: {
        author: string,
        content: string,
        date: string,
        imageUrl: any,
        readMoreUrl: string,
        time: string,
        title: string,
        url: string
    }
}

const NewsComponent = (props: NewsProps) => {

    const {data} = props

    return (
        <View style={styles.newsContainer}>
            <View>
                <Text style={styles.title} >{data.title}</Text>
                <Text>{data.date.substr(0, 11)}{" "}{data.time}</Text>
                <Text>{data.author}</Text>
                <Image source={{uri: data.imageUrl}} style={styles.image} />
                <Text style={styles.content} >{data.content}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => Linking.openURL(data.readMoreUrl)}>
                    <Text style={styles.buttonText}>Read More</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default NewsComponent
