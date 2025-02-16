import { render, screen, fireEvent } from "@testing-library/react";
import GameBoard from "./GameBoard";

test("clicking RollButton does not change held dice", () => {
    render(<GameBoard />);
  
    // Get all dice
    let diceElements = screen.getAllByTestId("dice");
  
    // Click first die to hold it
    fireEvent.click(diceElements[0]);
    const heldValue = diceElements[0].textContent;
  
    // Click roll button multiple times
    const rollButton = screen.getByTestId("roll-button");
  
    let previousValues = diceElements.map(die => die.textContent);
    let newValues;
    let hasChanged = false;
  
    for (let i = 0; i < 10; i++) {
      fireEvent.click(rollButton);
      diceElements = screen.getAllByTestId("dice");
      newValues = diceElements.map(die => die.textContent);
  
      if (previousValues.some((val, index) => val !== newValues[index] && index !== 0)) {
        hasChanged = true;
        break;
      }
  
      previousValues = newValues;
    }
  
    // Held dice should remain the same
    expect(diceElements[0].textContent).toBe(heldValue);
  
    // Ensure at least one unheld die changed
    expect(hasChanged).toBe(true);
  });
