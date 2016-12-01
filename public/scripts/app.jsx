import React from 'react';
import ReactDOM from 'react-dom';

import TripInput from './tripInput.jsx';
import TripTable from './tripTable.jsx';
import TripListItem from './tripListItem.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { from: [], to: [], stop: ''}
    }
	render() {
		return(
			<div className="trip_input">
					<TripInput onUpdate={this.onUpdate.bind(this)}/>
                    <TripTable from={this.state.from} to={this.state.to} stop={this.state.stop} />
			</div>

			)
	}
    onUpdate(val) {
        var arr = this.state.from.slice();
            arr.push(val.from)
        this.setState({
            from: arr,
            to: val.to,
            stop: val.stop
        });
    }
};

 ReactDOM.render(<App/>, document.getElementById('app'));





  //   class  TripPlanner extends React.Component{
  //       constructor(props) {
  //           super(props);
  //           this.state = {items: ['one', 'two']};
  //       }
       

  //       render(){
  //           return (
  //               <div>
  //               <TodoList items={this.state.items} />
  //               </div>
  //               );
  //       }
  //   };

  //   class TodoList extends React.Component {
  //       render() {
  //           var createItem = function(itemText) {
  //               return (
  //                   <TodoListItem> {itemText}</TodoListItem>
  //                   );
  //           };
  //           return <ul>{this.props.items.map(createItem)}</ul>;
  //       }
  //   };

  //   class TodoListItem extends React.Component {
  //       render() {
  //           return (
  //               <li>{this.props.children} </li>
  //               )
  //       }
  //   };
  
  // ReactDOM.render(<TripPlanner/>, document.getElementById('app'));



    