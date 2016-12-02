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

			return(<tr key={index} className="list_item">
					<td><span id={"stop-"+i} >{i}</span></td>
					<td><input className="origin" id={"origin-"+i} ref={origin => this.origin = origin} value={item.origin} onChange={(evt)=>this.change(index,evt)}/></td>
					<td><input className="dest" id={"dest-"+i} ref={dest => this.dest = dest} value={item.dest} onChange={(evt)=>this.change(index,evt)}/></td>
					<td className="buttons"><button className="add_remove_stop add_stop">+</button><button className="add_remove_stop remove_stop">-</button></td>
					</tr>
			);
		}.bind(this))
	)
}

render(){
	return(
			<table className="list_wrapper">
			<thead>
				<tr className="section_heading">
					<th className="heading">Stops</th>
					<th className="heading">From</th>
					<th className="heading">To</th>
					<th className="heading">Add/ Remove </th>
				</tr>
				</thead>
				<tbody>
				{this.generateLayout()}
				</tbody>
			</table>
		)
	}
}