import React from 'react';
import FieldImmutable from '../../components/FieldImmutable';


class ItemImmutable extends React.PureComponent {


  render() {
    const { item } = this.props;
    console.log('item render:', item.id)
    return (
      <div className="item">
        <div className="item__name">
          {item.get('title')}
        </div>
        <ul>
          {item.get('fields').map((field) => <FieldImmutable field={field} key={`field-${field.get('id')}`} />)}
        </ul>
      </div>
    );
  }
}

export default ItemImmutable;
