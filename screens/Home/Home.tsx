import React, {useEffect, useRef} from 'react'
import { SafeAreaView, View, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import styles from './styles'
import Header from '../../components/Header'
import NewsComponent from '../../components/NewsComponent'
import { useRecoilState } from 'recoil'
import { currentNews } from '../../atom/currentNewsAtom'
import { globalLoading } from '../../atom/globalLoadingAtom'


const Home = () => {

    const [newsData, setNewsData] = useRecoilState<any>(currentNews)
    const [loadingState, setLoadingState] = useRecoilState(globalLoading)
    const flatListRef = useRef<any>()

    useEffect(() => {
        if(newsData.length === 0){
            return
        }
        flatListRef.current.scrollToIndex({index: 0})
    }, [newsData])

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View>
                <Header />
            </View>
            {
                loadingState ? (
                    <View style={[styles.bodyContent, {alignItems: 'center', justifyContent: 'center'}]}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                ) : (
                    <View style={[styles.bodyContent, {justifyContent: 'center'}]}>
                        <FlatList
                            ref={flatListRef} 
                            data={newsData}
                            renderItem={({item}) => (
                                <View style={styles.bodyContent}>
                                    <NewsComponent data={item}/>
                                </View>
                            )}
                            keyExtractor={(item) => item.imageUrl}
                            decelerationRate={'fast'}
                            style={{marginBottom: 50}}
                        />
                    </View>
                )
            }
        </SafeAreaView>
    )
}

export default Home
