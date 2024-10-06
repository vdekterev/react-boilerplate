import './JournalForm.css';
import Button from '@components/Button/Button.jsx';


export default function JournalForm({ onSubmit }) {
	function submitForm(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		formProps.date = formProps.date ? formProps.date : Date.now();
		onSubmit(formProps);
	}

	return (
		<form id="journal-form" onSubmit={(e) => submitForm(e)}>
			<input type="text" name="title" placeholder="Заголовок"/>
			<input type="date" name="date" defaultValue={Date.now()} />
			<input type="text" name="tag"  placeholder="Тег" />
			<textarea name="text" id="" cols="30" rows="10" placeholder="Воспоминание"/>
			<Button text="Сохранить"/>
		</form>
	);
}
