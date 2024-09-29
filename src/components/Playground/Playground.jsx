import './Playground.css';
import {useState} from 'react';

export default function Playground() {
	const [inputText, setInputText] = useState('');
	const [savedText, setSavedText] = useState('');

	function handleInputChange(e) {
		setInputText(e.target.value);
	}
	function handleSave() {
		setSavedText(inputText);
	}

	return (
		<div className="playground">
			<input type="text" onKeyDown={(e) => e.key==='Enter' && handleSave()} onChange={(e) => handleInputChange(e)} value={inputText} />
			<button type="submit" onClick={handleSave}>Сохранить</button>
			<div className="result">
				{savedText}
			</div>
		</div>
	);
}
