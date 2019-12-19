import * as React from 'nervjs'
import { View } from '@tarojs/components'
import './index.scss'

export default class ThemePage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public render(): JSX.Element {
    return <View>Theme</View>
  }
}
