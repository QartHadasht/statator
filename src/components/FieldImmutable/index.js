import React from 'react';


class Field extends React.PureComponent {

  render() {
    const { field } = this.props;
    console.log('im field render:', field.get('id'))
    return (
      <li className="item__field">
        {field.get('title')}
      </li>
    );
  }
}

export default Field;
