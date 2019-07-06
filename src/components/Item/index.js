import React from 'react';
import Field from '../../components/Field';


class Item extends React.PureComponent {


  render() {
    const { item } = this.props;
    console.log('item render:', item.id)
    return (
      <div className="item">
        <div className="item__name">
          {item.title}
        </div>
        <ul>
          {item.fields.map((field) => <Field field={field} key={`field-${field.id}`} />)}
        </ul>
      </div>
    );
  }
}

export default Item;
