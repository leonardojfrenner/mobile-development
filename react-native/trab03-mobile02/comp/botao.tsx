import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import {styles} from '../style/styles';

export default function Botao({ props}) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={props.link}>
                <Text style={styles.buttonText}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
}
