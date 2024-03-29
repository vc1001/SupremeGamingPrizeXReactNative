import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Headset() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign onPress={() => navigation.navigate("Bottom")} name="arrowleft" size={34} color="black"         style={{ marginTop: 10, marginLeft: 10 }}
 />

     


      <Image style={{ width: 300, height: 400, marginLeft: 30, alignSelf: 'center', }} source={require("../assets/hed1.png")} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.detailstext}> Name :</Text>
        <Text style={styles.detailscomp1}>Boat Nirvanaa 751 ANC</Text>

      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.detailstext}>Details :</Text>
        <View>
          <Text style={styles.detailscomp1}>Wireless Headphone with 40mm</Text>
          <Text style={styles.detailscomp2}>drivers, 65 Hours (54 Hours with</Text>
          <Text style={styles.detailscomp3}>ANC), Type C, Dual Compatibility</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.pricename}>Price : </Text>
        <Image style={styles.rupee} source={require("../assets/gold.png")} />
        <Text style={styles.pricetext}> 4999 </Text>
      </View>

      <TouchableOpacity >
        <Text style={styles.input}>Place Order</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  pricename: {
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  detailstext: {
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold', alignSelf: 'center'
  },
  detailscomp1: {
    paddingLeft: 5,
    paddingTop: 8,
    marginRight: 5,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  detailscomp2: {
    paddingLeft: 5,
    paddingTop: 1,
    marginRight: 5,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  detailscomp3: {
    paddingLeft: 5,
    paddingTop: 1,
    marginRight: 5,
    fontWeight: 'bold'
  },
  rupee: {
    width: 15,
    height: 15,
    marginTop: 13,
    marginLeft: 8,

  },
  pricetext: {
    paddingLeft: 0,
    paddingTop: 7,
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    height: 45,
    width: 200,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'purple',
    color: 'white',
    fontSize: 18,
    borderRadius: 29,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlignVertical: 'center'

  },

});