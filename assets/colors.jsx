import {StyleSheet, Appearance} from 'react-native';

module.exports = ()=>{
        const colourScheme = Appearance.getColorScheme();
        //console.log("Colors current mode: ",Appearance.getColorScheme());
        let background;
        let color;
        let primary;
        let secondary;
        let accent;
        let accBox;
        let accBackground;

        if (colourScheme === "dark"){
                 background = '#000000'; //darkmode
                 color = "#f8faf5";
                 primary = "#ccdfb9";
                 secondary = "#29371b";
                 accent = "#8fb668";
                         accBox = "#334620";
                    accBackground = "#1b2806"

        }else{

           background = '#ffffff'; //light mode is here cuz accessibility page is inversed so yolo
           color = "#080a05";
            primary = "#334620";
            secondary = "#d6e4c8";
            accent = "#709749";
            accBox = "rgba(255,255,255,0.85)";
            accBackground = "#709749"
        }
        return StyleSheet.create({
                   colors: {
                       backgroundColor: background,
                       color: color,
                       primary: primary,
                       secondary: secondary,
                       accent: accent,
                       accBox: accBox,
                       accBackground: accBackground,
                   },
                   body: {
                       flex:1,
                       fontFamily: 'Nunito-Regular',
                       backgroundColor: background,
                       width: '100%',

                   },
                   main: {
                       flex: 1,
                       fontFamily: 'Nunito-Regular'
                   },
                   bar: {
                       backgroundColor:  secondary,
                       height: 50,
                       width: '100%',
                       flexDirection: 'row',
                       justifyContent: 'space-between',
                       alignItems: 'center'
                   },

                   inputContainer: {
                       width: '80%',
                       marginLeft: "10%",
                       flexDirection: 'row',
                       justifyContent: 'space-between',
                       paddingHorizontal: 5,
                       borderRadius: 10,
                       backgroundColor: primary,
                       marginBottom: 10
                   },

                   searchBar: {
                       width: '87%',
                       alignItems: 'center',
                       color: background,
                       includeFontPadding: false,
                       paddingVertical:3,
                       fontSize: 16,
                   },

                   title: {
                           fontFamily: 'PTSans-Bold',
                           fontSize: 30.24,
                           color: color
                   },

                   'bold-30-white': {
                       fontSize: 30.24,
                       fontFamily: 'Nunito-Bold',
                       color: color
                   },

                   'bold-50-white': {
                       fontSize: 53.92,
                       fontFamily: 'PTSans-Bold',
                       color: color
                   },

                   'bold-18-primary': {
                     fontSize: 18,
                     fontFamily: 'PTSans-Bold',
                     color: primary
                   },

                   'regular-18-black': {
                       fontSize: 18,
                       fontFamily: 'Nunito-Regular',
                       color: color
                   },

                   'bold-16-white': {
                         fontSize: 14,
                         fontFamily: 'PTSans-Bold',
                         color: 'white'
                   },

                   'bold-16-black': {
                       fontSize: 16,
                       fontFamily: 'Nunito-Bold',
                       color: color
                   },

                   text: {
                       fontFamily: 'Nunito-Regular',
                       fontSize: 16,
                       color: color
                   },

                   'regular-10-black': {
                       fontFamily: 'Nunito-Regular',
                       fontSize: 9.6,
                       color: color
                   },

                   'bold-40-primary': {
                       fontSize: 40.32,
                       fontFamily: 'PTSans-Bold',
                       color: primary
                   },

                   'bold-40-white': {
                       fontSize: 40.32,
                       fontFamily: 'PTSans-Bold',
                       color: color
                   },

                   'bold-20-white': {
                       fontSize: 22.72,
                       fontFamily: 'PTSans-Bold',
                       color: color
                   },

                   'bold-20-black': {
                       fontSize: 22.72,
                       fontFamily: 'PTSans-Bold',
                       color: color
                   },


                   'bold-18-white': {
                       fontSize: 17.12,
                       fontFamily: 'PTSans-Bold',
                       color: color
                   },

                   'bold-18-black': {
                       fontSize: 17.12,
                       fontFamily: 'PTSans-Bold',
                       color: color
                   },


                   'bold-16-white': {
                     fontSize: 16,
                     fontFamily: 'PTSans-Bold',
                     color: color
                   },

                   'bold-16-primary': {
                     fontSize: 16,
                     fontFamily: 'PTSans-Bold',
                     color: primary
                   },

                   'bold-16-black': {
                     fontSize: 16,
                     fontFamily: 'PTSans-Bold',
                     color: color
                   },

                   'regular-16-black': {
                     fontSize: 16,
                     fontFamily: 'Nunito-Regular',
                     color: color
                   },


                   'bold-14-black': {
                     fontSize: 12,
                     fontFamily: 'PTSans-Bold',
                     color: color
                   },


                   'bold-11-white': {
                     fontSize: 11,
                     fontFamily: 'Nunito-Bold',
                     color: color
                   },


                   'bold-11-black': {
                     fontSize: 11,
                     fontFamily: 'Nunito-Bold',
                     color: color
                   },

                   'regular-11-black': {
                     fontSize: 11,
                     fontFamily: 'Nunito-Regular',
                     color: color
                   },



               })
}