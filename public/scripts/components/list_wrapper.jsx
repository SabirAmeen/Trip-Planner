import React from 'react';
import $ from 'jquery';
import ListContent from './list_content.jsx';
export default class extends React.Component{

generateLayout(){
	var arr=this.props.data.loc;
	var i=0;
	return(
		arr.map(function(item,index){
			i++;
			return(<div key={index} className="list_item">
				
					<span>{i} </span>
					<input placeholder={item.origin} />
					<input placeholder={item.dest}/>
					</div>
			);
		})
	)
}
onChange() {
	this.setState()
}

render(){
	return(
			<div className="list_wrapper">
				<div className="section_heading">
					<span className="heading">Stops</span>
					<span className="heading">From</span>
					<span className="heading">To</span>
				</div>
				{this.generateLayout()}
			</div>
		)
	}
}