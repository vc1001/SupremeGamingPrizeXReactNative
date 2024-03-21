import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 
export default function Usdt() {
    const navigation = useNavigation();
    return (
 
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
 
 
                <Feather
                    onPress={() => navigation.navigate('Rewards')}
                    name="arrow-left"
                    size={34}
                    color="black"
                    style={{ marginTop: 35, marginLeft: 10 }}
                />
                <Text style={{ marginTop: 30, textAlign: 'center', alignSelf: 'center', fontWeight: '800', marginLeft: 50, fontSize: 25, fontWeight: '800' }} >
                    USDT Crypto
                </Text>
            </View>
            <View style={{ flexDirection: 'row' ,justifyContent:'center'}}>
                <View>
                    <View style={styles.offer}>
 
                        <View style={[styles.circle, { left: -10 }]}></View>
 
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ height: 30, width: 30, marginLeft: 14, marginTop: 14 }}
                                 source={{uri:"https://s3-alpha-sig.figma.com/img/3287/cff7/0c8e800227a46ead655daac8321bd504?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdUoEiuIqcrhcU79dk7Tof~coiU9OSstDloQLDIOpYmHmqP7OUnNxZ5pUK7ngi5DJat3ia9uNHgvhAcEDuSBFkU6jkimgPPShpvCWTuB2EMz6OtieSt7p3H69rQE2Vpy0ODiimB~wod4cojYKTUBDvGZ4GBFuoYXoYasqsALK79DJZgI~cJgy6UaMkQssVTVA1PRL6IAuZZbLTqef50i8IPjBTumbsGL85DoiFCEHthGci0xDPvkNGxVIgDzr59VcfyHJGtysOFQL8~L9Jijo59lidW3BStbUd1IXhj9nKYUVE4Q2QpUYGXBRlcGdQeS0gjbnDLWCg0I7pOMEd~nzg__"}}
                            />
                            <Text style={{ marginTop: 20, marginLeft: 10 }}>1000</Text>
                            <Image
                                 style={{ height: 40, width: 30, marginLeft: 0, marginTop: 10 }}
                                source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
                            />
                        </View>
 
                        <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
 
 
 
                        <View style={[styles.circle, { right: -10 }]}></View>
 
 
                    </View>
                    <Text style={{ marginTop: 20, marginHorizontal: 20, fontWeight: '800' }}>USDT Crypto</Text>
                </View>
 
                <View>
                    <View style={styles.offer}>
 
                        <View style={[styles.circle, { left: -10 }]}></View>
 
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ height: 30, width: 30, marginLeft: 14, marginTop: 14 }}
                                 source={{uri:"https://s3-alpha-sig.figma.com/img/3287/cff7/0c8e800227a46ead655daac8321bd504?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdUoEiuIqcrhcU79dk7Tof~coiU9OSstDloQLDIOpYmHmqP7OUnNxZ5pUK7ngi5DJat3ia9uNHgvhAcEDuSBFkU6jkimgPPShpvCWTuB2EMz6OtieSt7p3H69rQE2Vpy0ODiimB~wod4cojYKTUBDvGZ4GBFuoYXoYasqsALK79DJZgI~cJgy6UaMkQssVTVA1PRL6IAuZZbLTqef50i8IPjBTumbsGL85DoiFCEHthGci0xDPvkNGxVIgDzr59VcfyHJGtysOFQL8~L9Jijo59lidW3BStbUd1IXhj9nKYUVE4Q2QpUYGXBRlcGdQeS0gjbnDLWCg0I7pOMEd~nzg__"}}
                            />
                            <Text style={{ marginTop: 20, marginLeft: 10 }}>9700</Text>
                            <Image
                                 style={{ height: 40, width: 30, marginLeft: 0, marginTop: 10 }}
                                source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
                            />
                        </View>
 
                        <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
 
 
 
                        <View style={[styles.circle, { right: -10 }]}></View>
 
                    </View>
                    <Text style={{ marginTop: 20, marginHorizontal: 20 ,fontWeight:'800'}}>USDT Crypto</Text>
                </View>
            </View>
 
            <View style={{ flexDirection: 'row',justifyContent:'center' }}>
                <View>
                    <View style={styles.offer}>
 
                        <View style={[styles.circle, { left: -10 }]}></View>
 
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ height: 30, width: 30, marginLeft: 14, marginTop: 14 }}
                                source={{uri:"https://s3-alpha-sig.figma.com/img/3287/cff7/0c8e800227a46ead655daac8321bd504?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdUoEiuIqcrhcU79dk7Tof~coiU9OSstDloQLDIOpYmHmqP7OUnNxZ5pUK7ngi5DJat3ia9uNHgvhAcEDuSBFkU6jkimgPPShpvCWTuB2EMz6OtieSt7p3H69rQE2Vpy0ODiimB~wod4cojYKTUBDvGZ4GBFuoYXoYasqsALK79DJZgI~cJgy6UaMkQssVTVA1PRL6IAuZZbLTqef50i8IPjBTumbsGL85DoiFCEHthGci0xDPvkNGxVIgDzr59VcfyHJGtysOFQL8~L9Jijo59lidW3BStbUd1IXhj9nKYUVE4Q2QpUYGXBRlcGdQeS0gjbnDLWCg0I7pOMEd~nzg__"}}
                            />
                            <Text style={{ marginTop: 20, marginLeft: 10 }}>48000</Text>
                            <Image
                                style={{ height: 40, width: 30, marginLeft: 0, marginTop: 10 }}
                                 source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
                            />
                        </View>
 
                        <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
 
 
 
                        <View style={[styles.circle, { right: -10 }]}></View>
 
 
                    </View>
                    <Text style={{ marginTop: 20, marginHorizontal: 20, fontWeight: '800' }}>USDT Crypto</Text>
                </View>
 
                <View>
                    <View style={styles.offer}>
 
                        <View style={[styles.circle, { left: -10 }]}></View>
 
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{ height: 30, width: 30, marginLeft: 14, marginTop: 14 }}
                                source={{uri:"https://s3-alpha-sig.figma.com/img/3287/cff7/0c8e800227a46ead655daac8321bd504?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdUoEiuIqcrhcU79dk7Tof~coiU9OSstDloQLDIOpYmHmqP7OUnNxZ5pUK7ngi5DJat3ia9uNHgvhAcEDuSBFkU6jkimgPPShpvCWTuB2EMz6OtieSt7p3H69rQE2Vpy0ODiimB~wod4cojYKTUBDvGZ4GBFuoYXoYasqsALK79DJZgI~cJgy6UaMkQssVTVA1PRL6IAuZZbLTqef50i8IPjBTumbsGL85DoiFCEHthGci0xDPvkNGxVIgDzr59VcfyHJGtysOFQL8~L9Jijo59lidW3BStbUd1IXhj9nKYUVE4Q2QpUYGXBRlcGdQeS0gjbnDLWCg0I7pOMEd~nzg__"}}
                            />
                           
                            <Text style={{ marginTop: 20, marginLeft: 40 }}>9000</Text>
                            <Image
                                style={{ height: 40, width: 30, marginLeft: 0, marginTop: 10 }}
                                source={{uri:"https://s3-alpha-sig.figma.com/img/1bd1/701e/6ed511125e1939d1ec7e3e70d05ad643?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrIYE5pw-lL7bObD484Y2NnM~6u9~W9E6e3~vohQ~VKAS-mr9sLkwzBRf-3tqLnCJTzsAm1DWQgobJiE-fqvgxAq80DJ5VsOv181MTabv3XlCVYJraSkPsa~qzeXGPEFHXx~RVO49OBc~pyTpXz9pGirJPHE4OvpLWvJ5d-Zsevvyq5Tgf8S8gMvE-Z~qF1O0765AfS-ZJZd7LV3Vk-FmNUcTJqG7SbH4nyKAb35orngbkUxhazgyFt-7nqpABPf8a-Pw3zdmFHtqRzL~ExENiFbqmzC70HYpbkwH-GdQdeMowUslcRw7r2vMoWfSPYHqZGnBGDd5W92O8aEH828Hg__"}}
                            />
                        </View>
 
                        <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
 
 
 
                        <View style={[styles.circle, { right: -10 }]}></View>
 
                    </View>
                    <Text style={{ marginTop: 20, marginHorizontal: 20, fontWeight: '800' }}>USDT Crypto</Text>
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
        left: 1,
        margin: 10,
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