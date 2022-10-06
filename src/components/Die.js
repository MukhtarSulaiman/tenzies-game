const Die = (props) => {

	const numbers = props.dice.map((die, index) => {
          return (
			<div
				key={die.id}
				onClick={() => props.handleSelectedNumber(die.id)}
			>
				<img
					className={die.isHeld ? 'img heled-img' : 'img'}
					src={require(`../assets/images/dice${die.value}.svg`)}
					alt='a die'
				/>
			</div>
		);
	})

     return (
		<div>
			<h1>Tenzies 🎲</h1>
			<p>
				{props.diceHaveNotSameValue ?
					props.isGameEnded ? 'You won the game! 🥳'
						: 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.'
					: 'Dice have not the same value! 😫'
				}
				
			</p>
			<div className='rolls-time-container'>
				<p>Rolls: {props.rollsNumber}</p>
				<p>
					Time:
					<span>{('0' + Math.floor((props.timer / 60000) % 60)).slice(-2)}:</span>
					<span>{('0' + Math.floor((props.timer / 1000) % 60)).slice(-2)}:</span>
					<span>{('0' + ((props.timer / 10) % 100)).slice(-2)}</span>
				</p>
			</div>
			<div className='boxes-container'>{numbers}</div>
			<button onClick={() => props.handleClick(props.isGameEnded)}>
				{' '}
				{props.isGameEnded ? 'New Game' : 'Roll'}
			</button>
		</div>
	);
}

export default Die