import React from 'react';

class Item extends React.Component {
    render () {
        return(
            <div>
                {/* <span>{this.props.key}</span> */}
                {/* <button onClick={() => { this.props.removeItem (this.props.item.idx)}}>삭제</button>   */}
            </div>
        )
    }
}

export default Item;