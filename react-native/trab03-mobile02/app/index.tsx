import { View, Text, Animated, Easing, Image} from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import {styles} from '../style/styles';

export default function Index() {
    const translateYAnim = useRef(new Animated.Value(0)).current;

   useEffect(() => {
        const animateImage = () => {
        Animated.sequence([
            Animated.timing(translateYAnim, {
            toValue: -50,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
            }),
            Animated.timing(translateYAnim, {
            toValue: 0,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
            }),
        ]).start(); 
    };
    animateImage();

    const timer = setTimeout(() => {
        useRouter().push('/login'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [translateYAnim]); 

    return (
        <View style={styles.container}>
            <Animated.Image
            source={require('../assets/vaultboy.png')} 
            style={[
                styles.image,
                {
                    transform: [{ translateY: translateYAnim }],
                },
            ]}
            />
        </View>
    )
} 

