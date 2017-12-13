# TWListView
Load more listview for react native

# NPM
[![NPM](https://nodei.co/npm/twlistview.png)](https://www.npmjs.com/package/twlistview)

# Demo
![Alt Text](https://github.com/tawatchai-tongtea/TWListView/blob/master/demo/demo.gif?raw=true)

# Install
npm install twlistview --save

# Getting started

```js
import TWListView from "twlistview";

```

```js
<TWListView
        isLoading={this.state.isLoading}
        ref={(ref) =>{
          this.TWListView = ref;
        }}
        onLoaded={() =>{

            this.load();
          }}
        renderRow={rowData => {
            return (<View/>)
        }
 />
 ```
 
 # Stop loading
 ```js
 this.TWListView.stopLoading();
  ```
 
