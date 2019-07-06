import React from 'react';
import './App.css';
import RegularState from '../../components/RegularState'
import ImmutableState from '../../components/ImmutableState'

const initialState = {
      name: 'test',
      items: [
        {
          id: 1,
          title: 'first item',
          text: 'mdasda',
          quantity: 10,
          fields: [
            {
              id: 1,
              title: 'field 1 1',
            },
            {
              id: 2,
              title: 'field 1 2',
            },
            {
              id: 3,
              title: 'field 1 3',
            }                        
          ]
        },
        {
          id: 2,
          title: 'second item',
          text: 'dsgsg',
          quantity: 12,
          fields: [
            {
              id: 4,
              title: 'field 2 1',
            },
            {
              id: 5,
              title: 'field 2 2',
            },
            {
              id: 6,
              title: 'field 2 3',
            }                        
          ]          
        }        
      ]

    }


const secondState = {
      name: 'test',
      items: [
        {
          id: 1,
          title: 'first item',
          text: 'mdasda',
          quantity: 10,
          fields: [
            {
              id: 1,
              title: 'field 1 1',
            },
            {
              id: 2,
              title: 'field 1 2',
            },
            {
              id: 3,
              title: 'field 1 3',
            }                        
          ]
        },
        {
          id: 2,
          title: 'second item',
          text: 'dsgsg',
          quantity: 12,
          fields: [
            {
              id: 4,
              title: 'field 2 1',
            },
            {
              id: 5,
              title: 'field 2 2',
            },
            {
              id: 6,
              title: 'field 2 3 mutated',
            }                        
          ]          
        }        
      ]
    }

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <div className="col">
          <RegularState initialState={initialState} secondState={secondState} />
        </div>
        <div className="col">
          <ImmutableState initialState={initialState} secondState={secondState} />
        </div>
      </div>
    );
  }
}

export default App;
