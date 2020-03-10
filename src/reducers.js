import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED 
} from './constants';

const initialStateSearch = {
	searchField: ''
}

// create the reducer
// state is initial state so we dont get an error if NaN is passed. 
// action is defined as an object
// the name should reflect the name of an action 
export const searchRobots = (state=initialStateSearch, action={}) =>{
	// the reducer gets an state and an action 
	// execute something according to the state
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			//state is read only
			//we create a new object with the new value
			//copy using assign to create a new object
			// returning a new state
			return Object.assign({}, state, { searchField: action.payload});
			//it also can be done using object destructuring
			//return {...state,  searchField: action.payload}
		default:
			return state;

	}
}

const initialStateRobots={
	isPending: false, 
	robots: [],
	error:''
}

export const requestRobots = (state=initialStateRobots, action={}) =>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending: true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload, isPending: false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}