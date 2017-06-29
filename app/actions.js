"use strict"

export function postItem(item){
	return {
		type: "POST_ITEM",
		payload: item
	}
}

export function getItems(){
	return {
		type: "GET_ITEMS",
	}
}

export function deleteItem(item){
	return {
		type: "DELETE_ITEM",
		payload: item
	}
}

export function updateItem(item){
	return {
		type: "UPDATE_ITEM",
		payload: item
	}
}