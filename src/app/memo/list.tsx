import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): React.JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
    })
    }, [])
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy('updatedAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            snapshot.forEach((doc) => {
                console.log('memo', doc.data())
            })
        })
        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <MemoListItem />
                    <MemoListItem />
                    <MemoListItem />
                </View>
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor :'#ffffff'
    },
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8
    },
    circleButtonLabel: {
        color: "#ffffff",
        fontSize: 40,
    },
})

export default List
