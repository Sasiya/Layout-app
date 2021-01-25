import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    mainContainer: {
        height: hp(8),
        borderWidth: 1,
        width: wp(50),
        backgroundColor: '#f7f7f7',
        borderColor: '#c7c7c7'
    },
    primaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: hp('2')
    }
});