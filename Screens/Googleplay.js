import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Googleplay() {
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
<Text style={{ marginTop: 35, textAlign: 'center', alignSelf: 'center', fontWeight: '800', marginLeft: 50, fontSize: 25, fontWeight: '800' }} >
   Googleplay Voucher
</Text>
</View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 20, width: 20, marginLeft: 14, marginTop: 14 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/9467/2e34/70fe3b32a86f6d98a230f2aa4a9a8395?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGT7gF8vB3twoz6pW9ZLsQC5dsJosarZoQxqN9abzujK-olBQ7G~I~HUZaBlhUmxEG8z3eh6WN6R8bp1WYL9i8fQ7murPfJm-9WaCPlq1LmSPPBFNhv77NceN93J-JyNTT4YygxLT03kLmohEHCIeB4gyT7lVXjohWyexjxnel~lZPHriLtjCejJE9mZXsOhj~uz-~IOF3Uesbho8yM23dpd1K4RLOKjLCd3sCGBGMDz0jlMGtCYldD~OLscuCRpkdRO7GkPOtPK0ZQfXSzSNO8G-IUB5XW4uelUWlh~i8rzxSyxAbvfcVsC5pS4KMiC2RobFRrratyKwb1hoSQuag__"}}
        />
        <Text style={{ marginTop: 17, marginLeft: 50 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 7 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$100</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>Google Play Voucher</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 20, width: 20, marginLeft: 14, marginTop: 14 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/9467/2e34/70fe3b32a86f6d98a230f2aa4a9a8395?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGT7gF8vB3twoz6pW9ZLsQC5dsJosarZoQxqN9abzujK-olBQ7G~I~HUZaBlhUmxEG8z3eh6WN6R8bp1WYL9i8fQ7murPfJm-9WaCPlq1LmSPPBFNhv77NceN93J-JyNTT4YygxLT03kLmohEHCIeB4gyT7lVXjohWyexjxnel~lZPHriLtjCejJE9mZXsOhj~uz-~IOF3Uesbho8yM23dpd1K4RLOKjLCd3sCGBGMDz0jlMGtCYldD~OLscuCRpkdRO7GkPOtPK0ZQfXSzSNO8G-IUB5XW4uelUWlh~i8rzxSyxAbvfcVsC5pS4KMiC2RobFRrratyKwb1hoSQuag__"}}
        />
        <Text style={{ marginTop: 17, marginLeft: 50 }}>1174</Text>
        <Image
         style={{ height: 40, width: 30, marginLeft: 0, marginTop: 7 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>Google play Voucher</Text>
    </View>
    </View>
 
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 20, width: 20, marginLeft: 14, marginTop: 14 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/9467/2e34/70fe3b32a86f6d98a230f2aa4a9a8395?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGT7gF8vB3twoz6pW9ZLsQC5dsJosarZoQxqN9abzujK-olBQ7G~I~HUZaBlhUmxEG8z3eh6WN6R8bp1WYL9i8fQ7murPfJm-9WaCPlq1LmSPPBFNhv77NceN93J-JyNTT4YygxLT03kLmohEHCIeB4gyT7lVXjohWyexjxnel~lZPHriLtjCejJE9mZXsOhj~uz-~IOF3Uesbho8yM23dpd1K4RLOKjLCd3sCGBGMDz0jlMGtCYldD~OLscuCRpkdRO7GkPOtPK0ZQfXSzSNO8G-IUB5XW4uelUWlh~i8rzxSyxAbvfcVsC5pS4KMiC2RobFRrratyKwb1hoSQuag__"}}
        />
        <Text style={{ marginTop: 17, marginLeft: 50 }}>1174</Text>
        <Image
         style={{ height: 40, width: 30, marginLeft: 0, marginTop: 7 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$105</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>Google play Voucher</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 20, width: 20, marginLeft: 14, marginTop: 14 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/9467/2e34/70fe3b32a86f6d98a230f2aa4a9a8395?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGT7gF8vB3twoz6pW9ZLsQC5dsJosarZoQxqN9abzujK-olBQ7G~I~HUZaBlhUmxEG8z3eh6WN6R8bp1WYL9i8fQ7murPfJm-9WaCPlq1LmSPPBFNhv77NceN93J-JyNTT4YygxLT03kLmohEHCIeB4gyT7lVXjohWyexjxnel~lZPHriLtjCejJE9mZXsOhj~uz-~IOF3Uesbho8yM23dpd1K4RLOKjLCd3sCGBGMDz0jlMGtCYldD~OLscuCRpkdRO7GkPOtPK0ZQfXSzSNO8G-IUB5XW4uelUWlh~i8rzxSyxAbvfcVsC5pS4KMiC2RobFRrratyKwb1hoSQuag__"}}
        />
        <Text style={{ marginTop: 17, marginLeft: 50 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 7 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$1000</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>Google play Voucher</Text>
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