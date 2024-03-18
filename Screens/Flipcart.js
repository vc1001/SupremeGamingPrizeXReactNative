import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

 
export default function Flipcart() {
  const navigation = useNavigation();
  return (
 
    <View style={{backgroundColor:'white',flex:1}}>
       <View style={{ flexDirection: 'row' }}>


<Feather
    onPress={() => navigation.navigate('Rewards')}
    name="arrow-left"
    size={34}
    color="black"
    style={{ marginTop: 35, marginLeft: 10 }}
/>
<Text style={{ marginTop: 40, textAlign: 'center', alignSelf: 'center', fontWeight: '800', marginLeft: 50, fontSize: 25, fontWeight: '800' }} >
Flipkart Voucher
</Text>
</View>
    <View style={{flexDirection:'row'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/flipkart.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 10, marginTop: 14 }}
          source={require('../assets/coinpayment.gif')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>Flipkart Voucher</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/flipkart.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/coinpayment.gif')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>Flipkart Voucher</Text>
    </View>
    </View>
 
    <View style={{flexDirection:'row'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/flipkart.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 10, marginTop: 14 }}
         
          source={require('../assets/coinpayment.gif')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>Flipkart Voucher</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/flipkart.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 14, marginTop: 14 }}
         
          source={require('../assets/coinpayment.gif')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>Flipkart Voucher</Text>
    </View>
    </View>
   
    </View>
  );
}
 
const styles = StyleSheet.create({
  offer: {
    width: 155,
    height: 150,
    top: 30,
    left: 11,
    margin:10,
    backgroundColor: '#B6D7E4',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});