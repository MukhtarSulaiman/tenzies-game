import React from 'react';
import Die from './components/Die';

function App() {

     const [dice, setDice] = React.useState(allNewDice());

     function allNewDice() {
          const arrayNumbers = []
          for (let i = 1; i <= 10; i++) {
               const randomNumber = Math.floor(Math.random() * 6 + 1);
               arrayNumbers.push(randomNumber);
          }
          return arrayNumbers
     }

     function handleClick() {
          setDice(allNewDice());
     }

     return (
		<main className='App'>
               <Die
                    dice={dice}
                    handleClick={handleClick}
               />
		</main>
	);
}

export default App;
