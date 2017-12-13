/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import TWListView from "twlistview";


export default class App extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isLoading: false,
      dataSource: ds.cloneWithRows([])
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
       
       <TWListView
        isLoading={this.state.isLoading}
        ref={(ref) =>{
          this.TWListView = ref;
        }}
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          horizontal={false}
          style={{ flex: 1 }}
          onLoaded={() =>{

            this.setState({isLoading:true})
            setTimeout(() => {
              this.setState({isLoading:false})
              this.TWListView.stopLoading();
            }, 3000);
          }}
          renderRow={rowData => {
            return (
              <View/>
            );
          }}
        />

      </View>
    );
  }
}

