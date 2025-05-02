import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/styles";

export default function Forma(props) {
    return (
        <View style={styles.formaContainer}>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    source={props.image}
                    style={styles.forma}
                />
                <Text style={styles.textoCard}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}