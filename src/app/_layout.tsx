import { Stack } from 'expo-router'
import React from 'react'
import { useFonts } from 'expo-font'

const Layout = (): React.JSX.Element | null => {
    const [loaded] = useFonts({
        ...require('@expo/vector-icons/FontAwesome').font,
        ...require('@expo/vector-icons/Feather').font,
    })

    if (!loaded) return null

    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#467FD3',
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
    }} />
}

export default Layout
