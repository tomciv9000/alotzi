import { render, screen, fireEvent } from "@testing-library/react";
import GameBoard from "./GameBoard";

test("renders GameBoard with 10 dice", () => {
  render(<GameBoard />);
  const diceElements = screen.getAllByTestId("dice");
  expect(diceElements.length).toBe(10);
});

test("clicking RollButton changes dice values", () => {
  render(<GameBoard />);
  const diceElementsBefore = screen.getAllByTestId("dice").map(die => die.textContent);
  
  const rollButton = screen.getByTestId("roll-button");
  fireEvent.click(rollButton);
  
  const diceElementsAfter = screen.getAllByTestId("dice").map(die => die.textContent);
  
  expect(diceElementsBefore).not.toEqual(diceElementsAfter);
});
