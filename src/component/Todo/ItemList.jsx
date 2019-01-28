import React from 'react';
import Item from './Item';
import { connect } from 'react-redux'

class ItemList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render () {
        return (
            <div>
                {
                    Object.keys(this.props.todo_list).map((key, i) => {
                        return (
                            <Item 
                              key={i} 
                              todo={this.props.todo_list[i]} 
                              removeItem={this.props.removeItem}
                              editItem={this.props.editItem} />
                        )
                    })
                }
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