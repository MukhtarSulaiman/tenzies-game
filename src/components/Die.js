const Die = (props) => {

     const numbers = props.dice.map((die, index) => {
          return <div className='box' >{die}</div>
     })

     return (
		<div>
			<h1>Tenzies</h1>
			<p>
				Roll until all dice are the same. Click each die to freeze
				it at its current value between rolls.
			</p>
			<div className='boxes-container'>{numbers}</div>
			<button onClick={props.handleClick}>Roll</button>
		</div>
	);
}

export default Die