import React from 'react';

export default class TripInput extends React.Component {
	render() {
		return (
			<form>
			<label>From:</label>
			<input type="text" name="from" />
			<label> To: </label>
			<input type="text" name="to" />
			<label>Stop: </label>
			<input type="text" name="stop" />
			</form>
			)
	}
};

