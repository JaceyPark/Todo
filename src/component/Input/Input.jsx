import React from 'react';
// import style from './style.css';

/**
 *TODO: 입력이 완료 되었을 떄 input 값 초기화
 */
class Input extends React.Component {
  render() {
    return(
      <div>
        <input type="text" onKeyDown={(e) => {this.props.addNewItems(e);}} ></input>
      </div>
    )
  }
}

export default Input;