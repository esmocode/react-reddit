import {GET_POST} from './types';

export const getPost = () => dispatch => {
	fetch('https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json')
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: GET_POST,
				payload: res
			});
		});
};