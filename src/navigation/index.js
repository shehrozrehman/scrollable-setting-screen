import { StyleSheet, Text, Image, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionic from 'react-native-vector-icons/Ionicons'

import images from '../utils/images';
import colors from '../utils/colors';

import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import SettingsScreen from '../screens/Settings'

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabNav" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TabNav" component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Tab = createBottomTabNavigator()
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 56, paddingBottom: 0,
                borderTopColor: 'transparent',
                borderTopWidth: 2,
            },
            tabBarHideOnKeyboard: true
        }}

        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, focused }) => (
                        <>

                            <View
                                style={{
                                    borderTopColor: focused ? '#01152a' : 'transparent',
                                    borderTopWidth: 2,
                                    width: '80%'
                                }}
                            />
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={{
                                    width: "100%",
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon name={focused ? "comment-multiple" : "comment-multiple-outline"} size={30} color="black" />
                            </LinearGradient>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, focused }) => (
                        <>

                            <View
                                style={{
                                    borderTopColor: focused ? '#01152a' : 'transparent',
                                    borderTopWidth: 2,
                                    width: '80%'
                                }}
                            />
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={{
                                    width: "100%",
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon name={focused ? "ballot" : "ballot-outline"} size={30} color="black" />
                            </LinearGradient>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="settings"
                component={SettingsScreen}
                options={({ route }) => ({
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, focused }) => (
                        <>

                            <View
                                style={{
                                    borderTopColor: focused ? '#01152a' : 'transparent',
                                    borderTopWidth: 2,
                                    width: '80%'
                                }}
                            />
                            <LinearGradient
                                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={{
                                    width: "100%",
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Ionic name={focused ? "settings" : "settings-outline"} size={28} color="black" />
                            </LinearGradient>
                        </>
                    ),
                })}
            />
        </Tab.Navigator>
    )
}

export default Navigation

const styles = StyleSheet.create({
    tabImage: {
        width: 22
    },
    tabTxt: {
        fontStyle: 'bold',
        fontSize: 12
    }
})