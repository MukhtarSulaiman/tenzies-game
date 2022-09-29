const Die = (props) => {

     const numbers = props.dice.map((die, index) => {
          return (
               <div
                    key={die.id}
                    onClick={() => props.handleSelectedNumber(die.id)}
                    className={die.isHeld ? 'box heled-box' : 'box'}
               >
				{die.value}
			</div>
		);
     })

     return (
		<div>
			<h1>Tenzies 🎲</h1>
			<p>
				{ props.isGameEnded ? 'You won the game! 🥳' : 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls'}.
			</p>
			<div className='boxes-container'>{numbers}</div>
			<button onClick={() => props.handleClick(props.isGameEnded)}> {props.isGameEnded ? 'New Game' : 'Roll'}</button>
		</div>
	);
}

export default Die