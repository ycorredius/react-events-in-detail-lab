// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
	handleOnClick = event =>{
		event.persist();
		window.setTimeout(()=>{
			this.props.onDelayedClick(event);
		},this.props.delay);
	}

	render(){
		return <button onClick={this.handleOnClick}>Delay</button>
	}
}
export default DelayedButton;