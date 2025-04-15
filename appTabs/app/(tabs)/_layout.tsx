import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabsLayout(){
    return (
    <Tabs screenOptions={{tabBarActiveBackgroundColor:"yellow",tabBarActiveTintColor:"black"}} >
        <Tabs.Screen name="index" options={{title:"Home",
            tabBarIcon:({color}) => <Entypo name="home" size={24} color={color} />,
            }}/>
        <Tabs.Screen name="calculadora" options={{title:"Calculadora",
            tabBarIcon:() => <FontAwesome6 name="calculator" size={24} color="black" />,
            // href:null
        }}/>
    </Tabs>

    )
}