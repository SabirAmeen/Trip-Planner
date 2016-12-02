import React from 'react';
import ReactDOM from 'react-dom';

import TripInput from './tripInput.jsx';

import ListWrapper from './components/list_wrapper.jsx';

class App extends React.Component {
constructor(props){
	super(props);
	this.state = {
		stops:1,
		loc:[	
		]
	}
}
input(arr){
	this.setState({loc:[]});
	var stopCount = arr[2];
	var loc=[];
	for(var i=0;i < stopCount;i++){
		if(i==0){
			if(stopCount==1){
				loc.push({origin:arr[0], dest:arr[1]})
			}
			else{
				loc.push({origin:arr[0], dest:""})		
			}
		}
		else if(i==stopCount-1){
			loc.push({origin:"", dest:arr[1]})
		}
		else{
			loc.push({origin:"", dest:""})
		}
	}
	this.setState({
		stops:arr[2],
		loc:loc
	})
}
handleChange(row,place,type){
	var arr = this.state.loc;
	var stops=this.state.stops
	if(type=="origin"){
		arr[row].origin=place;
		if(row-1>=0){
			arr[row-1].dest=place;			
		}

	}
	else{
		arr[row].dest=place;
		if(row+1!=stops){
			arr[row+1].origin=place;
		}
	}
	if(arr[row].origin==="" && arr[row].dest===""){
		arr.splice(row,1);
	}
	this.setState({loc:arr}) 
}

	render() {
		return(
			<div className="trip_planner">
					<TripInput input={this.input.bind(this)}/>
					<ListWrapper data={this.state} handleChange={this.handleChange.bind(this)}/>
			</div>

			)
	}
};

 ReactDOM.render(<App/>, document.getElementById('app'));





  
