import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        marginTop: hp('2')
    },
    title: {
        fontSize: hp('2.9'), 
        marginLeft: hp('5'),
        marginTop: hp('2'),
        fontWeight: 'bold'
    },
    modalContainer: {
        width: wp('80'),
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: hp('2'),
        overflow: 'hidden',
    },
    innerContainer: {
        width: wp('75'),
    },
    imageContainer: {
        height: wp('17'),
        width: wp('17'),
        backgroundColor: 'red',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: hp('32')
    },
    mainInnerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalText: {
        fontWeight: 'bold',
        fontSize: hp('2.5')
    },
    modalText2: {
        fontSize: hp('2')
    },
    imageStyles: {
        height: hp('15'),
        width: wp('17'),
    }
    
});