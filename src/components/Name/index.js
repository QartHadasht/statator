import React from 'react'

class Name extends React.PureComponent {

  render() {
    console.log('render name')
    const { name } = this.props

    return <h3>{name}</h3>
  }
}

export default Name