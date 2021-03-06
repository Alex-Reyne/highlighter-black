import { useEffect, useState } from 'react';

export default function Hello() {
	const [dateTime, setDateTime] = useState('');
	const updateClock = () => {
		const days = [
			'SUNDAY',
			'MONDAY',
			'TUESDAY',
			'WEDNESDAY',
			'THURSDAY',
			'FRIDAY',
			'SATURDAY',
		];

		let date = new Date();

		const dateString = `
    ${
			days[date.getDay()]
		} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
  `;

		setTimeout(() => {
			updateClock();
		}, 1000);

		setDateTime(dateString);
	};

	useEffect(() => {
		updateClock();
	}, []);

	return <p className='time'>{dateTime}</p>;
}
