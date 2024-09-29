import './JournalBlock.css';
import JournalItem from '@components/Journal/JournalItem/JournalItem.jsx';
import AddJournalItem from '@components/Journal/AddJournalItem/AddJournalItem.jsx';
import {useState} from 'react';

export default function JournalBlock() {
	const [activeItem, setActiveItem] = useState(null);
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
	return (
		<div className="journal-block">
			<AddJournalItem/>
			{data.map((item, index) => (
				<JournalItem
					key={index}
					title={item.title}
					date={item.date}
					preview={item.preview}
					isActive={activeItem === index}
					onClick={() => setActiveItem(index)}
				/>
			))}
		</div>
	);
}