import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    mainContainer: {
        height: hp(9),
        backgroundColor: '#3a86a8',
        justifyContent: 'center',
        paddingLeft: wp('3')
    },
    headerText: {
        fontSize: hp('3'),
        color: 'white',
    }
});