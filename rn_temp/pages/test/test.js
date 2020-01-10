import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import testStyleSheet from "./test_styles";

var _styleSheet = testStyleSheet;
let Test = class Test extends Component {

  componentWillMount() {
    console.log(this.$router.params, 'ddd');
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["test"]}>
        <Text>Hello world! test</Text>
      </View>;
  }
};
Test.config = {
  navigationBarTitleText: '测试'
};
export { Test as default };