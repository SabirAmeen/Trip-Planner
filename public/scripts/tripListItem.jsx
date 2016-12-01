import React from 'react';

export default class TripListItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.children}</td>
			</tr>
			)
	}
};