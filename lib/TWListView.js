import React, { Component } from "react";
import { ListView, View, Platform, Dimensions } from "react-native";
import EmptyView from "./EmptyView";
import LoadingMore from "./LoadingMore";

const { height } = Dimensions.get("window");

class TWListView extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoadMore: false };
  }

  render() {
    const { onLoaded, dataSource, isLoading } = this.props;
    const props = this.props;
    return (
      <ListView
        {...props}
        renderFooter={() => {
          if (this.state.isLoadMore) {
            return <LoadingMore />;
          }
        }}
        renderHeader={() => {
          if (
            dataSource.getSectionLengths() <= 0 &&
            !isLoading &&
            !this.state.isLoadMore
          ) {
            return (
              <View style={{ flex: 1, height: height - 100 }}>
                <EmptyView />
              </View>
            );
          } else if(this.props.renderHeader != null){
            return this.props.renderHeader();
          }
        }}
        onScroll={event => {
          if (this.props.onScroll != null) {
            this.props.onScroll(event);
          }

          if(onLoaded!= null){

            var scrollY =
            event.nativeEvent.contentOffset.y +
            event.nativeEvent.layoutMeasurement.height -
            event.nativeEvent.contentInset.bottom;

          if (Platform.OS === "ios") {
            if (
              scrollY > event.nativeEvent.contentSize.height + 20 &&
              event.nativeEvent.contentOffset.y > 0
            ) {
              if (!this.state.isLoadMore) {
                this.setState({
                  isLoadMore: true
                });
                
                if(onLoaded != null){

                  setTimeout(() => {
                    onLoaded();
                  }, 1000);

                }
              }
            }
          } else {
            if (
              scrollY > event.nativeEvent.contentSize.height - 50 &&
              event.nativeEvent.contentOffset.y > 0
            ) {
              if (Platform.OS === "android") {
                if (this.state.isLoadMore) {
                  this.setState({
                    isLoadMore: true
                  });
                }
              }
              if (!this.state.isLoadMore) {
                this.setState({
                  isLoadMore: true
                });
                if(onLoaded != null){

                  setTimeout(() => {
                    onLoaded();
                  }, 1000);
                  
                }
              }
            }
          }
          
          }
        }}
      />
    );
  }

  stopLoading() {
    this.setState({
      isLoadMore: false
    });
  }
}

export default TWListView;
