import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import imagesTabbarMyIconActiveSmPng from '././images/tabbar/myIconActive-sm.png';
import imagesTabbarMyIconSmPng from '././images/tabbar/myIcon-sm.png';
import imagesTabbarIndexIconActiveSmPng from '././images/tabbar/indexIconActive-sm.png';
import imagesTabbarIndexIconSmPng from '././images/tabbar/indexIcon-sm.png';
import pagesTestTest from './pages/test/test';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";


import { Provider } from "@tarojs/mobx-rn";
import todoStore from "./store/todo";

import appStyleSheet from "./app_styles";

var _styleSheet = appStyleSheet;


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  todoStore
};

let App = class App extends Component {
  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                  
                <TCRNProvider>
                  <RootStack />
                </TCRNProvider>
                </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

};
// Taro.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// )

App.config = {
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "pink",
    navigationBarTitleText: "WeChat test",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    selectedColor: "pink",
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: imagesTabbarIndexIconSmPng,
      selectedIconPath: imagesTabbarIndexIconActiveSmPng
    }, {
      pagePath: "pages/test/test",
      text: "测试",
      iconPath: imagesTabbarMyIconSmPng,
      selectedIconPath: imagesTabbarMyIconActiveSmPng
    }]
  }
};
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/test/test', pagesTestTest]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;