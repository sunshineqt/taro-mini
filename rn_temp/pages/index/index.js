var _dec, _class;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Button } from "@tarojs/components-rn";
import { AtButton, AtInput, AtList, AtListItem } from 'taro-ui';

import { observer, inject } from "@tarojs/mobx-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_dec = inject('todoStore'), _dec(_class = observer(_class = class Index extends Component {
  constructor(props) {
    super(props);

    this.handleInput = val => {
      this.setState({
        val
      });
    };

    this.handleClick = () => {
      this.props.todoStore.addTodo(this.state.val);
      this.setState({
        // todos:[...this.state.todos, this.state.val],
        val: ''
      });
    };

    this.state = {
      title: '首页'
      // todos:['kk','dd','ddd']
    };
  }

  // 所有生命周期只都可以通过this.$router.params获取打开当前页面路径中的参数

  // 页面加载时触发，一个页面只会调用一次，此时页面dom尚未准备好，还不能和视图层进行交互
  componentWillMount() {}

  // 页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
  componentDidMount() {}

  // 页面卸载时触发
  componentWillUnmount() {}

  // 页面显示/切入前台时触发
  componentDidShow() {}

  // 页面隐藏/切入后台时触发
  componentDidHide() {}

  // handleInput = e => {
  //   this.setState({
  //     val:e.target.value
  //   })
  // }

  onShareAppMessage(res) {
    if (res.from === 'button') {
      console.log(res.target);
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    };
  }

  render() {
    let { todoStore } = this.props;

    return <View style={_styleSheet["index"]}>
        <Text>Hello world! you you you haha</Text>
        <View>{this.state.title}</View>
        <View style="margin-bottom:10px;">
           <AtInput placeholder="请输入" value={this.state.val} onChange={this.handleInput} />
        </View>
       
        <AtList>
           {todoStore.todos.map(v => {
          return <AtListItem title={v} key={v}></AtListItem>;
        })}
        </AtList>
        <Button onClick={this.handleClick}>添加</Button>  
        <AtButton type="primary" onClick={this.handleClick}>添加atbuttom</AtButton>
      </View>;
  }
}) || _class) || _class);
Index.config = {
  navigationBarTitleText: '首页' };


export default Index;