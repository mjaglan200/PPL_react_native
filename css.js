import { View,Text,TextInput,StyleSheet,Button,Image, ScrollView ,CheckBox} from 'react-native';
const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius:10
  },
  
   bigGreen: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
     
     
  },
  create1:{
    color: '#f47b13',
    // paddingBottom: '10px',
    fontFamily: 'Helvetica',
    fontSize: 25
  
    // textShadow: '1px 1px 1px #fff',
    // float: 'left'
  },
  submit:{
    width: 140,
  height: 46,
  // float: left,
  borderColor:  '#c25a0f',
  fontFamily: "Helvetica Neue",
  fontWeight: 'bold',
  color: 'white',
  // text-shadow: 1px 1px 0px #000,
  fontSize: 18
  },
  headerFooterStyle: {
    width: '100%',
    height: 150,
    backgroundColor: '#f47b13',
  },
  textStyle: {
    textAlign: 'center',
    backgroundColor: '#f47b13',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
  textStyle1: {
    textAlign: 'left',
    backgroundColor: '#f47b13',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f47b13",
    padding: 10,
    color:'white',
    textAlign: 'center',
  },
  change_profile_pic:{
    color: 'black',borderWidth:2 ,
    textAlign: 'center',
    marginTop:-30,
    marginLeft:10,
    borderColor:'white'
    ,backgroundColor:'#ffffff',
    fontSize:12

  },
  profile_image:{
    width: '40%' , height: 300, backgroundColor: '#e4e4e4',paddingLeft:10,paddingTop:20,paddingBottom:20,paddingRight:20
  },
  div_name1:{
    fontSize:15,color: 'black', fontFamily: "Helvetica Neue"
  },
  div_name2:{
    fontSize:20,marginLeft:20,color: '#615a5a',fontWeight: 'bold',fontFamily: "Helvetica Neue"
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#f47b13",
    padding: 10,
    color:'white',
    textAlign: 'center',
    borderWidth:1,
    height:50
  },

  button2: {
   
    backgroundColor: "#f47b13",
    color:'white',
    // textAlign: 'center',
    marginTop:-23,marginLeft:35
   
  },

  button3_share_like_flag: {
   
    backgroundColor: "#f47b13",
    color:'white',
    // textAlign: 'center',
     marginTop:-23,
     marginLeft:45, 
    
  },

  sharebtn:{
    width: '22.5%' ,
   height: 50,
   backgroundColor: '#f47b13',
   borderRadius:10,
   borderWidth:1
},

  flagbtn:{
  width: '22.5%' ,
  height: 50,
  backgroundColor: '#f47b13',
  borderRadius:10,
  borderWidth:1 ,
  margin:1
},

  likebtn:{
  width: '25%' ,
  height: 50,
  backgroundColor: '#f47b13',
  borderRadius:10,
  borderWidth:1 ,
  margin:2
},

  commentbtn:{
  width: '30%' ,
  height: 50,
  backgroundColor: '#f47b13',
  borderRadius:10,
  borderWidth:1 ,
  margin:2
},

footer_text:{
  backgroundColor: '#f47b13',
  color: 'black',
  textAlign: 'center'
},
footer_view:{
  flex:1,
  flexDirection:'row',
  backgroundColor: '#f47b13',
  justifyContent: 'center'
},
image_fitt:{
  width: '100%',
  height: undefined,
  aspectRatio: 2,
},
upload: {
  alignItems: "center",
  backgroundColor: "#f47b13",
  padding: 10,
  color:'white',
  textAlign: 'center',
  borderWidth:1,
  height:50,
  marginTop:35,
  marginLeft:10
},



  
  });

  export default styles