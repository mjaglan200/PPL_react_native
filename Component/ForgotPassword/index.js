import 'react-native-gesture-handler';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React ,{ useState} from 'react';
import { View,Text,TextInput,StyleSheet,Button,Image, ScrollView ,CheckBox,TouchableOpacity} from 'react-native';
import { Linking } from 'react-native'
import styles from '../../css'

const ForgotPassword=({ navigation })=>{

   
    const [num,setnum]=useState()
    const [email,setemail]=useState('')
    const [otp,setotp]=useState('')
    const [show,setshow]=useState(false)
    const [warning,setwarning]=useState("")
    const  onchng=(text)=>{
        setemail(text)
        
      }

      const mailcheck=()=>{

        let userdata={
            email:email
        }
          axios.post('http:192.168.100.33:4444/checkemail',userdata).then((response)=>{
            setshow(response.data);

            if(response.data){
                axios.post('http:192.168.100.33:4444/checkotp',userdata).then((response)=>{
                    console.log("YOUR OTP IS : ",response.data.otp)
                    setotp(response.data.otp)
                })
            }
          })
      }

      const updateotp=(text)=>{
        setnum(text)
        }

const checkotpnum=()=>{
    if(otp==num){console.log("congrats ") 
    // history.push("/Reset",{params:email})
}
    
    else{console.log("wrong otp")
    setwarning("Wrong otp")
}
}


    return(
        <ScrollView  >

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '33.33%' , height: 50, backgroundColor: '#f47b13'}}  >
            <Image source={require('../../images/logo.png')} />
       </View>
          <View style={{width: '33.33%' , height: 50, backgroundColor: '#f47b13'}} >
        
          </View>
          <View style={{width: '33.33%' , height: 50, backgroundColor: '#f47b13' }} >
          <Image style={{marginLeft:40,marginTop:10}} source={require('../../images/img_6.png')} /><Text style={{marginLeft:80,marginTop:-25}}>Me</Text>
          </View>
          
        </View>
        <View style={{height:'65%',width:'80%', flex:1,backgroundColor:'#e4e4e4',paddingLeft:20,paddingRight:20,marginRight:0,marginLeft:35,marginTop:10,marginBottom:10,borderRadius:10}}> 
        
            <Text style={styles.create1}>Forgot Password</Text>
            <Text style={styles.bigGreen}>Enter E-mail ID</Text><Text></Text>
          <TextInput placeholder="User@gmail.com"  style={styles.bigblue}  onChangeText={onchng}   /><Text></Text>
          <TouchableOpacity  >
                <Text style={styles.button} onPress={mailcheck}>SUBMIT</Text>
    </TouchableOpacity>
   <Text></Text>
   <Text></Text>
   <Text></Text>
   <Text></Text>
   <Text></Text>
   <Text></Text>
   <Text></Text>
   <Text></Text>

        </View>

  
    
    <View>
      <Text style={{color: '#f47b13', fontWeight: 'bold',
      fontSize: 20}}>Welcome from PPL!{'\n'}</Text>
      <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
    <Image
          style={{ width: '100%',
          height: undefined,
          aspectRatio: 2,}}
          source={require('../../images/img_9.png')}
        />
        <Text>{'\n'}</Text>
    </View>
      <View>
    <Text style={styles.textStyle} >
          Copyright © Pet-Socail 2014 All Rights Reserved
    </Text>
    <Text style={{ backgroundColor: '#f47b13',color: 'black', textAlign: 'center'}}>Privacy Policy | Terms & Conditions</Text>
        <View style={{flex:1,flexDirection:'row', backgroundColor: '#f47b13',justifyContent: 'center'}}>
          
  
    
         
  
  <Image 
         
          source={require('../../images/social_1.png')}
         
  
        />
  <Image 
         
          
          source={require('../../images/social_2.png')}
  
        />
  
  <Image
          
          
          source={require('../../images/social_3.png')}
  
        />
  
  <Image
          
          
          source={require('../../images/social_4.png')}
  
        />
  
        </View>
  
        </View>
        </ScrollView>
    )

}

export default ForgotPassword