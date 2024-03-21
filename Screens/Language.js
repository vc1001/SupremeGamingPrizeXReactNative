import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet ,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const Language = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [hindi, setHindi] = useState(false);
    const [anglika, setAnglika] = useState(false);
    const [searchText, setSearchText] = useState('');
 
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
 
    const toggleCheckbox1 = () => {
        setHindi(!hindi);
    };
   
    const toggleCheckbox2 = () => {
        setAnglika(!anglika);
    };
    const handleSearch = () => {
        console.log("Searching for:", searchText);
    };
 
    return (
        <View style={styles.container}>
            <View style={{padding:25,backgroundColor:'#D9D9D9'}}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Choose language"
                    value={searchText}
                    onChangeText={setSearchText}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={24} color="green" />
                </TouchableOpacity>
            </View>
            </View>
            <View style={{padding:20}}>
            <TouchableOpacity style={styles.container_check} onPress={toggleCheckbox}>
                <View style={styles.checkbox}>
                    {isChecked && <Ionicons name="checkmark-circle" size={19} color="green" />}
                </View>
                <Text style={styles.label}>ANY</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.container_check} onPress={toggleCheckbox1}>
                <View style={styles.checkbox}>
                    {hindi && <Ionicons name="checkmark-circle" size={19} color="green" />}
                </View>
                <Text style={styles.label}>Hindi</Text>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles.container_check} onPress={toggleCheckbox2}>
                <View style={styles.checkbox}>
                    {anglika && <Ionicons name="checkmark-circle" size={19} color="green" />}
                </View>
                <Text style={styles.label}>Anglika</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth: 0,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor:'white'
    },
    input: {
        flex: 1,
        height: 46,
    },
    container_check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    label: {
        marginLeft: 8,
    },
});
 
export default Language;
 