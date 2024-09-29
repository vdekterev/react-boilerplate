import './Button.css';

export default function Button({text}) {
	return (
		<button className="btn accent">
			{text}
		</button>
	);
}
