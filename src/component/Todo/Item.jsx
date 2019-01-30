import React from 'react';

const ItemPresenter = ({
  isModifyMode,
  todo,
  onChange,
  onSubmit,
}) => {
    return (
      isModifyMode === false 
      ? <span>{todo.item}</span> 
      : (<form 
            onSubmit={onSubmit}>
          <input 
          type="text" 
          value={todo.item} 
          onChange={(e) => onChange(e)} 
        />
        </form>)
    );
}
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModifyMode : false,
            todo: props.todo,
        }
    }
    onChangeHandler = (e) => {
        e.persist();
        
        this.setState(prevState => ({
            todo: {
                ...prevState.todo,
                item: e.target.value,
            }
        }))
    }

    onSubmitHandler = (e) => {
        this.setCurrentModifyMode(null, () => this.props.editItem(this.state.todo));
    }

    setCurrentModifyMode = (e, cb = () => {}) => {
        this.setState(prevState => ({
            ...prevState,
            isModifyMode: !prevState.isModifyMode,
        }), cb);
    }

    render () {
        return(
            <div>
                <ItemPresenter 
                  isModifyMode={this.state.isModifyMode}
                  todo={this.state.todo}
                  onChange={this.onChangeHandler}
                  onSubmit={this.onSubmitHandler}
                />   
                <button onClick={() => { 
                    this.props.removeItem(this.props.todo.idx)
                  }}>삭제
                </button>

                <button onClick={this.setCurrentModifyMode}>
                  {this.state.isModifyMode ? '완료' : '편집'}
                </button>  
            </div>
        )
    }
}

export default Item;