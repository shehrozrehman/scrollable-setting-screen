import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleButton from '../component/ToggleButton';

const Settings = () => {

    const [selected, setSelected] = useState(1);

    let optionsData = [
        {
            id: 1,
            text: "Unbegrenzte Vorteile"
        },
        {
            id: 2,
            text: "Betvizing determizing yo"
        },
        {
            id: 3,
            text: "Betvizing determizing yo"
        },
        {
            id: 4,
            text: "Unbegrenzte Vorteile"
        },
    ]

    const handleOptionSelect = (optionId) => {
        if (selected === optionId) {
            // Deselect the option
            setSelected(null);
        } else {
            // Select the option
            setSelected(optionId);
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} style={styles.container}>
            <View flex={1}>
                <TouchableOpacity style={styles.backBtn}>
                    <Text style={styles.backBtnTxt}>Zurück</Text>
                </TouchableOpacity>

                <Text style={styles.Heading}>Testen Sie Pros Kostenlo</Text>
                <Text style={styles.SubHeading}>ZUGRIFF BEKOMENN AUF</Text>

                {/* Options */}
                <View style={styles.Box}>
                    {optionsData.map(elem => (
                        <View key={elem.id} style={styles.BoxHead1}>
                            <Icon name="check" size={30} color="#26fa0a" style={styles.buttonIcon} />
                            <Text style={styles.BoxHeadText1}>{elem.text}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.ButtonSection}>
                <ToggleButton select={selected === 1} setSelect={() => handleOptionSelect(1)} title="3 Tage gratis, danach $7.49/woche" />
                <ToggleButton select={selected === 2} setSelect={() => handleOptionSelect(2)} title="$42/99 ses" />

                <View style={styles.BottomTextCont}>
                    <Icon name="lock" size={20} color="#9b9e9b" style={styles.buttonIcon} />
                    <Text style={styles.BottomText}>Unbegrenzte Vortei lhasd asbdasbhd abc </Text>
                </View>

                <TouchableOpacity activeOpacity={0.6} style={styles.BottomLastBtn}>
                    <View flex={0.2} />
                    <Text style={[styles.BottomLastBtnText, { flex: 1 }]}>Weitermachen</Text>
                    <View flex={0.2} alignItems="flex-end">
                        <Icon name="arrow-right" size={30} color="#40434f" />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    backBtn: {
        paddingVertical: 6,
        paddingHorizontal: 10
    },
    backBtnTxt: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700'
    },
    Heading: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    SubHeading: {
        fontSize: 17,
        color: 'grey',
        fontWeight: '900',
        paddingLeft: 10,
        marginTop: 25,
        letterSpacing: 1.5
    },
    Box: {
        backgroundColor: '#1b1d1f',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        marginTop: 10,
        gap: 15,

    },
    BoxHead1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    BoxHeadText1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"
    },
    ButtonSection: {
        gap: 10,
        paddingBottom: 20
    },

    BottomText: {
        fontSize: 18,
        fontWeight: "700",
        color: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    BottomTextCont: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    BottomLastBtn: {
        backgroundColor: '#1dbf81',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#3d453c',
        borderWidth: 1,
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        color: "black"
    },
    BottomLastBtnText: {
        fontSize: 22,
        fontWeight: "700",
        color: 'black',
        textAlign: 'center'
    },

});
