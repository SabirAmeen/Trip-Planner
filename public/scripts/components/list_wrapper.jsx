import React from 'react';
import $ from 'jquery';
import ListContent from './list_content.jsx';
export default class extends React.Component{

change(event){
	console.log(this)
}

generateLayout(){
	var arr=this.props.data.loc;
	var i=0;
	return(
		arr.map(function(item,index){
			i++;
			return(<div key={index}>
					<input placeholder={i}/>
					<input placeholder={item.origin} onChange={this.change.bind(this)}/>
					<input placeholder={item.dest} onChange={this.change.bind(this)}/>
					</div>
			);
		}.bind(this))
	)
}
render(){
	return(
			<div className="list_wrapper">
				<h3>Stops</h3>
				<h3>From</h3>
				<h3>To</h3>
				{this.generateLayout()}
			</div>
		)
	}
}