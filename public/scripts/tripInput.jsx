import React from 'react';

export default class TripInput extends React.Component {
	render() {
		return (
			<form ref="form"> 
			<label>From:</label>
			<input type="text" name="from" ref="from"/>
			<label> To: </label>
			<input type="text" name="to" ref="to" />
			<label>Stop: </label>
			<input type="text" name="stop" ref="stop" />
			<input type="button" onClick={this.update.bind(this)} value="ADD" />
			</form>
			)
	}

	update() {
			var values = {
				"from" : this.refs.from.value,
				"to" : this.refs.to.value,
				"stop" : this.refs.stop.value
			}
         this.props.onUpdate(values);
         this.refs.form.reset();
     }

};

