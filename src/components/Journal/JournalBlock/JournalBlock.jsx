import './JournalBlock.css';
import JournalItem from '@components/Journal/JournalItem/JournalItem.jsx';
import AddJournalItem from '@components/Journal/AddJournalItem/AddJournalItem.jsx';
import {useState} from 'react';
import NoJournalItems from '@components/Journal/NoJournalItems/NoJournalItems.jsx';

export default function JournalBlock({ journalItems }) {
	const [activeItem, setActiveItem] = useState(null);
	function sortItems(a, b) {
		return a.date < b.date ? 1 : -1;
	}
	return (
		<div className="journal-block">
			<AddJournalItem/>
			{journalItems.length < 1
				? <NoJournalItems/>
				:journalItems.sort(sortItems).map(item => (
					<JournalItem
						key={item.id}
						title={item.title}
						date={item.date}
						text={item.text}
						isActive={activeItem === item.id}
						onClick={() => setActiveItem(item.id)}
					/>
				))}
		</div>
	);
}