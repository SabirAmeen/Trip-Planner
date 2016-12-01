import React from 'react';
import $ from 'jquery';
import ListContent from './list_content.jsx';
export default class extends React.Component{

change(row,evt){
	this.props.handleChange(row,evt.target.value,evt.target.className)
	// console.log(++row)
	// console.log(evt.target.value)
	// console.log(evt.target.className)
}

generateLayout(){
	var arr=this.props.data.loc;
	var i=0;
	return(
		arr.map(function(item,index){
			i++;
			return(<div key={index}>
					<input id={"stop-"+i} placeholder={i}/>
					<input className="origin" id={"origin-"+i} ref={origin => this.origin = origin} value={item.origin} onChange={(evt)=>this.change(index,evt)}/>
					<input className="dest" id={"dest-"+i} ref={dest => this.dest = dest} value={item.dest} onChange={(evt)=>this.change(index,evt)}/>
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