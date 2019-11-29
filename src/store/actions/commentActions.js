import { GET_COMMENTS } from './types';

//Get Comments from api -----------------------------------
export const getComments = () => (dispatch, getState) => {
	fetch('https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json')
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: GET_COMMENTS,
				payload: res.comments
			});
		});
};

//Fake delete Comment ----------------------------------------
export const removeComment = (id) => (dispatch, getState) => {
	console.log(id);
	let comments = (getState()).comments.items;
	comments = comments.filter(comment => comment.id !== id);
	dispatch({
		type: GET_COMMENTS,
		payload: comments
	});
};
