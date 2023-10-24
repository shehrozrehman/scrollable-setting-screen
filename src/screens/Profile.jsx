import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const NavigateBtn = ({ title, icon, isLastItem }) => {
    return (
        <TouchableOpacity style={[styles.TouchableBox2, isLastItem ? null : { borderBottomWidth: 0.3, borderColor: 'gray' }]}>
            <View style={styles.TouchableView}>
                <View style={styles.box2Icon}>
                    {icon}
                </View>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
            <MIcon name="arrow-forward-ios" size={16} color="#40434f" />
        </TouchableOpacity>
    )
}

const Profile = () => {

    let sozial = [
        {
            id: 1,
            icon: <Icon name="twitter" size={26} color="#13bae8" />,
            title: "folge uns ef twitter",
            navigate: "",
        },
        {
            id: 2,
            icon: <MIcon name="discord" size={26} color="#5a689c" />,
            title: "Trit unserrem discord be",
            navigate: "",
        },
    ]

    let einstellungen = [
        {
            id: 1,
            icon: <Icon name="translate" size={26} color="white" />,
            title: "sparche",
            navigate: "",
        },
        {
            id: 2,
            icon: <Icon name="theme-light-dark" size={26} color="white" />,
            title: "thema",
            navigate: "",
        },
        {
            id: 3,
            icon: <Icon name="trash-can" size={26} color="white" />,
            title: "verlauf louchen",
            navigate: "",
        },
        {
            id: 4,
            icon: <Icon name="volume-high" size={26} color="white" />,
            title: "stimme",
            navigate: "",
        },
    ]
    let untersung = [
        {
            id: 1,
            icon: <Icon name="help-circle" size={26} color="white" />,
            title: "Hilfe",
            navigate: "",
        },
        {
            id: 2,
            icon: <Icon name="reload" size={26} color="white" />,
            title: "EinKaufe",
            navigate: "",
        },
        {
            id: 3,
            icon: <Icon name="album" size={26} color="white" />,
            title: "Forden sie ene",
            navigate: "",
        },

    ]
    let um = [
        {
            id: 1,
            icon: <Icon name="star" size={26} color="white" />,
            title: "Bewerten Sie uns",
            navigate: "",
        },
        {
            id: 2,
            icon: <MIcon name="share" size={26} color="white" />,
            title: "Mit Freuden telia",
            navigate: "",
        },
        {
            id: 3,
            icon: <Icon name="note-text" size={26} color="white" />,
            title: "Nutzungbezing",
            navigate: "",
        },
        {
            id: 4,
            icon: <Icon name="security" size={26} color="white" />,
            title: "Doten schienz",
            navigate: "",
        },

    ]

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.topBtn}>
                    {/* <Image style={styles.topBtnImg} /> */}
                    <Icon name="gift" size={26} color="white" style={styles.buttonIcon} />
                    <Text style={styles.topBtnTxt}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Text>
                    <MIcon name="arrow-forward-ios" size={20} color="#40434f" />
                </TouchableOpacity>

                <View style={styles.box1}>
                    <View style={styles.subBox1}>
                        <View style={styles.boxText1}>
                            <Icon name="creation" size={20} color="white" style={styles.buttonIcon} />
                        </View>
                        <Text style={{ fontSize: 20, color: "#f7fcfa" }}>Wunchgt tko kie</Text>
                        <Icon name="information" size={24} color="#41404d" style={styles.buttonIcon} />
                        <View style={{ backgroundColor: "#f7c328", padding: 4, borderRadius: 10 }}>
                            <Icon name="bell-off" size={18} color="white" style={styles.buttonIcon} />
                        </View>
                        <View style={{ backgroundColor: "#13e8a1", borderRadius: 10, padding: 5 }}>
                            <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>Akutalizer</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 14, marginTop: 10 }}>0/10 wunshe wernedye</Text>
                </View>
                <View>

                    <Text style={styles.btnHeading}>SOZIAL</Text>
                    <View style={styles.box2} >
                        {sozial.map((e, index) => (
                            <NavigateBtn title={e.title} icon={e.icon} isLastItem={index === sozial.length - 1} key={e.id} />
                        ))}
                    </View>
                </View>
                <View>

                    <Text style={styles.btnHeading}>EINSTELLUGEN</Text>
                    <View style={styles.box2} >
                        {einstellungen.map((e, index) => (
                            <NavigateBtn title={e.title} icon={e.icon} isLastItem={index === einstellungen.length - 1} key={e.id} />
                        ))}
                    </View>
                </View>
                <View>

                    <Text style={styles.btnHeading}>UNTERSTUNZUNG</Text>
                    <View>

                        <View style={styles.box2} >
                            {untersung.map((e, index) => (
                                <NavigateBtn title={e.title} icon={e.icon} isLastItem={index === untersung.length - 1} key={e.id} />
                            ))}
                        </View>
                    </View>
                </View>
                <View>

                    <Text style={styles.btnHeading}>UM</Text>
                    <View>

                        <View style={styles.box2} >
                            {um.map((e, index) => (
                                <NavigateBtn title={e.title} icon={e.icon} isLastItem={index === um.length - 1} key={e.id} />
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.poweredBy}>
                    <Icon name="twitter" size={30} color="#13bae8" />
                    <Text style={styles.poweredTxt}>Powered By</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e0e0f',
    },
    topBtn: {
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        backgroundColor: '#1a1a26',

        borderRadius: 14,
        gap: 14,
        justifyContent: 'center',
        alignItems: 'center',

    },
    topBtnTxt: {
        flex: 1,
        textAlign: 'left',
        fontSize: 18,


    },
    box1: {
        marginTop: 20,
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    subBox1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "grey",
        paddingBottom: 15
    },
    boxText1: {
        backgroundColor: "#2b2a27",
        borderRadius: 10,
        padding: 4,
    },
    box2: {
        backgroundColor: "black",
        borderRadius: 20,
        marginHorizontal: 10,

    },
    TouchableBox2: {
        padding: 15,
        flexDirection: "row",
        alignItems: 'center'
    },
    TouchableView: {
        flexDirection: "row",
        flex: 1,
        gap: 15
    },

    btnHeading: {
        // backgroundColor: "#2b2a27",
        paddingVertical: 10,
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 2,
        marginHorizontal: 20,
        marginVertical: 10

    },
    subBox2: {
        textDecorationLine: "underline",
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
        backgroundColor: "red",
        borderBottomWidth: 0.5,  // Add this to create a bottom border
        borderBottomColor: "grey",
        paddingBottom: 15

    },
    box2Icon: {
        backgroundColor: "#2b2a27",
        borderRadius: 10,
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 20
    },

    poweredBy: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },
    poweredTxt: {
        fontSize: 20,
        color: "white",
        fontWeight: 'bold'
    },
})