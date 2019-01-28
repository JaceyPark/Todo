import React from 'react';

const ItemPresenter = ({
  isModifyMode,
  item,
  onChange,
  onKeyDown,
}) => {
    return (
      isModifyMode === false 
      ? <span>{item}</span> 
      : (<input 
          type="text" 
          value={item} 
          onChange={onChange} 
          onKeyDown={onKeyDown}
        />)
    );
}
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModifyMode : false,
            item: props.todo.item
        }
    }
    onChange = (e) => {
        this.setState({ item: e.target.value });
    }

    onKeyDown = (e) => {
       this.props.editItem(e, this.state.item);
    }

    render () {
        return(
            <div>
                <ItemPresenter 
                  isModifyMode={this.state.isModifyMode}
                  item={this.state.item}
                  onChange={this.onChange}
                  onKeyDown={this.onKeyDown}
                />   
                <button onClick={() => { 
                    console.log(this.props.todo.idx)
                    debugger
                    this.props.removeItem(this.props.todo.idx)
                    debugger
                  }}>삭제 {this.props.todo.idx}
                </button>

                <button onClick={() => { this.setState({ isModifyMode : true })}}>편집</button>  
            </div>
        )
    }
}

export default Item;