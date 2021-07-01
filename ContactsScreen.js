import React from 'react'
import { View, FlatList, Text } from 'react-native'
import Contact from './components/Contact'

export default function ContactsSreen() {
    const contacts = [
        { name: "Prof Akwasi", number: "023-565-6392" },
        { name: "Yaa Obiri", number: "031-503-0263" },
        { name: "Nana Sarfo", number: "042-527-02454" },
        { name: "Kate Acheampong", number: "030-565-87409" },
        { name: "Xtreme Photos", number: "060-508-2222" },
        { name: "Philip Antwi", number: "074-575-9999" },
        { name: "Prof Akwasi", number: "023-565-6392" },
        { name: "Yaa Obiri", number: "031-503-0263" },
        { name: "Nana Sarfo", number: "042-527-02454" },
        { name: "Kate Acheampong", number: "030-565-87409" },
        { name: "Xtreme Photos", number: "060-508-2222" },
        { name: "Philip Antwi", number: "074-575-9999" },
        { name: "Prof Akwasi", number: "023-565-6392" },
        { name: "Yaa Obiri", number: "031-503-0263" },
        { name: "Nana Sarfo", number: "042-527-02454" },
        { name: "Kate Acheampong", number: "030-565-87409" },
        { name: "Xtreme Photos", number: "060-508-2222" },
        { name: "Philip Antwi", number: "074-575-9999" },
    ]



    return (
        <View>
            <FlatList
                data={contacts}
                renderItem={({ item }) => {
                    return <Contact name={item.name} phone={item.number} />

                }}
                KetExtractor={(item) => item.number}
            />

        </View>
    )
}
