import React,{useState} from 'react'
import {View,Text,Image,Button,TouchableOpacity} from 'react-native'
import styles from '../../css'
import * as ImagePicker from 'react-native-image-picker';
const ImageUpload=()=>{
    const [Photo,setPhoto]=useState()
   const handleChoosePhoto=()=>{
       const options={};
       ImagePicker.launchImageLibrary(options,response=>{
        //    console.log('Response',response);
           if(response.uri){
            setPhoto(response)
           }
          
       })
   }


    return(
        <View >
            {Photo &&(
                <Image
                source={{uri:Photo.uri}}  style={{width:300,height:300}} />
                   
            )}
          <TouchableOpacity  >
                <Text style={styles.upload} onPress={handleChoosePhoto}>Upload Post !</Text>
    </TouchableOpacity>
        </View>
    )
}

export default ImageUpload;