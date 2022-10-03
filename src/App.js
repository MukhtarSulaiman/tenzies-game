/** @format */

import React from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './components/Die';

function App() {
	const [dice, setDice] = React.useState(allNewDice());
	const [tenzies, setTenzies] = React.useState(false);
	const [rollsNumber, setRollsNumber] = React.useState(0);
	
	React.useEffect(() => {
		const firstValue = dice[0].value;
		const areAllHeld = dice.every((die) => die.isHeld);
		const areAllSameValue = dice.every((die) => die.value === firstValue);
		if (areAllHeld && areAllSameValue) {
			setTenzies(true);
			console.log('You won the game 🥳');
		}
	}, [dice]);

	// Helper function
	function generateNewDie() {
		return {
			id: nanoid(),
			value: Math.floor(Math.random() * 6 + 1),
			isHeld: false,
		};
	}

	function allNewDice() {
		const arrayNumbers = [];
		for (let i = 1; i <= 10; i++) {
			arrayNumbers.push(generateNewDie());
		}
		return arrayNumbers;
	}

	function handleClick(isGameEnded) {
		if (isGameEnded) {
			setDice(allNewDice());
			setTenzies(false)
			setRollsNumber(0)
		}
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? die : generateNewDie();
			})
		);
		setRollsNumber(prevRollsNumber => {
			return prevRollsNumber = prevRollsNumber + 1
		})
	}

	function handleSelectedNumber(id) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id
					? { ...die, isHeld: !die.isHeld }
					: die;
			})
		);
	}

	return (
		<main className='App'>
			{tenzies && <Confetti width={window.width} />}
			<Die
				dice={dice}
				handleClick={handleClick}
				handleSelectedNumber={handleSelectedNumber}
				isGameEnded={tenzies}
				rollsNumber={rollsNumber}
			/>
		</main>
	);
}

export default App;
