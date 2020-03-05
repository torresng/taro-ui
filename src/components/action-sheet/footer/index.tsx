import * as React from 'nervjs'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../../common/component'
import { AtActionSheetFooterProps } from 'types/action-sheet'

export default class AtActionSheetFooter extends AtComponent<AtActionSheetFooterProps> {
  public static defaultProps: AtActionSheetFooterProps
  public static propTypes: InferProps<AtActionSheetFooterProps>

  private handleClick = (...args: any[]): void => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  public render (): JSX.Element {
    const rootClass = classNames(
      'at-action-sheet__footer',
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.defaultProps = {
  onClick: () => {}
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
