/** @format */

import React from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import Die from './components/Die';

function App() {
	const [dice, setDice] = React.useState(allNewDice());
	const [tenzies, setTenzies] = React.useState(false);
	const [rollsNumber, setRollsNumber] = React.useState(0);
	const [diceHaveNotSameValue, setDiceHaveNotSameValue] = React.useState(true);
	const [time, setTime] = React.useState(0);
	const [timerOn, setTimerOn] = React.useState(false);

	React.useEffect(() => {
		const firstValue = dice[0].value;
		const areAllHeld = dice.every((die) => die.isHeld);
		const areAllSameValue = dice.every((die) => die.value === firstValue);
		if (areAllHeld && areAllSameValue) {
			setTenzies(true);
			setTimerOn(false);
			setDiceHaveNotSameValue(true);
			console.log('You won the game 🥳');
		} else if (areAllHeld && !areAllSameValue) {
			setDiceHaveNotSameValue(false);
		}
	}, [dice]);

	React.useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		}
		return () => clearInterval(interval);
	}, [timerOn]);

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
			setTenzies(false);
			setRollsNumber(0);
			setTime(0);
			
		} else {
			setDice((oldDice) =>
				oldDice.map((die) => {
					return die.isHeld ? die : generateNewDie();
				})
			);
			setRollsNumber((prevRollsNumber) => {
				return (prevRollsNumber = prevRollsNumber + 1);
			});
			setTimerOn(true);
		}
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
				diceHaveNotSameValue={diceHaveNotSameValue}
				isGameEnded={tenzies}
				rollsNumber={rollsNumber}
				timer={time}
			/>
		</main>
	);
}

export default App;
