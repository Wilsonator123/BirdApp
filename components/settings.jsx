import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pointer from '../assets/icons/pointer.svg';

import Bell from '../assets/icons/bell.svg';
import TechSupport from '../assets/icons/headphone.svg';
import Privacy from '../assets/icons/privacy.svg';
import DeleteAcc from '../assets/icons/delete.svg';
import Logout from '../assets/icons/logout.svg';
import Dot from '../assets/icons/dot.svg';

export default function App () {
const base = require("../assets/colors")();
const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 500,
    backgroundColor: base.colors.accBackground,
  },
  Smallcontainer:{
    width: 360,
    height: 450,
  borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: base.colors.accent,
  },
  dots:{
  top: -17,
  left:40,
   },
   dottitle:{
   alignSelf: "center",
   fontSize:16,
   color:base.colors.color,
   fontWeight: "bold",
   left:50,
   top: -17,
   },
 clump:{
 flexDirection:"row",
 paddingHorizontal:30,
 paddingVertical:10,
  },
  title:{
  alignSelf: "center",
  fontSize:25,
  color:base.colors.color,
  fontWeight: "bold",
  },
  type: {
    backgroundColor: base.colors.accBox,
    marginLeft:-5,
    paddingHorizontal: 5,
  },
});
  return (

    <View style={styles.container}>
            <View style={styles.type}>
                <Text style={base['bold-30-white']}>Settings</Text>
            </View>
    <View style={styles.Smallcontainer}>
      <View style={styles.caption}>
      </View>
      <TouchableOpacity>
    <View style={styles.clump}>
      <Bell height = "40" width="40" style={styles.icons}/>
      <Text style={styles.title}>Notifications</Text>
    </View>
    </TouchableOpacity>
        <View style={styles.clump}>
          <TechSupport height = "40" width="40"style={styles.icons}/>
          <Text style={styles.title}>Technical Support</Text>
        </View>
                <View style={styles.clump}>
                  <Privacy height = "40" width="40" style={styles.icons}/>
                  <Text style={styles.title}>Privacy Settings</Text>
                </View>
                                <View style={styles.clump}>
                                  <Dot height = "20" width="20" style={styles.dots}/>
                                  <Text style={styles.dottitle}>Location Tracking</Text>
                                </View>
                                <View style={styles.clump}>
                                  <Dot height = "20" width="20" style={styles.dots}/>
                                  <Text style={styles.dottitle}>Data Sharing</Text>
                                </View>
                                <View style={styles.clump}>
                                  <Dot height = "20" width="20" style={styles.dots}/>
                                  <Text style={styles.dottitle}>How we use your data</Text>
                                </View>


                <View style={styles.clump}>
                                  <DeleteAcc height = "30" width="40" style={styles.icons}/>
                                  <Text style={styles.title}>Delete Account?</Text>
                                </View>
                                        <View style={styles.clump}>
                                          <Logout height = "30" width="40" style={styles.icons}/>
                                          <Text style={styles.title}>Logout?</Text>
                                        </View>
    </View>
     </View>



  )
}

