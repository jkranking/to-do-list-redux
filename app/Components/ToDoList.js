import React, { Component } from 'react'
import ListContainer from './ListContainer'
import styles from '../styles/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postItem} from '../actions';

class ToDoList extends Component {
	constructor(){
		super()

		this.state = {
			text : ""
		}

		this._handleToDoChange = this._handleToDoChange.bind(this)
		this._handleSubmit = this._handleSubmit.bind(this)
	}

	_handleToDoChange(e){
		const change = e.target.value
		this.setState( {text: change})
	}

	_handleSubmit(){
		const item = {
			id: this.props.item.length+1
			text: this.state.text
		}

		this.props.postItem(item)
		this.setState({text: ""})
	}

	render(){
		return(
			<div>
			<form>
				<input type="text" onChange={this._handleToDoChange.bind} value={this.state.text} placeholder="Enter To Do"/>
				<button onClick={this._handleSubmit} type="submit">Submit</button>
			</form>
			<ListContainer />
			</div>
		)
	}


}
















// 	constructor(){
// 		super()
// 		this.state = {
// 			text : ""
// 		}

// 		this._handleToDoInput = this._handleToDoInput.bind(this)
// 		this._handleSubmit = this._handleSubmit.bind(this)
// 	}

// 	_handleToDoInput(event){
// 		this.setState({text: event.target.value})
// 	}

// 	_handleSubmit(){
// 		const item = {
// 			id: this.props.items.length+1,
// 			item: this.state.text
// 		}
// 		this.props.postItem(item);
// 		this.setState({
// 			text : ""
// 		})
// 	}

// 	render (){
		
// 		return (
// 			<div>
// 				<form>
// 					<input onChange={this._handleToDoInput} value={this.state.text} type="text" placeholder="Enter To Do" style={styles.inputField}/>
// 					<button onClick={this._handleSubmit} style={styles.button}>Add Item</button>
// 				</form>
// 				<ListContainer />
// 			</div>
// 		)
// 	}
// }

// function mapStateToProps(state){
// 	return{
// 		items:state.items.items
// 	}
// }

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		postItem:postItem,
// 	}, dispatch)
// }
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList); 
