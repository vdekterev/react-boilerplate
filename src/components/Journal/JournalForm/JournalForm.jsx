import styles from './JournalForm.module.css';
import Button from '@components/Button/Button.jsx';
import {useState} from 'react';
import cn from 'classnames';

export default function JournalForm({ onSubmit }) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		date: true,
		tag: true,
		text: true
	});

	function formatDate (date=Date.now()) {
		return new Intl.DateTimeFormat('ru-RU').format(date);
	}

	function submitForm(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		formProps.date = formProps.date ? formProps.date : Date.now();

		if (formProps.title?.trim().length > 0) {
			setFormValidState(state => ({...state, title: true}));
		} else {
			setFormValidState(state => ({...state, title: false}));
			isFormValid = false;
		}

		if (formProps.tag?.trim().length > 0) {
			setFormValidState(state => ({...state, tag: true}));
		} else {
			setFormValidState(state => ({...state, tag: false}));
			isFormValid = false;
		}

		if (formProps.text?.trim().length > 0) {
			setFormValidState(state => ({...state, text: true}));
		} else {
			setFormValidState(state => ({...state, text: false}));
			isFormValid = false;
		}

		if (isFormValid) {
			onSubmit(formProps);
		}
	}

	return (
		<form id={styles['journal-form']} onSubmit={(e) => submitForm(e)}>
			<input
				type="text"
				className={cn(styles['input'], styles['input-title'], {
					[styles['invalid']]: !formValidState.title
				})}
				onChange={() => setFormValidState(state => ({...state, title: true}))}
				name="title"
				placeholder="Заголовок"
			/>

			<div className={styles['form-item']}>
				<label htmlFor="date">Дата</label>
				<input type="date"
					   id="date"
					   className={cn(styles['input'], styles['input-date'])}
					   name="date" defaultValue={(new Date()).toISOString().split('T')[0]}
				/>
			</div>

			<div className={styles['form-item']}>
				<input type="text"
					   name="tag"
					   placeholder="Тег"
					   className={cn(styles['input'], {
						   [styles['invalid']]: !formValidState.tag
					   })}
				/>
			</div>

			<textarea
				className={cn(styles['textarea'], {
					[styles['invalid']]: !formValidState.text
				})}
				name="text"
				cols="30"
				rows="10"
				placeholder="Воспоминание"
			/>

			<Button extraClass="form-btn" text="Сохранить"/>
		</form>
	);
}
