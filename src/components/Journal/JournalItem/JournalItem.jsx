import './JournalItem.css';

export default function JournalItem({
	title,
	date,
	text,
	isActive,
	onClick
}) {
	const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);
	return (
		<div
			className={`journal-item ${isActive ? 'active' : ''}`}
			onClick={onClick}
		>
			<div className="journal-item__title">
				{title}
			</div>
			<div className="journal-item__info">
				<div className="info-date">{formattedDate}</div>
				<div className="info-preview">{text}</div>
			</div>
		</div>
	);
}