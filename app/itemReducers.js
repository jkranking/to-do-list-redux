"use strict"

// make sure to install babel-preset-stage-1 for spread operator


export function itemReducers(state={
	items: 	[ {id: 1, item: "hello I'm redux"} ]
}, action){
	switch(action.type){
		case "GET_ITEMS": 
		return {...state, items:[...state.items]}
		break;

		case "POST_ITEM": 
		return {items:[...state.items, action.payload]}
		break;

		case "DELETE_ITEM":
		const currentItemToDelete = [...state.items ]
		const indexToDelete = currentItemToDelete.findIndex(
			function(item){

				return item.id === action.payload;
			}
		)
		return {items: [...currentItemToDelete.slice(0, indexToDelete), ...currentItemToDelete.slice(indexToDelete + 1)]}
		break;

		case "UPDATE_ITEM":
		// create a copy of the current array
		const currentItemToUpdate = [...state.items]

		const indexToUpdate = currentItemToUpdate.findIndex(
			function(item){
				return item.id === action.payload.id;
			}
		)

		return {items: [...currentItemToUpdate.slice(0, indexToUpdate), action.payload, ...currentItemToUpdate.slice(indexToUpdate + 1)]}
		break;
	}
	return state
}
