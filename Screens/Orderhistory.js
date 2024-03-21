import { StyleSheet, Text, View, Image, Button, SectionList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function Orderhistory() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <Feather

                    onPress={() => navigation.navigate('Bottom')}
                    name="arrow-left"
                    size={27}
                    color="black"
                    style={{ flex: 0 }}
                />
                <Text style={styles.headtxt}>Order History</Text>

                <View style={styles.box}>
                    <Image
                        style={{ height: 30, width: 30, position: 'absolute', left: 0 }}
                        source={require('../assets/coinpayment.gif')}>

                    </Image>

                    <Text style={{ fontSize: 12, fontWeight: 'normal', marginLeft: 16, marginTop: 2 }}>100</Text>
                </View>
            </View>

            <View style={styles.box1}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/phone.png')}
                        style={styles.image}
                    />
                    <View style={{ flexDirection: 'column',flex:1,justifyContent:'center' }}>
                        <Text style={styles.text}>Apple 12 pro</Text>
                        <View style={styles.time}>
                            <Text style={styles.timetext}>Start At After 3 days</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.box1}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/hed1.png')}
                        style={styles.image}
                    />
                    <View style={{ flexDirection: 'column',flex:1,justifyContent:'center' }}>
                        <Text style={styles.text}>Headset</Text>
                        <View style={styles.time}>
                            <Text style={styles.timetext}>Start At After 4 days</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.box1}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/watch.png')}
                        style={styles.image}
                    />
                    <View style={{ flexDirection: 'column',flex:1,justifyContent:'center' }}>
                        <Text style={styles.text}>Smart watch</Text>
                        <View style={styles.time}>
                            <Text style={styles.timetext}>Start At Tomorrow</Text>
                        </View>
                    </View>
                </View>
            </View>

           

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        marginHorizontal: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginRight: 10,
        textAlign:'center'
    },
    timetext: {
        textAlign: 'center',
        marginLeft: 7,
        fontSize: 12, marginTop: 3,
        color: '#800080',
        alignSelf:'center'
    },
    time: {
        flexDirection: 'row',
        height: 25,
        width: 120,
        marginTop: 5,
        marginRight: 5,
        alignSelf:'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#800080',
        borderBlockColor: '#800080',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    box: {
        flexDirection: 'row',
        height: 30,
        width: 50,
        alignSelf: 'center',
        marginRight: 10,
        backgroundColor: '#F2F555',
        padding: 5,
        borderRadius: 10
    },
    box1: {
        height: 100,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#71F2F4',
        padding: 10,
        borderRadius: 20,
        alignContent:'center'
    },
    image: {
        width: 70,
        height: 80,
        marginRight: 10,
        backgroundColor: 'transparent',
        alignSelf:'center',
        flex:0
    },
    headtxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1
    },
});