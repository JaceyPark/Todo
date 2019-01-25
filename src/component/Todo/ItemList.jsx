import React from 'react';
import Item from './Item';
import { connect } from 'react-redux'

class ItemList extends React.Component {
    render () {
        return (
            <div>
                {/* {Object.keys(this.props.item).map((item, i) => {
                    return (
                        <div>
                            {i}
                        {item.item}
                        </div>
                        // <Item key={i} item={item} removeItem={(targetIdx) => {this.props.removeItem(targetIdx) }}/>
                    )
                })} */}
            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list
    }
}

export default connect(mapStateToProps, undefined)(ItemList);