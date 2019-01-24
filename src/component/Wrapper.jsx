import React from 'react';
import InputContainer from './Input/InputContainer'
import TodoContainer from './Todo/TodoContainer'

class Wrapper extends React.Component {
	render() {
		return (
			<div>
				<InputContainer />
				<TodoContainer />
			</div>
		)
	}
}

export default Wrapper