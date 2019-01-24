import React from 'react';

class Item extends React.Component {
    render () {
        return(
            <div>{this.props.item}</div>
        )
    }
}

export default Item;