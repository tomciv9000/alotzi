import { useState, useEffect } from "react";
import DiceContainer from "./DiceContainer";
import RollButton from "./RollButton";

const GameBoard = () => {
  const [dice, setDice] = useState(
    Array.from({ length: 10 }, () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false
    }))
  );

  const [rolls, setRolls] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasWon, setHasWon] = useState(false); // New state to track if the player has won
  const [hasStarted, setHasStarted] = useState(false); 
  // Start and update the timer every 10 milliseconds
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 10); // Increment by 10ms
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Watch for dice changes and stop the timer + trigger win state when all dice match
  useEffect(() => {
    if (allDiceMatch() && isRunning) {
      setIsRunning(false); // Stop the timer
      setHasWon(true); // Trigger the green glow
    }
  }, [dice]); // Runs every time `dice` changes

  // Function to toggle a die's held state
  const toggleHold = (index) => {
    setDice(prevDice =>
      prevDice.map((die, i) =>
        i === index ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  // Function to check if all dice have the same value
  const allDiceMatch = () => {
    return dice.every(die => die.value === dice[0].value);
  };

  // Function to roll only unheld dice
  const rollDice = () => {
    if (!isRunning) {
      setIsRunning(true); // Start the timer on the first roll
      setHasStarted(true);
    }

    setDice(prevDice =>
      prevDice.map(die =>
        die.isHeld ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
      )
    );

    setRolls(rolls + 1);
  };

  // Format the time into seconds + milliseconds
  const formattedTime = (timer / 1000).toFixed(2); // Convert ms to seconds

  return (
    <div data-testid="game-board" className="game-board">
      <h1>🎲 Alotzi! 🎲</h1>
      <p>⏳ Time: {formattedTime} seconds</p>
      <p>🎲 Rolls: {rolls}</p>
      <DiceContainer dice={dice} toggleHold={toggleHold} hasWon={hasWon} />
      <RollButton onRoll={rollDice} hasStarted={hasStarted} hasWon={hasWon}/>
    </div>
  );
};

export default GameBoard;
