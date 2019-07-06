import React from 'react';

import ItemImmutable from '../../components/ItemImmutable';
import Name from '../../components/Name';
import { fromJS } from 'immutable';

class RegularState extends React.Component {
  constructor(props) {
    super(props)
    this.state = { state: fromJS(props.initialState) };

    this.updateState = this.updateState.bind(this)
    this.updateItemTitle = this.updateItemTitle.bind(this) 
    this.updateFieldTitle = this.updateFieldTitle.bind(this) 
  }

  updateState() {
    // console.log(this.state.set('name', "new name " + Math.random()))
    // console.log(this.state)
    this.setState({ state: this.state.state.set('name', "new name " + Math.random()) })
  }

  updateItemTitle(itemN, title) {
    this.setState({ state: this.state.state.setIn(['items', itemN, 'title'], title)})
  }

  updateFieldTitle(itemN, fieldN, title) {
    this.setState({ state: this.state.state.setIn(['items', itemN, 'fields', fieldN, 'title'], title)})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>immutablejs state</h1>
        <button onClick={this.updateState}>update state</button>
        <button onClick={() => this.updateItemTitle(0, 'new title ' + Math.random())}>update first title</button>
        <button onClick={() => this.updateFieldTitle(1, 2, 'new field ' + Math.random())}>update field title</button>
        <button onClick={() => this.setState({ state: fromJS(this.props.secondState) })}>replace state</button>
        <Name name={this.state.state.get('name')} />
        {this.state.state.get('items').map(item => (
          <ItemImmutable item={item} key={`item-${item.get('id')}`} />
        )) }
      </div>
    );
  }
}

export default RegularState;
