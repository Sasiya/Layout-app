import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
  mainContainer: {
    height: hp('16'),
    width: '93%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: hp('2'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textStyles: {
    marginTop: hp(2.5),
    fontSize: hp('3')
  }
      
});