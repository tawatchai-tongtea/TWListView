import React, { Component } from "react";
import { View, Platform,Text } from "react-native";
import Animation from "lottie-react-native";

class EmptyView extends Component {
  render() {

    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          flex: 1
        }}
      >
        <View>
          <View style={{alignSelf:'center'}}>
          <Animation
            style={{ width: 170, height: 130,alignSelf:'center' }}
            source={
              Platform.OS === "ios"
                ? require("./resource/empty.json")
                : "empty.json"
            }
            ref={animation => {
              if (animation != null) {
                this.animation = animation;
              }
              this.animation.play();
            }}
            loop={true}
          />
          </View>
          <Text style={{fontSize:16,color:'#C3C3C3',alignSelf:'center',marginLeft:16,marginRight:16}}>{this.props.text != null && this.props.text != "" ? this.props.text : "Something wrong please try again"}</Text>
        </View>
      </View>
    );
  }
}

export default EmptyView;
