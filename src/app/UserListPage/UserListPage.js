import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';
import Header from '../../common/Header';
import MainTextInput from '../../common/MainTextInput';
import PrimaryCard from '../../common/PrimaryCard';
import PrimaryButton from '../../common/PrimaryButton';


import {actions as userActions} from '../../redux/modules/user';
import {connect} from 'react-redux';
import {userSelector} from '../../redux/selectors/userSelector';
import Modal from 'react-native-modal';


class UserListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      newSearch: '',
      modal: false
    };
  }

  componentDidMount = () => {
    this.props.getUsers();
  };

 /**
  * render user data list
  */
  renderUserList(){
    const {userData, loading} = this.props;
    const {searchText, newSearch} = this.state;

    let filtered = userData.filter(row => {
      return row.id == newSearch
    })

    return (<FlatList
    data={newSearch ==''?userData :filtered}
    refreshing={loading}
    onRefresh={() => this.props.getUsers()}
    renderItem={({item}) => (              
      <PrimaryCard onPress={()=> this.onPressButton(item.id)} id={item.id} name={item.first_name}/>
      )}
    keyExtractor={(item, index) => item.id}
    showsVerticalScrollIndicator={false}
     /> )
  }
/**
 * 
 * function to open model and run api to get user's data by ID 
 */
  onPressButton(id){   
    const {modal} = this.state;
    this.setState({modal: true}, ()=> {
      this.props.getUserById(id)
    })
  }

  

  render() {
    const {userData, userInfo, loading} = this.props;
    const {searchText, modal} = this.state;
    console.log({loading})
    return (
      <View style={styles.mainContainer}>
          <Header>User Information</Header>
          <MainTextInput onPress={()=> this.setState({newSearch:searchText})} onChangeText={(text) => this.setState({searchText: text})} placeholder={'User ID'} text={'Search'}/>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Users available</Text>
            {this.renderUserList()}
          </View> 

          {/* modal view to show user's data */}
          <Modal isVisible={modal}>
              <View style={styles.modalContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.mainInnerContainer}>
                          <View style={styles.imageContainer}>
                            <Image source={{uri: userInfo.avatar}} style={styles.imageStyles} />
                          </View>
                          <View>
                              <View style={styles.contentRow}>
                                  <Text style={styles.modalText}>First Name</Text>
                                  <Text style={styles.modalText2}>{userInfo.first_name}</Text>
                              </View>
                              <View style={styles.contentRow}>
                                  <Text style={styles.modalText}>Last Name</Text>
                                  <Text style={styles.modalText2}>{userInfo.last_name}</Text>
                              </View>
                              <View style={styles.contentRow}>
                                  <Text style={styles.modalText}>Email</Text>
                                  <Text style={styles.modalText2}>{userInfo.email}</Text>
                              </View>
                          </View>
                  </View>
                </View>
                <PrimaryButton text={'Close'} onPress={()=> this.setState({modal:!modal})}/>
                </View>
          </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: userSelector(state).userData,
  userInfo: userSelector(state).userInfo,
  loading: userSelector(state).loading,

});

const mapDispatchToProps = {
  ...userActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
