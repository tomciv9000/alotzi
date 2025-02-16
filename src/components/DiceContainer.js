import Dice from "./Dice";
import "../styles/DiceContainer.css"; // Ensure styles are imported

const DiceContainer = ({ dice, toggleHold, hasWon }) => {
  return (
    <div data-testid="dice-container" className="dice-container">
      {dice.map((die, index) => (
        <Dice 
          key={index} 
          value={die.value} 
          isHeld={die.isHeld} 
          onHold={() => toggleHold(index)} 
          hasWon={hasWon} // Pass win state to dice
        />
      ))}
    </div>
  );
};

export default DiceContainer;

