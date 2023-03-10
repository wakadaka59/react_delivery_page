import React from "react";

export const PickupModule = () => {
	return (
		<section className="form tabs-block__pick-up">
			<h2 className="visually-hidden">Форма самовывоза</h2>
			<form id="pickupForm" action="#" method="POST">
				<h3>Самовывоз</h3>
				<div
					id="pickup-cities"
					className="input-wrapper input-wrapper--radio-group"
				>
					<h4>Город</h4>
					<input
						id="pick-up-led"
						type="radio"
						name="city"
						value="led"
						checked
					/>
					<label for="pick-up-led">Санкт-Петербург</label>
					<input id="pick-up-mow" type="radio" name="city" value="mow" />
					<label for="pick-up-mow">Москва</label>
					<input id="pick-up-goj" type="radio" name="city" value="goj" />
					<label for="pick-up-goj">Нижний Новгород</label>
					<input id="pick-up-krr" type="radio" name="city" value="krr" />
					<label for="pick-up-krr">Краснодар</label>
				</div>
				<div
					id="pickupAdresses"
					className="input-wrapper input-wrapper--radio-group"
				></div>
				<div id="map" style="width: 768px; height:400px"></div>
				<div id="pickup-payment">
					<h3>Способ оплаты</h3>
					<div className="input-wrapper input-wrapper--radio-group input-wrapper--payment-method">
						<input
							id="pickup-payment-card"
							type="radio"
							name="pickup-payment-method"
							value="card"
							checked
						/>
						<label for="pickup-payment-card">Карта</label>
						<input
							id="pickup-payment-cash"
							type="radio"
							name="pickup-payment-method"
							value="cash"
						/>
						<label for="pickup-payment-cash">Наличные</label>
					</div>
				</div>
				<div
					id="pickup-input-card-number"
					className="input-wrapper input-wrapper--input-group"
				>
					<h4>Номер карты</h4>
					<input id="card-fields-1" type="text" maxlength="4" required />
					<label
						for="card-fields-1"
						aria-label="Первые четыре цифр с карты"
					></label>
					<input id="card-fields-2" type="text" maxlength="4" required />
					<label
						for="card-fields-2"
						aria-label="Вторые четыре цифр с карты"
					></label>
					<input id="card-fields-3" type="text" maxlength="4" required />
					<label
						for="card-fields-3"
						aria-label="Третьи четыре цифр с карты"
					></label>
					<input id="card-fields-4" type="text" maxlength="4" required />
					<label
						for="card-fields-4"
						aria-label="Четвёртые четыре цифр с карты"
					></label>
					<div className="input-wrapper__error">Введите верный номер карты</div>
				</div>
				<div
					id="pickup-phone-field"
					className="input-wrapper input-wrapper--input"
				>
					{/* id="phone-form" */}
					<h4>Номер телефона</h4>
					<input
						id="phone"
						name="phone"
						type="text"
						placeholder="+7(999)999-99-99"
						value=""
					/>
					<label
						for="phone"
						aria-label="Введите верный номер телефона, он должен начинаться с +7"
					></label>
					<div className="input-wrapper__error">
						Введите верный номер телефона, он должен начинаться с +7
					</div>
				</div>
				<span className="form__info">
					Товар на складе будет привязан к номеру телефона. В пункте выдачи
					назовите номер телефона, чтобы получить ваш заказ.
				</span>
				<div className="form__submit-block">
					<button className="form__submit-btn" type="submit" disabled>
						Заказать
					</button>
					<div className="form__submit-state">
						<p className="form__submit-header">Осталось заполнить:</p>
						<p id="pick-hint" className="form__submit-help"></p>
						{/* <span>номер карты</span> и <span>телефон</span> */}
					</div>
				</div>
			</form>
		</section>
	);
};
