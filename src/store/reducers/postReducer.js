import { GET_POST } from '../actions/types'

const initState = {
	postItem: {}
};

function postReducer(state = initState, action) {
	switch (action.type) {
		case GET_POST:
			return {
				...state,
				postItem: action.payload
			};
		default:
			return state;
	}
};

export default postReducer;