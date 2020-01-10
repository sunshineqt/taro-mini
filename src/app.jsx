import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'


import './app.scss'

import 'taro-ui/dist/style/index.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/test/test'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: 'pink',
      navigationBarTitleText: 'WeChat test',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      'selectedColor':'pink',
      'list':[
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "./images/tabbar/indexIcon-sm.png",
          "selectedIconPath": "./images/tabbar/indexIconActive-sm.png"
        },
        {
          "pagePath": "pages/test/test",
          "text": "测试",
          "iconPath": "./images/tabbar/myIcon-sm.png",
          "selectedIconPath": "./images/tabbar/myIconActive-sm.png"
        },
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
