import React from 'react';


class Field extends React.PureComponent {

  render() {
    const { field } = this.props;
    console.log('field render:', field.id)
    return (
      <li className="item__field">
        {field.title}
      </li>
    );
  }
}

export default Field;
