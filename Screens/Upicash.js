import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
export default function Upicash() {
  const navigation = useNavigation();
  return (
 
    <View style={{backgroundColor:'white',flex:1}}>
        <View style={{ flexDirection: 'row',alignContent:'center', }}>
 
 
<Feather
    onPress={() => navigation.navigate('Rewards')}
    name="arrow-left"
    size={34}
    color="black"
    style={{ marginTop: 35, marginLeft: 10 }}
/>
<Text style={{ marginTop: 30, textAlign: 'center', alignSelf: 'center', fontSize: 25, fontWeight: '800' ,marginLeft:10}} >
    UPI Cash
</Text>
</View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 21.09, width: 57.86, marginLeft: 14, marginTop: 20  }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/9efd/11ee/cd7207b50e7bd7328e8ff19769329c16?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN1BV3FJ4NxWIMY1x7~eGnTj-LVmNicamAyUZ8z7qONpCgNHwla4OeismTlNtZV5E79eDgYvVBdGXupDHkFEkU~7ZyZaDpnGyaYrCZwq0HdqEAq2G5rUyGP5ZN2pcbwznbvFCa2qrRrjkn0MutMcpGq0bYcEW9L2AeNTs6Vj1IT9Ib5~LiWb5BUOAFDAYSl3dsEl5xtblhwyomZ0rhWQMFa9Rn1TUJW4M8gT46Jq4CylYYD6WL8Wol9Ti8zDsmN4IKNfgtKClLSmS-hWM9jDi8o~mjUkdn8EfOtNyTaE7-mjuxv~vrppEvN~lXYoVJ5rkYp46JuX1VcAdxBZ92RHZA__"}}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 10}}
          source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>UPI Cash</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 21.09, width: 57.86, marginLeft: 14, marginTop: 20  }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/9efd/11ee/cd7207b50e7bd7328e8ff19769329c16?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN1BV3FJ4NxWIMY1x7~eGnTj-LVmNicamAyUZ8z7qONpCgNHwla4OeismTlNtZV5E79eDgYvVBdGXupDHkFEkU~7ZyZaDpnGyaYrCZwq0HdqEAq2G5rUyGP5ZN2pcbwznbvFCa2qrRrjkn0MutMcpGq0bYcEW9L2AeNTs6Vj1IT9Ib5~LiWb5BUOAFDAYSl3dsEl5xtblhwyomZ0rhWQMFa9Rn1TUJW4M8gT46Jq4CylYYD6WL8Wol9Ti8zDsmN4IKNfgtKClLSmS-hWM9jDi8o~mjUkdn8EfOtNyTaE7-mjuxv~vrppEvN~lXYoVJ5rkYp46JuX1VcAdxBZ92RHZA__"}}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>2674</Text>
        <Image
          style={{  height: 40, width: 30, marginLeft: 0, marginTop: 11 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>UPI Cash</Text>
    </View>
    </View>
 
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{height: 21.09, width: 57.86, marginLeft: 14, marginTop: 20  }}
          source={{uri:'https://s3-alpha-sig.figma.com/img/9efd/11ee/cd7207b50e7bd7328e8ff19769329c16?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN1BV3FJ4NxWIMY1x7~eGnTj-LVmNicamAyUZ8z7qONpCgNHwla4OeismTlNtZV5E79eDgYvVBdGXupDHkFEkU~7ZyZaDpnGyaYrCZwq0HdqEAq2G5rUyGP5ZN2pcbwznbvFCa2qrRrjkn0MutMcpGq0bYcEW9L2AeNTs6Vj1IT9Ib5~LiWb5BUOAFDAYSl3dsEl5xtblhwyomZ0rhWQMFa9Rn1TUJW4M8gT46Jq4CylYYD6WL8Wol9Ti8zDsmN4IKNfgtKClLSmS-hWM9jDi8o~mjUkdn8EfOtNyTaE7-mjuxv~vrppEvN~lXYoVJ5rkYp46JuX1VcAdxBZ92RHZA__'}}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>10000</Text>
        <Image
          style={{  height: 40, width: 30, marginLeft: 0, marginTop: 11 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>UPI Cash</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 21.09, width: 57.86, marginLeft: 14, marginTop: 20 }}
          source={{uri:'https://s3-alpha-sig.figma.com/img/9efd/11ee/cd7207b50e7bd7328e8ff19769329c16?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bN1BV3FJ4NxWIMY1x7~eGnTj-LVmNicamAyUZ8z7qONpCgNHwla4OeismTlNtZV5E79eDgYvVBdGXupDHkFEkU~7ZyZaDpnGyaYrCZwq0HdqEAq2G5rUyGP5ZN2pcbwznbvFCa2qrRrjkn0MutMcpGq0bYcEW9L2AeNTs6Vj1IT9Ib5~LiWb5BUOAFDAYSl3dsEl5xtblhwyomZ0rhWQMFa9Rn1TUJW4M8gT46Jq4CylYYD6WL8Wol9Ti8zDsmN4IKNfgtKClLSmS-hWM9jDi8o~mjUkdn8EfOtNyTaE7-mjuxv~vrppEvN~lXYoVJ5rkYp46JuX1VcAdxBZ92RHZA__'}}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>25000</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 11 }}
          source={{uri:'https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__'}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>UPI Cash</Text>
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