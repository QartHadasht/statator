import React from 'react';

import Item from '../../components/Item';
import Name from '../../components/Name';


class RegularState extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.initialState;

    this.updateState = this.updateState.bind(this)
    this.updateItemTitle = this.updateItemTitle.bind(this) 
    this.updateFieldTitle = this.updateFieldTitle.bind(this) 
  }

  updateState() {
    this.setState({
      name: "new name " + Math.random()
    })
  }

  updateItemTitle(itemN, title) {
    this.setState({
      items: [...this.state.items.map((item, index) => index === itemN ? {...item, title } : item )]
    })
  }

  updateFieldTitle(itemN, fieldN, title) {
    this.setState({
      items: [...this.state.items.map((item, index) => index === itemN ? {...item, fields: [...this.state.items[itemN].fields.map((field, indexF) => indexF === fieldN ? {...field, title} : field )] } : item )]
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>regular state</h1>
        <button onClick={this.updateState}>update state</button>
        <button onClick={() => this.updateItemTitle(0, 'new title ' + Math.random())}>update first title</button>
        <button onClick={() => this.updateFieldTitle(1, 2, 'new field ' + Math.random())}>update field title</button>
        <button onClick={() => this.setState(this.props.secondState)}>replace state</button>
        <Name name={this.state.name} />
        {this.state.items.map(item => (
          <Item item={item} key={`item-${item.id}`} />
        )) }
      </div>
    );
  }
}

export default RegularState;
