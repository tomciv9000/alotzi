import "../styles/RollButton.css"; 

const RollButton = ({ onRoll, hasWon, hasStarted }) => {
 

  return (
    <button 
      data-testid="roll-button" 
      className={`roll-button ${hasWon ? "win-red" : !hasStarted ? "start" : ""}`}
      onClick={onRoll}
    >
      {hasWon ? "🎉 Play Again" : !hasStarted ? "🎲 Roll Dice" : "🎲 Roll Again"}
    </button>
  );
};

export default RollButton;

//{`dice ${hasWon ? "win-glow" : isHeld ? "held" : ""}`}