import React from 'react';
import $ from 'jquery';
import ListContent from './list_content.jsx';
export default class extends React.Component{

change(row,evt){
	this.props.handleChange(row,evt.target.value,evt.target.className);
}

generateLayout(){
	var arr=this.props.data.loc;
	var i=0;
	return(
		arr.map(function(item,index){
			i++;

			return(<div key={index} className="list_item">
					<span id={"stop-"+i} >{i}</span>
					<input className="origin" id={"origin-"+i} ref={origin => this.origin = origin} value={item.origin} onChange={(evt)=>this.change(index,evt)}/>
					<input className="dest" id={"dest-"+i} ref={dest => this.dest = dest} value={item.dest} onChange={(evt)=>this.change(index,evt)}/>
					</div>
			);
		}.bind(this))
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