import './JournalForm.css';
import Button from '@components/Button/Button.jsx';
import {useState} from 'react';

export default function JournalForm({ onSubmit }) {
	const [inputData, setInputData] = useState('');

	return (
		<form id="journal-form" onSubmit={onSubmit}>
			<input
				type="text"
				value={inputData}
				onChange={(e) => setInputData(e.target.value)}
				name="title"
				placeholder="Заголовок"
			/>
			<input type="date" name="date"/>
			<input type="text" name="tag"  placeholder="Тег" />
			<textarea name="preview" id="" cols="30" rows="10" placeholder="Воспоминание"/>
			<Button text="Сохранить"/>
		</form>
	);
}
