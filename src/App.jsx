import './App.css';
import JournalBlock from '@components/Journal/JournalBlock/JournalBlock.jsx';
import JournalForm from '@components/Journal/JournalForm/JournalForm.jsx';
import Header from '@components/Header/Header.jsx';
import MainContent from '@components/MainContent/MainContent.jsx';
import {useState} from 'react';

export default function App() {
	const initialData = [
		{
			id: 1,
			title: 'Подготовка к обновлению курсов',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio?',
			date: new Date()
		},
		{
			id: 2,
			title: 'Поход туда сюда',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, obcaecati?',
			date: new Date()
		},
		{
			id: 3,
			title: 'Первая заметка',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, corporis?',
			date: new Date()
		}
	];

	const [journal, setJournal] = useState(initialData);

	function addItem(newItem) {
		setJournal(journal => [...journal, {
			id: journal.length > 0 ? Math.max(...journal.map(i => i.id)) + 1 : 1,
			title: newItem.title,
			tag: newItem.tag,
			date: new Date(newItem.date),
			text: newItem.text
		}]);
	}

	return (
		<>
			<Header/>
			<main>
				<div id="content">
					<JournalBlock journalItems={journal}/>
					<MainContent>
						<JournalForm onSubmit={addItem}/>
					</MainContent>
				</div>
			</main>
		</>
	);
}