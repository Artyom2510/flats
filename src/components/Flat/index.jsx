import React from 'react';

import './index.scss';

const Flat = ({
		attributes: {
			title, rooms, area, unit,
			address: {
				city, house, room, street
			}
		},
		id,
		isLiked,
		relationships: {
			attributes: {
				first_name: firstName,
				last_name: lastName,
				middle_name: patronymic
			}
		},
		toggleLike
	}) => {

		const likeClass = "item__like";

		return (
			<li className="list__item item">
				<button
					className={isLiked ? `${likeClass} ${likeClass}_liked` : likeClass}
					onClick={() => toggleLike(id, !isLiked)}
				>
					<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="#000" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
					</svg>
				</button>
				<h3 className="item__title">{title}</h3>
				<h4 className="item__subtitle">Количество комнат: {rooms}</h4>
				<p className="item__info">Площадь: {area} {unit}</p>
				<ol className="item__addr">
					<li>город: {city}</li>
					<li>улица: {street}</li>
					<li>дом: {house}</li>
					<li>комната: {room}</li>
				</ol>
				<h4 className="item__contacts">{firstName} {lastName} {patronymic} </h4>
			</li>
		)
	};

export default Flat;