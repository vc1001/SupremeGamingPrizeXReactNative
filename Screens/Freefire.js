import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
export default function Freefire() {
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
    FreeFire Diamonds
</Text>
</View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 30, width: 60, marginLeft: 14, marginTop: 14 }}
          source={{uri:"https://s3-alpha-sig.figma.com/img/bd8b/645d/4555917a756bb07caede25b8361e133e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBM3MU88ahtZqxLl50e9~5CvS2FsqUbw-nXcpSn5faghLVJmpvXbKZgF7mR3onQoQmO8j~AK6iY0qWJsCGfoac6tLEw2kXHh2ITLewZtGzHfkqm-cmfke8AAbGfgJdrHY8gX-O3Qri68UBhTH2bXJqlwcaNYRECSlWsOJFQG1tTRBs32k94iu1Oi6RDoAESqHNJBCwbMfKI4HLGNaNOQEkkDUyRoC9nhRhuIlGRG9dkCeB9fmJsQq2uWEEZjzltOWCZ6TN0TMBWaNVf2Shf~T00nRnBs9pq1-dVVlwKlX-DfWItntiPdZW00qDpMhYrwxXfYR-tWdqmJKvhh5FkpjA__"}}
        />
        <Text style={{ marginTop: 20, marginLeft: 20 }}>8200</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 9 }}
source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$100</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>FreeFire Diamonds</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 30, width: 60, marginLeft: 14, marginTop: 14 }}
source={{uri:"https://s3-alpha-sig.figma.com/img/bd8b/645d/4555917a756bb07caede25b8361e133e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBM3MU88ahtZqxLl50e9~5CvS2FsqUbw-nXcpSn5faghLVJmpvXbKZgF7mR3onQoQmO8j~AK6iY0qWJsCGfoac6tLEw2kXHh2ITLewZtGzHfkqm-cmfke8AAbGfgJdrHY8gX-O3Qri68UBhTH2bXJqlwcaNYRECSlWsOJFQG1tTRBs32k94iu1Oi6RDoAESqHNJBCwbMfKI4HLGNaNOQEkkDUyRoC9nhRhuIlGRG9dkCeB9fmJsQq2uWEEZjzltOWCZ6TN0TMBWaNVf2Shf~T00nRnBs9pq1-dVVlwKlX-DfWItntiPdZW00qDpMhYrwxXfYR-tWdqmJKvhh5FkpjA__"}}        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1000</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 9 }}
source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>FreeFire Diamonds</Text>
    </View>
    </View>
 
    <View style={{flexDirection:'row',justifyContent:"center"}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 30, width: 60, marginLeft: 14, marginTop: 14 }}
source={{uri:"https://s3-alpha-sig.figma.com/img/bd8b/645d/4555917a756bb07caede25b8361e133e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBM3MU88ahtZqxLl50e9~5CvS2FsqUbw-nXcpSn5faghLVJmpvXbKZgF7mR3onQoQmO8j~AK6iY0qWJsCGfoac6tLEw2kXHh2ITLewZtGzHfkqm-cmfke8AAbGfgJdrHY8gX-O3Qri68UBhTH2bXJqlwcaNYRECSlWsOJFQG1tTRBs32k94iu1Oi6RDoAESqHNJBCwbMfKI4HLGNaNOQEkkDUyRoC9nhRhuIlGRG9dkCeB9fmJsQq2uWEEZjzltOWCZ6TN0TMBWaNVf2Shf~T00nRnBs9pq1-dVVlwKlX-DfWItntiPdZW00qDpMhYrwxXfYR-tWdqmJKvhh5FkpjA__"}}        />
        <Text style={{ marginTop: 20, marginLeft: 20 }}>1500</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 9 }}
source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$150</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>FreeFire Diamonds</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 30, width: 60, marginLeft: 14, marginTop: 14 }}
source={{uri:"https://s3-alpha-sig.figma.com/img/bd8b/645d/4555917a756bb07caede25b8361e133e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XBM3MU88ahtZqxLl50e9~5CvS2FsqUbw-nXcpSn5faghLVJmpvXbKZgF7mR3onQoQmO8j~AK6iY0qWJsCGfoac6tLEw2kXHh2ITLewZtGzHfkqm-cmfke8AAbGfgJdrHY8gX-O3Qri68UBhTH2bXJqlwcaNYRECSlWsOJFQG1tTRBs32k94iu1Oi6RDoAESqHNJBCwbMfKI4HLGNaNOQEkkDUyRoC9nhRhuIlGRG9dkCeB9fmJsQq2uWEEZjzltOWCZ6TN0TMBWaNVf2Shf~T00nRnBs9pq1-dVVlwKlX-DfWItntiPdZW00qDpMhYrwxXfYR-tWdqmJKvhh5FkpjA__"}}        />
        <Text style={{ marginTop: 20, marginLeft: 20 }}>9000</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 0, marginTop: 9 }}
source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
     
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20,fontWeight:'800'}}>FreeFire Diamonds</Text>
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