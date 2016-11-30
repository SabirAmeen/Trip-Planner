import React from 'react';
import ReactDOM from 'react-dom';

import TripInput from './tripInput.jsx';

class App extends React.Component {

	render() {
		return(
			<div className="trip_input">
					<TripInput/>
			</div>
		
			)
	}
};

ReactDOM.render(<App/>, document.getElementById('app'));