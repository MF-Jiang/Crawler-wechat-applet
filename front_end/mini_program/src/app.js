import { Component } from 'react'
import Taro from "@tarojs/taro";
import './app.scss'


class App extends Component {

  componentDidMount () {

  }

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
