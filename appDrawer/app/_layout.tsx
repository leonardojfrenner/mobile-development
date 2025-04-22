import {Drawer} from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Drawer>
            <Drawer.Screen name="index" options={{
                drawerLabel: "Home", 
                title: "Página Home"
            }
            } />
            
            <Drawer.Screen name="buscacep" options={{
                drawerLabel: "Buscar CEP",
                title: "Página CEP"
            }
            } />
            </Drawer>
        </GestureHandlerRootView>
    )
}