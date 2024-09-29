import './JournalItem.css';

export default function JournalItem({
	title,
	date,
	preview,
	isActive,
	onClick
}) {
	return (
		<div
			className={`journal-item ${isActive ? 'active' : ''}`}
			onClick={onClick}
		>
			<div className="journal-item__title">
				{title}
			</div>
			<div className="journal-item__info">
				<div className="info-date">{date}</div>
				<div className="info-preview">{preview}</div>
			</div>
		</div>
	);
}