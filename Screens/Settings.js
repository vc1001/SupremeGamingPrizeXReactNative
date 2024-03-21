import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView, Animated } from 'react-native';
 
const SettingsScreen = ({ navigation }) => {
    const [switchValues, setSwitchValues] = useState({
        receivePushMessage: false,
        personalizedMessage: false,
        globalNotification: false,
    });
 
    const switchTranslateX = useState(new Animated.Value(0))[0];
 
    const handleSwitchToggle = (key, value) => {
        setSwitchValues({ ...switchValues, [key]: value });
        Animated.timing(switchTranslateX, {
            toValue: value ? 30 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };
 
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.settingsContainer}>
                    <Text style={styles.settingText}>Notifications</Text>
                    <View style={styles.setting}>
                        <View style={styles.switchBackground}>
                            <TouchableOpacity onPress={() => console.log('Receive push message')}>
                                <Text style={styles.subSettingText}> Receive push message</Text>
                            </TouchableOpacity>
                            <Switch
                                value={switchValues.receivePushMessage}
                                onValueChange={(value) => handleSwitchToggle('receivePushMessage', value)}
                                trackColor={{ false: 'red', true: 'green' }}
                            />
                        </View>
                    </View>
                    <View style={styles.switchBackground}>
                        <TouchableOpacity onPress={() => console.log('Personalized message')}>
                            <Text style={styles.subSettingText}> Personalized message</Text>
                        </TouchableOpacity>
                        <Switch
                            value={switchValues.personalizedMessage}
                            onValueChange={(value) => handleSwitchToggle('personalizedMessage', value)}
                            trackColor={{ false: 'red', true: 'green' }}
                        />
                    </View>
                    <View style={styles.switchBackground}>
                        <TouchableOpacity onPress={() => console.log('Global notification')}>
                            <Text style={styles.subSettingText}> Global notification</Text>
                        </TouchableOpacity>
                        <Switch
                            value={switchValues.globalNotification}
                            onValueChange={(value) => handleSwitchToggle('globalNotification', value)}
                            trackColor={{ false: 'red', true: 'green' }}
                        />
                    </View>
                </View>
                <View style={styles.settingsContainer}>
            <Text style={styles.settingText}>Caching</Text>
            <View style={styles.setting}>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('CLEAR SESSION CACHE')}>
                        <Text style={styles.subSettingText}> CLEAR SESSION CACHE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => console.log('CLEAR LOGIN DATA')}>
                        <Text style={styles.subSettingText}> CLEAR LOGIN DATA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
 
        <View style={styles.settingsContainer}>
            <Text style={styles.settingText}>Other Settings</Text>
            <View style={styles.setting}>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => navigation.navigate('Country')}>
                        <Text style={styles.subSettingText}> Choose Country</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => navigation.navigate('State')}>
                        <Text style={styles.subSettingText}> Choose State</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => navigation.navigate('Language')}>
                        <Text style={styles.subSettingText}> Choose Language</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchBackground}>
                    <TouchableOpacity onPress={() => navigation.navigate('Color')}>
                        <Text style={styles.subSettingText}> Color Mode</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            </View>
        </ScrollView>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    settingsContainer: {
        padding: 20,
    },
    setting: {
        marginTop: 10,
    },
    settingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subSettingText: {
        fontSize: 16,
        padding: 5,
        backgroundColor: '#060D57',
        marginTop: 5,
        color: 'white',
    },
    switchBackground: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#060D57',
        padding: 5,
        marginTop: 5,
        position: 'relative',
    },
    switchIndicator: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        left: 5,
    },
});
 
export default SettingsScreen;
 