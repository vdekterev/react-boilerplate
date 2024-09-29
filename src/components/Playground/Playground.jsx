import './Playground.css';
import {useState} from 'react';

export default function Playground() {
	const data = [
		{
			'name': 'Hello'
		},
		{
			'name': 'World'
		},
		{
			'name': 'Test'
		}
	];
	const [inputData, setInputData] = useState(data);

	function filterData(e) {
		const searchParam = e.target.value;
		console.log(searchParam);
		if (searchParam) {
			const filteredData = inputData.filter((el) => el.name.includes(searchParam));
			setInputData(filteredData);
		} else {
			setInputData(data);
		}

	}
	return (
		<div className="playground">
			<input type="text" onChange={(e) => filterData(e)}/>
			{
				inputData.map((item, index) => {
					return (
						<div key={index}>
							{item.name}
						</div>
					);
				})
			}
		</div>
	);
}
