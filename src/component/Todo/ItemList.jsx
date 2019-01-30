import React from 'react';
import { connect } from 'react-redux'
import Item from './Item';

class ItemList extends React.Component {
    render () {
        return (
            <div>
                {
                    Object.keys(this.props.todo_list).map((key) => {
                        return (
                            <Item 
                              key={key} 
                              todo={this.props.todo_list[key]} 
                              removeItem={this.props.removeItem}
                              editItem={this.props.editItem} 
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list
    }
}

export default connect(mapStateToProps, null)(ItemList);