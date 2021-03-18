import axios from "axios";
import React ,{ useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View,Text,TextInput,StyleSheet,Button,Image, ScrollView ,CheckBox,TouchableOpacity} from 'react-native';
import { Linking } from 'react-native'
import styles from '../../css'


const Login=({ navigation })=>{
    const [email,setemail]=useState('')
    const [password,setpass]=useState('')
    const [respo,setrespo]=useState('')
    const  onchng=(text)=>{
        setemail(text)
        
      }
      const  onchng2=(text)=>{
   
        setpass(text)
        
        
      }
      const userdata={
       
        email,
        password
       
      }


      const onsubmit = () =>{
        console.log(userdata)
        axios.post('http:192.168.100.33:4444/Login',userdata).then((response)=>{
          setrespo(response.data)
          if(response.data=='matched'){
            navigation.navigate('Timeline')
          }else{
            setrespo(response.data)
            console.log(response.data)
          }
         
        })
      }
    

    return(
        <ScrollView>
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

        <View style={{height:'65%',width:'80%', flex:1,backgroundColor:'#f1f1f3',paddingLeft:20,paddingRight:20,marginRight:0,marginLeft:35,marginTop:10,marginBottom:10,borderRadius:10}}>
        <Text style={styles.create1}>Log In</Text><Text></Text>

          <Text style={styles.bigGreen}>Email</Text>
          <TextInput placeholder="Email"   style={styles.bigblue} onChangeText={onchng}   /><Text></Text>
          <Text style={styles.bigGreen}>Password</Text>
          <TextInput placeholder="Password"  style={styles.bigblue} onChangeText={onchng2} /><Text></Text>
         
        <View style={{}} > 
          </View>
       
    <Text>{respo}</Text>
    <TouchableOpacity onPress={onsubmit} >
                <Text style={styles.button}>SUBMIT</Text>
    </TouchableOpacity>

    {/* <Button title='submit' onPress={onsubmit } style={styles.submit}></Button> */}

    <View>
    <Text>I do not have any account yet.</Text>
    <Text style={{color: 'blue'}}
        onPress={() => navigation.navigate('Register')}>
    Create My Account Now !
  </Text>
  <Text></Text>
  
    </View>
  </View>

  <View>
      <Text style={{color: '#f47b13', fontWeight: 'bold',
      fontSize: 20}}>Welcome from PPL!{'\n'}</Text>
      <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
    <Image
          style={styles.image_fitt}
          source={require('../../images/img_9.png')}
        />
        <Text>{'\n'}</Text>
    </View>

    <View>
    <Text style={styles.textStyle} >
          Copyright © Pet-Socail 2014 All Rights Reserved
    </Text>
    <Text style={styles.footer_text}>Privacy Policy | Terms & Conditions</Text>
        <View style={styles.footer_view}>
          
  
    
         
  
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

export default Login