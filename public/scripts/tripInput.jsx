import React from 'react';

export default class TripInput extends React.Component {
	constructor(props){
		super(props);
		this.from=undefined;
		this.to=undefined;
		this.stop=undefined;

	}
	enter(){
		var list=[];
		list.push(this.from.value,this.to.value,this.stop.value);
		this.props.input(list);
	}
	render() {
		return (
			<div>
				<label>From:</label>
				<input type="text" name="from" ref={from => this.from = from}/>
				<label> To: </label>
				<input type="text" name="to" ref={to => this.to = to}/>
				<label>Stop: </label>
				<input type="text" name="stop" ref={stop => this.stop = stop}/>
				<button width="50px" height="50px" onClick={this.enter.bind(this)}>submit</button>
			</div>
			)
	}
};

