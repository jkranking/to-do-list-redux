import React, { Component } from 'react'
import styles from '../styles/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem, updateItem} from '../actions';

class ListItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			checked: '',
			update: false,
			text: ""
		}
		this._handleCheckOff = this._handleCheckOff.bind(this)
		this._handleDeleteItem = this._handleDeleteItem.bind(this)
		this._handleShowUpdateForm = this._handleShowUpdateForm.bind(this)
		this._handleUpdateInput = this._handleUpdateInput.bind(this)
		this._handleUpdateSubmit = this._handleUpdateSubmit.bind(this)
	}

	_handleCheckOff(){
		if (this.state.checked === ''){
			this.setState({
				checked: 'X'
			})
		} else {
			this.setState({
				checked: ''
			})
		}
	}

	_handleUpdateInput(event){
		this.setState({
			text: event.target.value
		})
	}

	_handleUpdateSubmit(){


		this.props.updateItem({id: this.props.toDoItem.id, item: this.state.text})

		this.setState({
			text: "",
			update: false
		})
	}

	_handleShowUpdateForm(){
		this.setState({
			update: true
		})
	}

	_handleDeleteItem(){
		this.props.deleteItem(this.props.toDoItem.id)
	}

	render (){
		return (
			<div style={styles.container}>
				{!this.state.update &&
					<div>
						{this.props.toDoItem.item} 
						<button onClick={this._handleCheckOff} style={styles.button}>{this.state.checked}</button>
						<button onClick={this._handleDeleteItem}>Delete Item</button>
						<button onClick={this._handleShowUpdateForm}>Update Item</button>
					</div>
				}

				{this.state.update &&
					<form>
						<input onChange={this._handleUpdateInput} value={this.state.text} type="text" placeholder={this.props.toDoItem.item} style={styles.inputField}/>
						<button type="button" onClick={this._handleUpdateSubmit} style={styles.button}>Update</button>
					</form>
				}
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
		deleteItem:deleteItem,
		updateItem:updateItem
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem); 