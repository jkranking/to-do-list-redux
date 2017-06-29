import React, { Component } from 'react';
import ListItem from './ListItem'
import styles from '../styles/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getItems} from '../actions';

class ListContainer extends Component {

	constructor(props){
		super(props)
	}

	render (){
		const items = this.props.items.map( (toDoItem, i) => {
			return <ListItem key={i} toDoItem={toDoItem} />
		})

		// const items = this.props.toDoListItems.map( (toDoItem, i) => {
		// 	return <ListItem key={i} toDoItem={toDoItem} />
		// })

		return (
			<div style={styles.container}>
				{items}
			</div>
		)
	}

}

function mapStateToProps(state){
	return{
		items: state.items.items
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getItems:getItems
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer); 