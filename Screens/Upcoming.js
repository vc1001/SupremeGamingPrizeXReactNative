import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { StyleSheet, Text, View,Image,ImageBackground, TouchableOpacity,onPress, ScrollView ,Button,handlePress} from 'react-native';
 
export default function Upcoming() {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 26, flex: 1, margin: 15 }}>
          <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row', alignContent: 'space-between',  }}>
            <AntDesign onPress={() => navigation.navigate("Bottom")} name="arrowleft" size={24} color="black" style={{ marginRight: 10, alignSelf: 'center' }} />
            <Text style={{ fontWeight: '800', fontSize: 20, color: '#F9D849', alignSelf: 'center' }}>S</Text>
            <Text style={{ fontWeight: '800', fontSize: 20, color: '#8E2CDF', alignSelf: 'center' }}>UPREME</Text>
          </View>
          <View style={{ width: 84, height: 31, borderRadius: 20, backgroundColor: '#EBD768', borderWidth: 1, borderColor: '#F9D849', alignSelf: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Image source={require('../assets/coinpayment.gif')} style={{ width: 40, height: 40, borderRadius: 99, alignSelf: 'center', flex: 0 }} />
            <Text style={{ fontWeight: '800', fontSize: 16, color: 'black', textAlign: 'center', alignSelf: 'center', flex: 1, marginRight: 10 }}>100</Text>
          </View>
        </View>
      <View style={{ backgroundColor: 'purple', width: 400, height: 60 , flexDirection:'row',marginTop:14,}}>
      <Text
      onPress={()=> navigation.navigate("Bottom")}
      style={styles.text2}>
        Winner
      </Text>
      <Text
      onPress={()=> navigation.navigate("Live")}
      style={styles.text3}>
        Live
      </Text>
      <Text style={styles.text4}>
        Upcoming
      </Text>
    </View>
   
   
         <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text6}>Win 1000</Text>
        <Text style={styles.text7}>#1856186</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text8}>Start at 8pm</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text9}>Left: 59/100</Text>
        <Text style={styles.text10}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Rectangl.png')}
        style={styles.image3}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button1} onPress={onPress}>
      <Text style={styles.text11}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2} onPress={onPress}>
      <Text style={styles.text12}>Get Free Entry</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <ImageBackground source={require('../assets/Background.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text6}>Win 1000</Text>
        <Text style={styles.text7}>#1856186</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text8}>Tomorrow</Text>
    </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text9}>Left: 59/100</Text>
        <Text style={styles.text10}>100% Failed</Text>
        </View>
        <View>
        <Image source={require('../assets/Load.png')}
        style={styles.image3}/>
       
      </View>
      <View style={{ flexDirection: 'row' }}>
       
        <TouchableOpacity style={styles.button1} onPress={onPress}>
      <Text style={styles.text11}>Check Winner</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button3} onPress={onPress}>
      <Text style={styles.text5}>Full</Text>
    </TouchableOpacity>
       
      </View>
    </ImageBackground>
    <View>
      <Text style={styles.text13}>Earn More Tickets</Text>
    </View>
    <View style={styles.container1}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={require('../assets/play.png')}
        style={styles.image5}/>
        <Text style={styles.text14}>
          Video Task
        </Text>
        <View style={styles.container3}>
        <Text style={styles.text15}>Watch</Text>
        </View>
      </View>
     
    </View>
    <View style={styles.container1}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={require('../assets/share.png')}
        style={styles.image5}/>
        <Text style={styles.text14}>
          Ref
        </Text>
        <View style={styles.container4}>
        <Text style={styles.text15}>Watch</Text>
        </View>
      </View>
     
    </View>
    <View style={styles.container1}>
      <View style={{ flexDirection: 'row' }}>
      <Image source={require('../assets/settings.png')}
        style={styles.image5}/>
        <Text style={styles.text14}>
          Task Offers
        </Text>
        <View style={styles.container3}>
        <Text style={styles.text15}>Watch</Text>
        </View>
      </View>
      
     
    </View>
    <View
      style={{margin:100,backgroundColor:'white'}}></View>
 
    {/* <View style={{ width: '100%', height: 60, flexDirection: 'row', marginTop: 20,justifyContent:'center',bottom:0,alignSelf:'baseline'}}>
          <View onPress={()=> navigation.navigate('Bottom')} style={{ marginLeft: 15, marginRight: 15,alignSelf:'baseline',alignContent:"flex-end",alignItems:'baseline',bottom:0,justifyContent:'flex-end' }}>
 
 
            <Entypo
            onPress={()=> navigation.navigate('Bottom')}
            name="game-controller" size={34} color='#75147C' />
            <Text style={{ color: '#75147C' }}>
              Home
            </Text>
          </View>
          <View
         
          style={{ marginLeft: 15, marginRight: 15 }}>
          <FontAwesome6
          onPress={()=> navigation.navigate('Referal')}
          name="gift" size={34} color="grey" />
          <Text style={{ color: "black" }}>
          Referal
            </Text>
          </View>
          <View style={{ marginLeft: 15, marginRight: 15 }}>
 
          <FontAwesome
          onPress={()=> navigation.navigate('Shop')}
          name="shopping-cart" size={34} color="grey" />
          <Text style={{ color: "black" }}>
              Shop
            </Text>
            </View>
            <View style={{ marginLeft: 15, marginRight: 15 }}>
          <MaterialIcons
          onPress={()=> navigation.navigate('Profile')}
          name="account-circle" size={34} color="grey" />
          <Text style={{ color: "black"}}>
              Profile
            </Text>
            </View>
            <View style={{ marginLeft: 15, marginRight: 15 }}>
          <FontAwesome5
          onPress={()=> navigation.navigate('Coin')}
          name="trophy" size={30} color="grey" />
          <Text style={{ color: "black" }}>
              Coins
            </Text>
            </View>
        </View> */}
 
 
   
 
</View>
 
</ScrollView>
 
);
}
 
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
 
},
container1: {
    width: 300, // Width of the View
    height: 70, // Height of the View
    borderWidth: 0.5, // Border width
    borderColor: 'black', // Border color
    borderRadius: 1, // Border radius
    marginTop:10,
    
  },
 
  container3: {
    width: 80,
    height: 25,
    borderWidth: 1,
    backgroundColor:"purple",
    borderRadius: 10,
marginTop:22,
marginLeft:39,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container4: {
    width: 80,
    height: 25,
    borderWidth: 1,
    backgroundColor:"purple",
    borderRadius: 10,
marginTop:22,
marginLeft:90,
    justifyContent: 'center',
    alignItems: 'center',
  },
text: {
fontSize: 22,
fontWeight: "bold",
color: "orange",
marginTop:40,
},
text1: {
fontSize: 22,
fontWeight: "bold",
color: "purple",
marginTop:40,
},
image: {
marginTop:40,
marginLeft:150,
 
 
},
text2: {
fontSize: 18,
fontWeight: "bold",
color: "white",
marginLeft:50,
marginTop:15,
 
 
},
text3: {
fontSize: 18,
fontWeight: "bold",
color: "white",
marginLeft:80,
marginTop:15,
 
},
text4: {
fontSize: 18,
fontWeight: "bold",
color: "white",
marginLeft:50,
color:"green",
marginTop:15,
 
},
button3: {
  backgroundColor: 'purple',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 0,
   
  marginLeft:20,
 
  width:120,
  height:30,
},
text5:{
  color:"white",
  marginLeft:42,
 
},
 
 
 
 
image1 : {
marginTop:15,
 
},
text6: {
fontSize: 15,
 
color: "black",
 
marginLeft:20,
 
 
 
 
},
background: {
flex: 1,
resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
justifyContent: 'center',
width:300,
height:203,
marginTop:20,
},
text7: {
fontSize: 15,
 
color: "black",
 
marginLeft:50,
marginBottom:4,
 
 
 
},
button: {
backgroundColor: 'white',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 10,
height:22,
marginLeft:1,
marginTop:40,
width:80,
justifyContent: 'center',
alignItems: 'center',
},
text8: {
fontSize: 11,
color: "black",
marginTop:35,
marginLeft:20,
width:80,
height:50,
},
text9:{
marginTop:20,
marginLeft:20,
},
text10:{
marginTop:20,
marginLeft:90,
},
image3:{
marginTop:20,
marginLeft:20,
marginBottom:20,
},
image4:{
 
marginLeft:30,
 
},
button1: {
backgroundColor: 'white',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 0,
borderColor: 'purple',
marginLeft:20,
marginBottom:10,
width:130,
height:30,
},
text11:{
fontSize: 15,
 
marginLeft:9,
 
},
button2: {
  backgroundColor: 'purple',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 0,
   
  marginLeft:20,
 
  width:120,
  height:30,
},
text12:{
color:"white",
marginLeft:10,
},
text13:{
  marginLeft:-130,
  fontSize: 21,
  marginTop:10,
  fontWeight:"bold"
 
},
image5:{
  marginLeft:15,
  marginTop:17,
},
text14:
{
  marginLeft:40,
  marginTop:23,
},
text15:
{
  color:"white",
 
 
 
},
})