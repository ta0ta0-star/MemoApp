import { Slot } from 'expo-router'
import React from 'react'
import { useFonts } from 'expo-font'

const Layout = (): React.JSX.Element | null => {
    const [loaded] = useFonts({
        ...require('@expo/vector-icons/FontAwesome').font,
        ...require('@expo/vector-icons/Feather').font,
    })

    if (!loaded) return null

    return <Slot />
}

export default Layout
