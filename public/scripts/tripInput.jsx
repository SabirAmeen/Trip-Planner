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

			<div className="trip_input">
				<h2>Plan Your Journey </h2>
				
				<input type="text" name="from" ref={from => this.from = from} placeholder="From"/>
			
				<input type="text" name="to" ref={to => this.to = to} placeholder="To"/>
			
				<input type="text" name="stop" ref={stop => this.stop = stop} placeholder="Stops"/>
				<button width="50px" height="50px" onClick={this.enter.bind(this)}>LET'S GO</button>
			</div>

		)
	}

};

