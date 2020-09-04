import {
	GET_APARTAMENTS,
	GET_APARTAMENTS_SUCCESS,
	SET_LIKE,
	SET_LIKE_SUCCESS
} from '../actionTypes';

const initialState = {
	isLoading: false,
	isSubmitting: false,
	apartaments: []
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_APARTAMENTS:
			return {
				...state,
				isLoading: payload.isLoading
			}
		case GET_APARTAMENTS_SUCCESS:
			return {
				...state,
				isLoading: payload.isLoading,
				apartaments: payload.apartaments
			}
		case SET_LIKE:
			return {
				...state,
				isSubmitting: payload.isSubmitting
			}
		case SET_LIKE_SUCCESS:
			const {apartaments} = state;
			const newArr = apartaments.map(el => {
				if (el.id === payload.id) {
					el.isLiked = payload.value
				}
				return el;
			});
			// console.log(newArr);
			return {
				...state,
				apartaments: newArr,
				isSubmitting: payload.isSubmitting
			}
		default:
			return state;
	}
}