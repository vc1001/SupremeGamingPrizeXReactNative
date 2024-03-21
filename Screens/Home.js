import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ImageBackground, TouchableOpacity,onPress, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.container}>
    <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            marginTop: 26,
            flex: 1,
            margin: 15,

          }}>
          <View
          style={{flex:1,alignSelf:'center',flexDirection: 'row',
            }}>
         
         
          <Text
            style={{
              fontWeight: '800',
              fontSize: 20,
              color: '#F9D849',
              alignSelf: 'center',
            }}>
            S
          </Text>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 20,
              color: '#8E2CDF',
              alignSelf: 'center',
            }}>
            UPREME
          </Text>
          </View>
          <View
            style={{
              width:84,
              height:31,
              borderRadius:20,
              backgroundColor:'#EBD768',
              borderWidth:1,
              borderColor:'#F9D849',
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection:'row',
            }}>
           
           <Image
                  source={require('../assets/coinpayment.gif')}
                  style={{ width: 40, height: 40, borderRadius: 99,alignSelf:'center',flex:0 }}></Image>
                 <Text
              style={{
                fontWeight: '800',
                fontSize: 16,
                color: 'black',
                textAlign: 'center',
                alignSelf: 'center',
                flex:1,
                marginRight:10
              }}>
              100
            </Text>
           
             
            </View>
          </View>
      <View style={{ backgroundColor: 'purple', width: 400, height: 60 , flexDirection:'row',marginTop:14,}}>
      <Text style={styles.text2}>
        Winner
      </Text>
      <Text
       onPress={()=> navigation.navigate("Live")}
      style={styles.text3}>
        Live
      </Text>
      <Text
      onPress={()=> navigation.navigate("Upcoming")}
      style={styles.text4}>
        Upcoming
      </Text>
    </View>
   
   
    <ImageBackground source={require('../assets/bgm.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
       
        <Image source={require('../assets/menimage.png')}
        style={styles.image1}/>
        <View>
        <Text style={styles.text5}>1.Namer</Text>
        <Text style={styles.text6}>
  Ticket id: #2345678
  </Text>
  </View>
  <View >
    <Text style={styles.text7}>Product Won</Text>
    <Image source={require('../assets/phone.png')}
        style={styles.image2}/>
       
  </View>
  <Text style={styles.text8}>The phone comes with a 3.50-inch display offering a resolution of 320x480 pixels. Apple iPhone is powered by a 412 MHz one-core processor. It comes with 128MB of RAM.</Text>
 
 
   
 
</View>
 
 
 
</ImageBackground>
<ImageBackground source={require('../assets/bgm.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
       
        <Image source={require('../assets/menimage.png')}
        style={styles.image1}/>
        <View>
        <Text style={styles.text5}>2.Ashok</Text>
        <Text style={styles.text6}>
  Ticket id: #2345678
  </Text>
  </View>
  <View >
    <Text style={styles.text7}>Product Won</Text>
    <Image source={require('../assets/headphone.png')}
        style={styles.image2}/>
       
  </View>
  <Text style={styles.text8}>The phone comes with a 3.50-inch display offering a resolution of 320x480 pixels. Apple iPhone is powered by a 412 MHz one-core processor. It comes with 128MB of RAM.</Text>
 
 
   
 
</View>
 
 
 
</ImageBackground>
<ImageBackground source={require('../assets/bgm.png')} style={styles.background}>
     
      <View style={{ flexDirection: 'row' }}>
       
        <Image source={require('../assets/menimage.png')}
        style={styles.image1}/>
        <View>
        <Text style={styles.text5}>3.Krishna</Text>
        <Text style={styles.text6}>
  Ticket id: #2345678
  </Text>
  </View>
  <View >
    <Text style={styles.text7}>Product Won</Text>
    <Image source={require('../assets/watch.png')}
        style={styles.image2}/>
       
  </View>
  <Text style={styles.text8}>The phone comes with a 3.50-inch display offering a resolution of 320x480 pixels. Apple iPhone is powered by a 412 MHz one-core processor. It comes with 128MB of RAM.</Text>
 
 
   
 
</View>
 
 
 
 
</ImageBackground>
   
 
<View style={{height:30}}>
 
</View>
 
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
  color:"green",
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
 marginTop:15,
 
},
background: {
 
  resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
  justifyContent: 'center',
  width:300,
  height:240,
  marginTop:20,
},
image1:{
 
  marginLeft:17,
  marginBottom:110,
 
},
text5: {
  fontSize: 15,
  fontWeight: "bold",
 
  marginLeft:10,
  marginTop:10,
 
 
},
text6: {
  fontSize: 15,
  fontWeight: "bold",
 
  marginLeft:10,
 
 
 
},
text7: {
  fontSize: 13,
  fontWeight: "bold",
  marginLeft:-220,
 
  marginTop:90,
 
 
 
},
image2:{
 
  marginLeft:-235,
 
 
},
text8:{
  marginTop:110,
  marginLeft:-135,
  width:182,
  fontSize: 12,
 
}
 
 
})