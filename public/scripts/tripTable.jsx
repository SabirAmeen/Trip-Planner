import React from 'react';



export default class TripTable extends React.Component {

    render() {
            var createItem = function(item) {
            	return (
            		<TripListItem>{item}</TripListItem>
            		);
            }
             return <ul>{this.props.from.map(createItem)}</ul>;
    }

};
