import {
	GET_APARTAMENTS,
	GET_APARTAMENTS_SUCCESS,
	SET_LIKE,
	SET_LIKE_SUCCESS
} from './actionTypes';
import api from '../api';

export const getApartaments = () => async (dispatch) => {
	dispatch({
		type: GET_APARTAMENTS,
		payload: {
			isLoading: true
		}
	});

	const apartaments = await api.getApartaments();

	// simulated delay from backend
	setTimeout(() => {
		dispatch({
			type: GET_APARTAMENTS_SUCCESS,
			payload: {
				isLoading: false,
				apartaments
			}
		});
	}, 1000);
}

export const setLike = (id, value) => async (dispatch) => {
	dispatch({
		type: SET_LIKE,
		payload: {
			isSubmitting: true
		}
	});

	const res = await api.patchLike(id, value);

	setTimeout(() => {
		dispatch({
			type: SET_LIKE_SUCCESS,
			payload: {
				id,
				value,
				isSubmitting: false
			}
		});
	}, 600);
}