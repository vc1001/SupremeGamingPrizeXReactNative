import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Error from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';



export default function Register() {
  const navigation = useNavigation();
 
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState(false);
  
  const [Password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState(false);
  
  const [showpassword, setShowpassword] = useState(false);

  const isRegisterButtonEnabled =

     verifyEmail && verifyPassword ;


  
  function handleEmail(e) {
    const emailvar = e.nativeEvent.text;
    setEmail(emailvar);
    setVerifyEmail(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{3,}$/.test(emailvar)) {
      setEmail(emailvar);
      setVerifyEmail(true);
    }
  }
  
  function handlePassword(e) {
    const passwordvar = e.nativeEvent.text;
    setPassword(passwordvar);
    setVerifyPassword(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordvar)) {
      setPassword(passwordvar);
      setVerifyPassword(true);
    }
  }
 
  function handleSubmit() {
    if (isRegisterButtonEnabled) {
      navigation.navigate("Bottom");
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 124, height: 100, top: 100, alignSelf: 'center' }}
          source={require('../assets/joy.gif')}
        />
      </View>
      <View style={{ flexDirection: 'row', top: 117, alignSelf: 'center' }}>
        <Text style={{ color: '#F2A93B', fontWeight: '800', fontSize: 30 }}>
          S
        </Text>
        <Text style={{ color: 'white', fontWeight: '800', fontSize: 30 }}>
          UPREME
        </Text>
      </View>
      <Text style={{ color: 'white', fontWeight: '800', fontSize: 14, top: 117, textAlign: 'center' }}>
        Play game and earn money
      </Text>
      <View style={styles.whiteBox}>
        <View style={{
          width: 134,
          height: 43,
          backgroundColor: '#D9D9D9', borderRadius: 25, alignSelf: 'center', justifyContent: 'center', marginBottom: 10
        }}>
          <Text style={styles.registerText}>Login</Text>
        </View>


        

        <View style={styles.input}>
          <TextInput
            style={{ height: 40, width: 240, }}
            placeholder="Email"
            onChange={e => handleEmail(e)}
          />
          <View style={{ justifyContent: 'center' }}>
            {email.length < 1 ? null : verifyEmail ? (
              <AntDesign name="checkcircle" size={20} color="green" />) : (
              <Error name='error' color="red" size={20} />
            )}
          </View>
        </View>
        {email.length < 1 ? null : verifyEmail ? null : (
          <Text style={{ color: 'red', marginLeft: 80, paddingBottom: 10 }}>
            Enter Registered Email Address
          </Text>
        )}
        
        <View style={styles.input}>
          <TextInput

            style={{ height: 40, width: 240, }}
            placeholder="Enter Password"
            onChange={e => handlePassword(e)}
            secureTextEntry={!showpassword}
          />
          <TouchableOpacity onPress={() => setShowpassword(!showpassword)} style={{ justifyContent: 'center' }}
          >
            {Password.length < 1 ? null : !showpassword ? (
              <AntDesign name="eye" size={25} color={verifyPassword ? 'green' : 'red'} />
            ) : (
              <Feather name="eye-off" size={20} color={verifyPassword ? 'green' : 'red'} />
            )}

          </TouchableOpacity>
        </View>
        {Password.length < 1 ? null : verifyPassword ? null : (
          <Text style={{ color: 'red', marginLeft: 80, paddingBottom: 10 }}>
            Enter Correct Password
          </Text>
        )}

<Text
       onPress={()=> navigation.navigate("Email")}
       style={{color:'#F2A93B',marginLeft:30}}>
        Forgot Password?
       </Text>
        
       


      </View>

     
      <TouchableOpacity onPress={handleSubmit} 
      style={[styles.registerButton, { backgroundColor: isRegisterButtonEnabled ? '#D9D9D9' : '#AAAAAA' }]}
      disabled={!isRegisterButtonEnabled}
      >
        <Text style={styles.buttonText}>          Submit        </Text>
      </TouchableOpacity>
      
      <View style={{ top: 500, flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={styles.loginText}>
        Didn't Register?
        </Text>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={[styles.loginText1, { color: '#F2A93B',left:15 }]}>
          Register
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75147C',
 
    loginText: {
      left: 75,
      fontSize: 14,
      fontWeight: '800',
    },
    loginText1: {
      left: 125,
      fontSize: 14,
      fontWeight: '800',
    },
  },
  whiteBox: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    top: 420,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
   textAlign:'center',
   
 
  },
  input: {
    height: 40,
    width:287,
   backgroundColor:'#D9D9D9',
   borderRadius: 25,
    marginBottom: 12,
   paddingLeft:10,
   fontWeight:'900',
    alignSelf:'center',
    flexDirection:'row'
   
  },
  registerButton: {
    width: 134,
    height: 52,
    backgroundColor: '#D9D9D9',
    top: 484,
    alignSelf: 'center',
    alignItems:'center',
    borderRadius: 24,
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonText: {
   
    fontSize: 18,
    fontWeight: '800',
    textAlign:'center'
  },
});