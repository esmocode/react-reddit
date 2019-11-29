import { GET_COMMENTS } from '../actions/types'

const initState = {
	items: []
};

function commentsReducer(state = initState, action) {
	switch (action.type) {
		case GET_COMMENTS:
			return {
				...state,
				items: action.payload
			}
		default:
			return state;
	}
};

export default commentsReducer;