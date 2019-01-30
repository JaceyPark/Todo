import React from 'react';
import InputContainer from '../component/Input/InputContainer';
import TodoContainer from '../component/Todo/TodoContainer';

class Todo extends React.Component {
    render() {
        return (
            <>
                <InputContainer />
                <TodoContainer />
            </>
        )
    }
}

export default Todo;