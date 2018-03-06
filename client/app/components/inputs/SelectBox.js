import Radium from 'radium'
import React from 'react'

@Radium
class SelectBox extends React.Component {
  render() {
    const { input: { value, onChange } } = this.props

    return (
      <option value="a">aaa</option>
    )
  }
}

export default SelectBox