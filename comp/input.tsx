import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from '../style/styles';

export default function Input(props){
    return (
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType} // 'default', 'numeric', 'email-address', etc.
            />
        </View>
    )
}
