import './App.css';
import JournalBlock from '@components/Journal/JournalBlock/JournalBlock.jsx';
import Header from '@components/Header/Header.jsx';
import Playground from '@components/Playground/Playground.jsx';
export default function App() {
	return (
		<>
			<Header/>
			<div id="content">
				<JournalBlock/>
				<Playground/>
			</div>
		</>
	);
}