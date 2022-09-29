import React from 'react';
import { nanoid } from 'nanoid';
import Die from './components/Die';

function App() {

     const [dice, setDice] = React.useState(allNewDice())

     // Helper function
     function generateNewDie() {
          return {
			id: nanoid(),
			value:  Math.floor(Math.random() * 6 + 1),
			isHeld: false,
		};
     }

     function allNewDice() {
          const arrayNumbers = []
          for (let i = 1; i <= 10; i++) {
               arrayNumbers.push(generateNewDie())
          }
          return arrayNumbers
     }

     function handleClick() {
          setDice(oldDice => oldDice.map(die => {
               return die.isHeld ? 
                    die :
                    generateNewDie()
          }))
     }

     function handleSelectedNumber(id) {
          setDice(oldDice => oldDice.map((die) => {
                   return die.id === id ?
                        { ...die, isHeld: !die.isHeld } :
                        die
			})
         )
     }
     
     return (
		<main className='App'>
			<Die
				dice={dice}
				handleClick={handleClick}
				handleSelectedNumber={handleSelectedNumber}
			/>
		</main>
	);
}

export default App;
