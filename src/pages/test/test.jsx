import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './test.scss'

export default class Test extends Component {

  config = {
    navigationBarTitleText: '测试'
  }

  componentWillMount () {
    console.log(this.$router.params,'ddd')
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='test'>
        <Text>Hello world! test</Text>
      </View>
    )
  }
}
