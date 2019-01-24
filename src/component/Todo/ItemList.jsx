import React from 'react';
import Item from './Item';
import { connect } from 'react-redux'

class ItemList extends React.Component {
    render () {
        return (
            <div>
                {this.props.item.map((item, i) => {
                    return (
                        <Item key={i} item={item} />
                    )
                })}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        item: state.todo_list
    }
}

export default connect(mapStateToProps, undefined)(ItemList);