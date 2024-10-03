import './App.css';
import JournalBlock from '@components/Journal/JournalBlock/JournalBlock.jsx';
import JournalForm from '@components/Journal/JournalForm/JournalForm.jsx';
import Header from '@components/Header/Header.jsx';
import MainContent from '@components/MainContent/MainContent.jsx';
import {useState} from 'react';

export default function App() {
	const date = new Date();
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio?',
			date: date.toLocaleDateString()
		},
		{
			title: 'Поход тудым сюдым',
			preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, obcaecati?',
			date: date.toLocaleDateString()
		},
		{
			title: 'Первая заметка',
			preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, corporis?',
			date: date.toLocaleDateString()
		}
	];
	const [journal, setJournal] = useState(data);

	function submitForm(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		journal.push(formProps);
		setJournal([...journal]);
	}

	return (
		<>
			<Header/>
			<main>
				<div id="content">
					<JournalBlock journalItems={journal}/>
					<MainContent>
						<JournalForm onSubmit={(e) => submitForm(e)}/>
					</MainContent>
				</div>
			</main>
		</>
	);
}