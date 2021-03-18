import axios from "axios";
import React ,{ useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { View,Text,TextInput,StyleSheet,Button,Image, ScrollView ,TouchableOpacity} from 'react-native';
import { Linking } from 'react-native'
import ImageUpload from '../imageUpload/index'
import styles from '../../css'

const Timeline=()=>{
  const [form, setForm] = useState();
  const [Photo,setPhoto]=useState()
 

  const createform = () => {
    
    console.log("VISIBLE")
		setForm(true);
		
		};

	
  const handleChoosePhoto=()=>{
      const options={};
      ImagePicker.launchImageLibrary(options,response=>{
          console.log('Response',response);
          if(response.uri){
           setPhoto(response)
          
          }
         
      })
  }


  const hideform = () => {
    console.log("HIDE")
    axios.post('http:192.168.100.33:4444/imageup',Photo).then((response)=>{
    // setrespo(response.data)
    console.log(response)

    })
  
		setForm(false);
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
       
        <Text></Text>
        <View style={{flex: 1, flexDirection: 'row',borderWidth:2,borderColor:'white'}}>
          <View style={styles.profile_image}  >
            <Image style={{borderColor:'white',borderWidth:3,}} source={require('../../images/timeline_img1.png')} ></Image>
            <Text style={styles.change_profile_pic}
        onPress={() => Linking.openURL('#')}>
    Change Profile Pic !
  </Text>
  <View>
  <View >
          
          
         <TouchableOpacity  >
               <Text style={styles.upload} onPress={createform}>Upload Post !</Text>
   </TouchableOpacity>
       </View>
      {form && (
                <View>
              <Text style={{backgroundColor:'blue' ,color :'white'}} onPress={handleChoosePhoto}>UPLOAD PHOTO</Text> 
              <Text style={{backgroundColor:'red',color :'white' }} onPress={hideform} >SUBMIT</Text> 
                                
        </View>
      )} 

  </View>
       </View>
       <Text></Text>
       <Text></Text>
       <Text></Text>
          <View style={{width: '60%' , height: 300, backgroundColor: '#e4e4e4'}} >
    <View style={{marginTop:40,marginLeft:20,}}><Text style={styles.div_name1}>NAME :</Text></View>
    <Text style={styles.div_name2} >Stefiney Gibbs</Text>
    <View style={{marginTop:15,marginLeft:20,}}><Text style={styles.div_name1}>SEX :</Text></View>
    <Text style={styles.div_name2} >Female</Text>
    <View style={{marginTop:15,marginLeft:20,}}><Text style={styles.div_name1}>DESCRIPTION :</Text></View>
    <Text style={{color:'black', fontSize:15 ,marginLeft:8}} >This is an example of a comment. You can create as many comments like this one
    or sub comments as you like and manage all of your content inside Account.
    </Text>
          </View>
         
          
        </View>
<Text></Text><Text></Text>
        <View style={{flex: 1, flexDirection: 'row',borderWidth:2 ,borderColor:'white' ,marginTop:-10}}>
          <View style={{width: '25%' , height: 50, backgroundColor: '#f47b13'}}  >
          <TouchableOpacity  >
                <Text style={styles.button1}>Timeline</Text>
    </TouchableOpacity>
       </View>
          <View style={{width: '25%' , height: 50, backgroundColor: '#f47b13'}} >
          <TouchableOpacity  >
                <Text style={styles.button1}>About</Text>
    </TouchableOpacity>
          </View>
          <View style={{width: '25%' , height: 50, backgroundColor: '#f47b13' }} >
          <TouchableOpacity  >
                <Text style={styles.button1}>Album</Text>
    </TouchableOpacity>
          </View>

          <View style={{width: '25%' , height: 50, backgroundColor: '#f47b13'}} >
          <TouchableOpacity  >
                <Text style={styles.button1}>My Uploads</Text>
    </TouchableOpacity>
        </View>
          
        </View>


        <View style={{marginTop:10 ,borderTopWidth:2,borderTopColor:'#f47b13' ,marginLeft:10,marginRight:10}}>

        <View style={{padding:'3%'}}>
            <View >
                <Text style={{color: '#e87818'}}>User Interface PSD Source files Web Designing for web</Text>
            </View>
            

        </View>
      

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '50%' , height: 40 }} >
          
            <Image style={{marginLeft:20}} source={require('../../images/img_6.png')} />
            <Text style={{color: 'black', marginLeft:70,marginTop:-25}}>Steve Waugh</Text>
            
       </View>
       
          <View style={{width: '50%' , height: 40, }} >
        <Text style={{marginTop:9}}>2 Jan 2019</Text><Text style={{marginLeft:120,marginTop:-18}}>3:01 pm</Text>
          </View>
         
          
        </View>
        <View>
        {/* <Image 
           source={require('../../images/lft_img.png')} /> */}
            {Photo &&(
               <Image
               source={{uri:Photo.uri}}  style={styles.image_fitt} />
                  
           )}
        </View>


        <View style={{flex: 1, flexDirection: 'row',borderWidth:2 ,borderColor:'white' ,marginTop:-10}}>
          <View style={styles.sharebtn}  >
          <TouchableOpacity  ><Image style={{marginTop:15,marginLeft:5}}
           source={require('../../images/icon_001.png')} />
                <Text style={styles.button3_share_like_flag}>Share</Text>
    </TouchableOpacity>
       </View>
          <View style={styles.flagbtn} >
          <TouchableOpacity  >
          <Image style={{marginTop:15,marginLeft:5}}
           source={require('../../images/icon_002.png')} />
                <Text style={styles.button3_share_like_flag}>Flag</Text>
    </TouchableOpacity>
          </View>
          <View style={ styles.likebtn} >
          <TouchableOpacity  >
          <Image style={{marginTop:15,marginLeft:5}}
           source={require('../../images/icon_003.png')} />
                <Text style={styles.button3_share_like_flag}> 4 Like</Text>
    </TouchableOpacity>
          </View>

          <View style={styles.commentbtn}>
          <TouchableOpacity  >
          <Image style={{marginTop:15,marginLeft:2}}
           source={require('../../images/icon_004.png')} />
                <Text style={styles.button2}>4 Comment</Text>
    </TouchableOpacity>
        </View>
          
        </View>
        </View>




        <View style={{marginTop:10 ,borderTopWidth:2,borderTopColor:'#f47b13' ,marginLeft:10,marginRight:10}}>

<View style={{padding:'3%'}}>
    <View >
        <Text style={{color: '#e87818'}}>User Interface PSD Source files Web Designing for web</Text>
    </View>
    

</View>


<View style={{flex: 1, flexDirection: 'row'}}>
  <View style={{width: '50%' , height: 40 }} >
  
    <Image style={{marginLeft:20}} source={require('../../images/img_6.png')} />
    <Text style={{color: 'black', marginLeft:70,marginTop:-25}}>Steve Waugh</Text>
    
</View>

  <View style={{width: '50%' , height: 40, }} >
<Text style={{marginTop:9}}>2 Jan 2019</Text><Text style={{marginLeft:120,marginTop:-18}}>3:01 pm</Text>
  </View>
 
  
</View>
<View>
<Image style={styles.image_fitt}
   source={require('../../images/lft_img1.png')} />
</View>


<View style={{flex: 1, flexDirection: 'row',borderWidth:2 ,borderColor:'white' ,marginTop:-10}}>
  <View style={styles.sharebtn}  >
  <TouchableOpacity  ><Image style={{marginTop:15,marginLeft:5}}
   source={require('../../images/icon_001.png')} />
        <Text style={styles.button3_share_like_flag}>Share</Text>
</TouchableOpacity>
</View>
  <View style={styles.flagbtn} >
  <TouchableOpacity  >
  <Image style={{marginTop:15,marginLeft:5}}
   source={require('../../images/icon_002.png')} />
        <Text style={styles.button3_share_like_flag}>Flag</Text>
</TouchableOpacity>
  </View>
  <View style={ styles.likebtn} >
  <TouchableOpacity  >
  <Image style={{marginTop:15,marginLeft:5}}
   source={require('../../images/icon_003.png')} />
        <Text style={styles.button3_share_like_flag}> 4 Like</Text>
</TouchableOpacity>
  </View>

  <View style={styles.commentbtn}>
  <TouchableOpacity  >
  <Image style={{marginTop:15,marginLeft:2}}
   source={require('../../images/icon_004.png')} />
        <Text style={styles.button2}>4 Comment</Text>
</TouchableOpacity>
</View>
  
</View>
</View>


{/* BOTTOM PART */}

<View style={{marginTop:10 ,borderTopWidth:2,borderTopColor:'#f47b13' ,marginLeft:10,marginRight:10}}>

<View style={{padding:'3%'}}>
    <View >
        <Text style={{color: '#e87818'}}>User Interface PSD Source files Web Designing for web</Text>
    </View>
    

</View>


<View style={{flex: 1, flexDirection: 'row'}}>
  <View style={{width: '50%' , height: 40 }} >
  
    <Image style={{marginLeft:20}} source={require('../../images/img_6.png')} />
    <Text style={{color: 'black', marginLeft:70,marginTop:-25}}>Steve Waugh</Text>
    
</View>

  <View style={{width: '50%' , height: 40, }} >
<Text style={{marginTop:9}}>2 Jan 2019</Text><Text style={{marginLeft:120,marginTop:-18}}>3:01 pm</Text>
  </View>
 
  
</View>
<View>
<Image style={styles.image_fitt}
   source={require('../../images/got.png')} />
</View>


<View style={{flex: 1, flexDirection: 'row',borderWidth:2 ,borderColor:'white' ,marginTop:-10}}>
  <View style={styles.sharebtn}  >
  <TouchableOpacity  ><Image style={{marginTop:15,marginLeft:5}}
   source={require('../../images/icon_001.png')} />
        <Text style={styles.button3_share_like_flag}>Share</Text>
</TouchableOpacity>
</View>
  <View style={styles.flagbtn} >
  <TouchableOpacity  >
  <Image style={{marginTop:15,marginLeft:5}}
   source={require('../../images/icon_002.png')} />
        <Text style={styles.button3_share_like_flag}>Flag</Text>
</TouchableOpacity>
  </View>
  <View style={ styles.likebtn} >
  <TouchableOpacity  >
  <Image style={{marginTop:15,marginLeft:5}}
   source={require('../../images/icon_003.png')} />
        <Text style={styles.button3_share_like_flag}> 4 Like</Text>
</TouchableOpacity>
  </View>

  <View style={styles.commentbtn}>
  <TouchableOpacity  >
  <Image style={{marginTop:15,marginLeft:2}}
   source={require('../../images/icon_004.png')} />
        <Text style={styles.button2}>4 Comment</Text>
</TouchableOpacity>
</View>
  
</View>
</View>


{/* footer bar */}
<View>
    <Text style={styles.textStyle} >
          Copyright © Pet-Socail 2014 All Rights Reserved
    </Text>
    <Text style={styles.footer_text}>Privacy Policy | Terms & Conditions</Text>
        <View style={styles.footer_view}>

  <Image  source={require('../../images/social_1.png')}/>
  <Image  source={require('../../images/social_2.png')}/>
  <Image  source={require('../../images/social_3.png')} />
  <Image source={require('../../images/social_4.png')} />
  
        </View>
  
</View>
        </ScrollView>
    )
}
export default Timeline;