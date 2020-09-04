import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getApartaments, setLike} from '../../store/actions';
import Flat from '../Flat';


import './index.scss';

const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(({apartamentReducer}) => apartamentReducer.isLoading);
	const isSubmitting = useSelector(({apartamentReducer}) => apartamentReducer.isSubmitting);
	const apartaments = useSelector(({apartamentReducer}) => apartamentReducer.apartaments);

	useEffect(() => {
		dispatch(getApartaments())
	}, [dispatch]);

	const toggleLike = (id, value) => {
		if (!isSubmitting) {
			dispatch(setLike(id, value));
		}
	};

	return (
		<main className="main">
			<div className="container">
				<h1 className="container__title">FLats Task</h1>
				{
					isLoading ? <span>loading...</span> :
					<ul className="container__list list">
						{
							apartaments.map(flat => {
								return (
									<Flat key={flat.id} {...flat} toggleLike={toggleLike} />
								);
							})
						}
					</ul>
				}
			</div>
		</main>
	)
}

export default App;