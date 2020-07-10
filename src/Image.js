import React from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';


export const HomeImages = ({source, id, fullScreen}) => {
    return (
        <View style={styles.imageBox}>
            <Pressable onPress={fullScreen.bind(this, source, id)}>
                <Image
                    style={styles.image}
                    source={{uri: source,}}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBox:{
        flexDirection: 'row',
        margin: 10,
        left: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: '80%',
    },
    image:{
        width: 400,
        maxWidth: window.innerWidth,
        height: 280,
        maxHeight: window.innerWidth,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})