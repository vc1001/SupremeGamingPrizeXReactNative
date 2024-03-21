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
  const [name, setName] = useState("");
  const [verifyName, setVerifyName] = useState(false);
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [verifyMobileNumber, setVerifyMobileNumber] = useState(false);
  const [Password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verifyConfirmPassword, setVerifyConfirmPassword] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showconfirmpassword, setShowconfirmpassword] = useState(false);

  const isRegisterButtonEnabled =

    verifyName && verifyEmail && verifyMobileNumber && verifyPassword && verifyConfirmPassword;


  function handleName(e) {
    const namevar = e.nativeEvent.text;
    setName(namevar);
    setVerifyName(false);
    if (namevar.length > 1) {
      setVerifyName(true)
    }
  }
  function handleEmail(e) {
    const emailvar = e.nativeEvent.text;
    setEmail(emailvar);
    setVerifyEmail(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{3,}$/.test(emailvar)) {
      setEmail(emailvar);
      setVerifyEmail(true);
    }
  }
  function handleMobileNumber(e) {
    const mobileNumbervar = e.nativeEvent.text;
    setMobileNumber(mobileNumbervar);
    setVerifyMobileNumber(false);
    if (/[6-9]{1}[0-9]{9}/.test(mobileNumbervar)) {
      setMobileNumber(mobileNumbervar);
      setVerifyMobileNumber(true);
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
  function handleConfirmPassword(e) {
    const confirmpasswordvar = e.nativeEvent.text;
    setConfirmPassword(confirmpasswordvar);
    setVerifyConfirmPassword(false);
    if (Password == confirmpasswordvar) {
      setVerifyConfirmPassword(true);
    }
  }
  function handleSubmit() {
    if (isRegisterButtonEnabled) {
      navigation.navigate("Login");
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
          <Text style={styles.registerText}>Register</Text>
        </View>


        <View style={styles.input}>
          <TextInput
            style={{ height: 40, width: 240, }}
            placeholder="Name"
            onChange={e => handleName(e)}
          />
          <View style={{ justifyContent: 'center' }}>
            {name.length < 1 ? null : verifyName ? (
              <AntDesign name="checkcircle" size={20} color="green" />) : (
              <Error name='error' color="red" size={20} />
            )}
          </View>
        </View>
        {name.length < 1 ? null : verifyName ? null : (
          <Text style={{ color: 'red', marginLeft: 80, paddingBottom: 10 }}>
            Name should be more than 1 characters.
          </Text>
        )}


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
          <Text style={{ color: 'red', marginLeft: 60, paddingBottom: 10 }}>
            Enter proper Email Address
          </Text>
        )}
        <View style={styles.input}>
          <TextInput
            style={{ height: 40, width: 240, }}
            placeholder="Mobile Number"
            onChange={e => handleMobileNumber(e)}
            maxLength={10}
          />
          <View style={{ justifyContent: 'center' }}>
            {mobileNumber.length < 1 ? null : verifyMobileNumber ? (
              <AntDesign name="checkcircle" size={20} color="green" />) : (
              <Error name='error' color="red" size={20} />
            )}
          </View>
        </View>
        {mobileNumber.length < 1 ? null : verifyMobileNumber ? null : (
          <Text style={{ color: 'red', marginLeft: 60, paddingBottom: 10 }}>
            Enter proper Mobile Number
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
          <Text style={{ color: 'red', marginLeft: 60, paddingBottom: 10 }}>
            Password must contain atleast one uppercase,lower case letters & special character,number
          </Text>
        )}
        {/* <View style={{justifyContent:'center'}}>
        {Password.length < 1 ? null : verifyPassword?(
          <AntDesign name="checkcircle" size={20} color="green" />        ) :(
          <Error name='error' color="red" size={20} />
        )}
        </View> */}

        <View style={styles.input}>
          <TextInput

            style={{ height: 40, width: 240, }}
            placeholder="Confirm Password"
            onChange={e => handleConfirmPassword(e)}
            secureTextEntry={!showconfirmpassword}
          />
          <TouchableOpacity onPress={() => setShowconfirmpassword(!showconfirmpassword)} style={{ justifyContent: 'center' }}
          >
            {confirmPassword.length < 1 ? null : showconfirmpassword ? (
              <Feather name="eye-off" size={20} color={verifyConfirmPassword ? 'green' : 'red'} />
            ) : (
              <AntDesign name="eye" size={25} color={verifyConfirmPassword ? 'green' : 'red'} />
            )}

          </TouchableOpacity>
        </View>
        {confirmPassword.length < 1 ? null : verifyConfirmPassword ? null : (
          <Text style={{ color: 'red', marginLeft: 60, paddingBottom: 10 }}>
            Password and Confirm Password must be same
          </Text>
        )}


      </View>

      {/* <TouchableOpacity
         onPress={()=> navigation.navigate("Login")}
        style={styles.registerButton}>
        <Text style={styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleSubmit} 
      style={[styles.registerButton, { backgroundColor: isRegisterButtonEnabled ? '#D9D9D9' : '#AAAAAA' }]}
      disabled={!isRegisterButtonEnabled}
      >
        <Text style={styles.buttonText}>          Submit        </Text>
      </TouchableOpacity>
      
      <View style={{ top: 500, flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={styles.loginText}>
          Already Registered?
        </Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={[styles.loginText1, { color: '#F2A93B' }]}>
          Login
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75147C'
  },
  loginText: {
    fontSize: 14,
    fontWeight: '800',
    alignSelf: 'flex-start',
  },
  loginText1: {
    fontSize: 14,
    fontWeight: '800',
    left: 15
  },
  whiteBox: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    top: 320,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  registerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',


  },
  input: {
    height: 40,
    flexDirection: 'row',
    width: 287,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
    marginBottom: 12,
    paddingLeft: 10,
    fontWeight: '800',
    alignSelf: 'center',

  },
  registerButton: {
    width: 134,
    height: 42,
    backgroundColor: '#D9D9D9',
    top: 504,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 24,
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonText: {

    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center'
  },
});