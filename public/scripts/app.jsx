import React from 'react';
import ReactDOM from 'react-dom';

import TripInput from './tripInput.jsx';
import ListWrapper from './components/list_wrapper.jsx';

class App extends React.Component {
constructor(props){
	super(props);
	this.state = {
		from:"TVM",
		to:"Manali",
		stops:"1",
		loc:[	
		]
	}
}
input(arr){
	this.setState({loc:[]});
	var loc={origin:arr[0], dest:arr[1]}
	this.setState({
		from:arr[0],
		to:arr[1],
		stops:arr[2],
		loc:[loc]
	})
console.log(this.state.loc)
}


	render() {
		return(
			<div className="trip_input">
					<TripInput input={this.input.bind(this)}/>
					<ListWrapper data={this.state}/>
			</div>
		
			)
	}
};

ReactDOM.render(<App/>, document.getElementById('app'));