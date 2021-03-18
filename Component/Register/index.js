import 'react-native-gesture-handler';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React ,{ useState} from 'react';
import { View,Text,TextInput,StyleSheet,Button,Image, ScrollView ,CheckBox,TouchableOpacity} from 'react-native';
import { Linking } from 'react-native'
import styles from '../../css'

const Register=({ navigation })=>{
    const [email,setemail]=useState('')
const [password,setpass]=useState('')
const [fname,setfirstname]=useState('')
const [lname,setlastname]=useState('')
const [username,setusername]=useState('')
const [respo,setrespo]=useState('')
const [checkstate,setcheckstate] = useState()

const  onchng=(text)=>{
    setemail(text)
    
    
  }
  const  onchng1=(text)=>{
    
    setusername(text)
    
    
  }
  const  onchng2=(text)=>{
   
    setpass(text)
    
    
  }
  const  onchng3=(text)=>{
   
    
   
    setlastname(text)
    
  }
  const  onchng4=(text)=>{
   
    
    setfirstname(text)
   
    
  }
  
  
  const userdata={
    fname,
    lname,
    email,
    password,
    username
  }
  
  let userEmail={
    email:email,
  
  } 
  
  
  const onsubmit = () =>{
    if(!email.length){
      console.log('not')
      setrespo('email must entered')
    }
    else{
      axios.post('http:192.168.100.33:4444/Register',userdata).then((response)=>{
        setrespo(response.data)
        if(response.data=='User Successfully  Crerated'){
          navigation.navigate('Login')

        }
        else{
          console.log(('not'))
          setrespo(response.data)
        }
        
      })
    }
    console.log(userdata)
    
  }
  
  function myFunction(){
      
    axios.post('http:192.168.100.33:4444/emailcheck',userEmail).then(response =>{
      if(response.data=='found'){
        setcheckstate(true);
       
    
       console.log('user already existed')
      
      }else{
       setcheckstate(false);
        console.log(' not found')
      }
  
      
     })
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
  
     <View style={{height:'65%',width:'80%', flex:1,backgroundColor:'#b8f6',paddingLeft:20,paddingRight:20,marginRight:0,marginLeft:35,marginTop:10,marginBottom:10,borderRadius:10}}>
     <Text style={styles.create1}>Create An Account</Text><Text></Text>
         
          <Text style={styles.bigGreen}>First Name</Text>
          <TextInput placeholder="First NAME"  style={styles.bigblue} onChangeText={onchng4}   /><Text></Text>
          <Text style={styles.bigGreen}>Last Name</Text>
          <TextInput placeholder="Last NAME"  style={styles.bigblue} onChangeText={onchng3}  ></TextInput><Text></Text>
          <Text style={styles.bigGreen}>Email</Text>
          <TextInput placeholder="Email"   style={styles.bigblue} onChangeText={onchng} onEndEditing={myFunction}  /><Text></Text>
          <Text style={styles.bigGreen}>Password</Text>
          <TextInput placeholder="Password"  style={styles.bigblue} onChangeText={onchng2} /><Text></Text>
          <Text style={styles.bigGreen}>UserName</Text>
          <TextInput placeholder="User Name"  style={styles.bigblue} onChangeText={onchng1}  />
        <View style={{}} > 
         
          </View>
       
    <Text>{respo}</Text>
    
<TouchableOpacity onPress={onsubmit} >
                <Text style={styles.button}>SUBMIT</Text>
</TouchableOpacity>
    {/* <Button title='submit' onPress={onsubmit } style={styles.submit}></Button> */}
    <View>
    <Text>I Already have An Account</Text>
    <Text style={{color: 'blue'}}
       onPress={() => navigation.navigate('Login')}>
    Login My Account !
  </Text>
  <Text></Text>
  
    </View>
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

export default Register