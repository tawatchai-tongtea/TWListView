import React, { Component } from "react";
import { View, Platform } from "react-native";
import Animation from "lottie-react-native";

class LoadingMore extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: 80,
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 20
          }}
        >
          <Animation
            style={{ width: 60, height: 40, }}
            source={
              Platform.OS === "ios"
                ? require("./resource/load_more.json")
                : "load_more.json"
            }
            ref={animation => {
              if (animation != null) {
                this.animation = animation;
                console.log("Not null");
              } else {
                console.log("null");
              }
              this.animation.play();
            }}
            loop={true}
          />
        </View>
      </View>
    );
  }


}

export default LoadingMore;
