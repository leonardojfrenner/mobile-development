import { View, TextInput} from "react-native";
import styles from "../styles/styles";

export default function Input(props) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor="black"
                keyboardType="numeric"
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>

    )
}