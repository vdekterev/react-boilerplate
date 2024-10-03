import './Button.css';

export default function Button({ text, onClick }) {
	return (
		<button className="btn accent" onClick={onClick}>
			{text}
		</button>
	);
}
