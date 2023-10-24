import React, { useState,useEffect } from 'react'

import { View, StyleSheet, Text, Animated, TouchableOpacity, ScrollView,TextInput ,Image,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Chroma from 'chroma-js';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const TOP_COLORS =  ['#9c0582', '#0e198c', '#1d155e', '#2A3BEF', '#662250', '#6b0e5e'];
const BOTTOM_COLORS = ['#0e198c', '#1d155e', '#4f0c3d', '#7F00FF', '#0e198c'];
const GRADIENT_COLOR_LENGTH = 700;
const TOP_COLORS_SPECTRUM = Chroma.scale(TOP_COLORS).colors(GRADIENT_COLOR_LENGTH);
const BOTTOM_COLORS_SPECTRUM = Chroma.scale(BOTTOM_COLORS).colors(GRADIENT_COLOR_LENGTH);
const INTERVAL = 2;

const Home = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [colorTop, setColorTop] = useState(TOP_COLORS_SPECTRUM[0]);
  const [colorBottom, setColorBottom] = useState(BOTTOM_COLORS_SPECTRUM[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newTopIndex = topIndex + 1;
      if (newTopIndex === TOP_COLORS_SPECTRUM.length) {
        newTopIndex = 0;
      }

      let newBottomIndex = bottomIndex + 1;
      if (newBottomIndex === BOTTOM_COLORS_SPECTRUM.length) {
        newBottomIndex = 0;
      }

      setTopIndex(newTopIndex);
      setBottomIndex(newBottomIndex);
      setColorTop(TOP_COLORS_SPECTRUM[newTopIndex]);
      setColorBottom(BOTTOM_COLORS_SPECTRUM[newBottomIndex]);
    }, INTERVAL);

    return () => clearInterval(interval); // Clear the interval on component unmount

  }, [topIndex, bottomIndex]);
 

 

  const handleNavigate = () => {
  
  } 
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonColor = isPressed ? 'orange' : 'red'; 
  const borderColor = isPressed ? 'orange' : 'red';
  const textColor = isPressed ? 'orange' : 'white';

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, margin: 0, padding: 0 }}
      showsVerticalScrollIndicator={false}
    >
        {/* Header */} 
        <View style={[styles.adsCont,styles.whiteBox]}> 
        <LinearGradient style={styles.adsCont} colors={[colorTop, colorBottom]}>
      <View style={styles.translucentContainer} />
   
     
        <View style={styles.rowPadding}>
          <View style={styles.header}>
            <Text style={{ color: 'white', fontSize: 28, }}>Upgrade To Pro</Text>
            <Text style={{ fontSize: 36, }}>🚀</Text>
          </View>
          <Text style={styles.headerDesc}>Lorem ipsum dolor amet consectetur adipisicing.</Text>
        </View>

        <View style={[styles.rowPadding, { marginTop: 40 }]}>
          <TouchableOpacity onPress={handleNavigate} activeOpacity={0.6} style={styles.btnContainer}>
          <View style={styles.buttonContent}>
            <Text style={styles.btnTxt}>Check it outtt</Text>

            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.rowPadding, styles.mainContainer]}>
        
        </View>
        </LinearGradient>
        </View> 
       
       
      <View style={[styles.profile,]}>
      <View style={styles.centered}>
       
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/552/552721.png' }}
        style={styles.image}
      />
   
  </View>
        
            </View>
            <View style={styles.inputSection}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='User Name '
                        placeholderTextColor="black"
                        style={styles.txtInput}
                        editable={false}
                    
                        
                    />

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnTxtProfile}>Change Email</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputSection}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        placeholderTextColor="black"
                        style={styles.txtInput} 
                        editable={false}
                    /> 

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnTxtProfile}>Change Password</Text>
                    </TouchableOpacity>                   
                    </View>
    
            <View style={styles.mainContainer}>
            <View> 

<TouchableOpacity style={styles.MoreBtn}>
<View style={styles.buttonContent}>
<Text style={styles.buttonText}>Settings</Text>
<Icon name="cog" size={24} color="white" style={styles.buttonIcon} />
</View>
</TouchableOpacity>
</View>
              
                    <View> 
                    <TouchableOpacity style={styles.MoreBtn}>
  <View style={styles.buttonContent}>
    <Text style={styles.buttonText}>Logout</Text>
    <Icon name="logout" size={24} color="white" style={styles.buttonIcon} />
  </View>
</TouchableOpacity>



</View>
  <TouchableOpacity
      activeOpacity={1}
      style={[styles.buttonDeleteContainer, {  borderColor:borderColor , borderWidth: 3, }]}
      onPress={() => console.log('Button Pressed')}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    > 
     <View style={styles.buttonContent}>
      <Text style={[styles.buttonText, { color: textColor }]}>Delete Account</Text>
    <Icon name="delete" size={24} color="white" style={[styles.buttonIcon,{ color: textColor }]} />
      </View>
    </TouchableOpacity>
     
            </View>
            <View style={styles.logoCont }  > 
            <Text style={styles.logoText } >AIX</Text>
            </View>

    </ScrollView> 
   
  );
};

const styles = StyleSheet.create({
  adsContainer: {
    flex: 1,
  },
  rowPadding: {
    paddingHorizontal: 20
  },
  
  header: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10
  },
  headerDesc: {
    color: 'white',
    textAlign: 'left'
  },
  mainContainer: {
    flex: 1,
  
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  btnContainer: {
   borderColor:"white",
    borderWidth: 2,
    backgroundColor: 'rgba(255,255,255,.8)',
    paddingVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
  
    elevation: 5,
   
    shadowOffset: { width: 0, height: 4 },
  
    shadowRadius: 1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
   
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, 
    padding: 16, 
  },
  btnTxt: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight:"bold"
  },
  adsCont: { 
    borderColor :"white",
    // padding:,
    borderRadius:15,
    border:'1px solid white'

  },whiteBox: {
    // borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    marginRight:10,
    marginLeft:10,
    marginTop:10
  }, profile: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    
    
},
whiteProfileBox :{ 
  
  borderWidth: 2,
  borderColor:"lightgray",
  
  borderRadius: 10,
  marginRight:10,
  marginLeft:10,
  marginTop:10,
  padding:20


},
profilePhoto: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    borderWidth: 2,
    backgroundColor: 'lightgray',
    borderColor: 'gray'
},
profileInfo: {
    flex: 1
},
btnTxtProfile :{
  fontSize: 18,
  color: 'white',
  textAlign: 'center',
  fontWeight:"bold"

},
infoTxt: {
    color: 'black',
    fontSize: 20,
    textDecorationLine:"underline",
    flexWrap:"wrap",
},
mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
},

// INput
inputSection: {
    gap: 10,
    marginTop: 20,
    fontSize:20,
},
txtInput: {
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
    borderColor:"lightgray",
    marginLeft:10,
    marginRight:10
   
},
btn: {
    borderRadius: 20, 
    backgroundColor:"#030824",
    alignSelf: 'center',
    marginTop:10,
    paddingHorizontal: 9,
    paddingVertical: 8,
   
},

logoText  :{
display:"flex",
justifyContent:"center",
alignItems:"center",
color:"black",
fontWeight:"bold",
fontSize:40,
},

logoCont :{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  paddingTop:30,
  marginTop:20,
  paddingBottom:30
},

optionBtn: {
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 14,   
    paddingVertical: 8
},
optionTxt: {
    color: 'black',
    fontSize: 16
},
centered: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
image: {
  width: 80, 
  height: 80,
},
MoreBtn :{
  backgroundColor:"#030824",
  height:50 ,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:10,
  marginTop:15
}, 
buttonDeleteContainer :{
  borderRadius: 30,
  padding: 10,
  backgroundColor:"#7d111b",
  alignItems: 'center',
  justifyContent: 'center',
  marginTop:50,
},
buttonText:{
  color:"white",
  fontSize:20,
  fontWeight:"bold"
},
buttonIcon: {
  marginRight: 5,
 color:"white",

},
buttonIconProfile: {
  marginRight: 5,
 color:"black",
 
},
buttonIconCont: {
  marginRight: 5,
 color:"black",
 
},
buttonContent: {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 5,
  gap:8,
},

});

export default Home;