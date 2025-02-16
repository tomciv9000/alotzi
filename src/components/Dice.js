import "../styles/Dice.css";

const getPipPositions = (value) => {
  const pipLayouts = {
    1: [5],                          // Center pip
    2: [1, 9],                       // Top-left & bottom-right
    3: [1, 5, 9],                    // Top-left, center, bottom-right
    4: [1, 3, 7, 9],                 // Four corners
    5: [1, 3, 5, 7, 9],              // Four corners + center
    6: [1, 3, 4, 6, 7, 9]            // Two vertical columns
  };

  return pipLayouts[value] || [];
};

const Dice = ({ value, isHeld, onHold, hasWon }) => {
  return (
    <div 
      data-testid="dice" 
      className={`dice ${hasWon ? "win-glow" : isHeld ? "held" : ""}`}
      onClick={onHold}
    >
      {getPipPositions(value).map((position, index) => (
        <div key={index} className={`pip pip-${position}`}></div>
      ))}
    </div>
  );
};

export default Dice;
