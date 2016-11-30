import React from 'react';
import $ from 'jQuery';

export default class extends React.Component{
render(){
	return(
			<div className="list_wrapper">
				<h3>Stops</h3>
				<h3>From</h3>
				<h3>To</h3>
				arr.map(function(item,index){
					return(
							<listContent/>
						)
				})
			</div>
		)
	}
}