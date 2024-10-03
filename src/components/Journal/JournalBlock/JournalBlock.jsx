import './JournalBlock.css';
import JournalItem from '@components/Journal/JournalItem/JournalItem.jsx';
import AddJournalItem from '@components/Journal/AddJournalItem/AddJournalItem.jsx';
import {useState} from 'react';

export default function JournalBlock({ journalItems }) {
	const [activeItem, setActiveItem] = useState(null);

	return (
		<div className="journal-block">
			<AddJournalItem/>
			{journalItems.map((item, index) => (
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