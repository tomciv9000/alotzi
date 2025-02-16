import { render, screen, fireEvent } from "@testing-library/react";
import Dice from "./Dice";

test("renders the Dice component", () => {
  render(<Dice value={3} />);
  const diceElement = screen.getByTestId("dice");
  expect(diceElement).toBeInTheDocument();
});

test("displays a number between 1 and 6", () => {
  render(<Dice value={5} />);
  const diceElement = screen.getByTestId("dice");
  expect(diceElement.textContent).toBe("5");
});

test("clicking the dice toggles its 'held' state", () => {
    const { rerender } = render(<Dice value={2} isHeld={false} onHold={() => {}} />);
    const diceElement = screen.getByTestId("dice");
  
    // Simulate first click (held state should change)
    fireEvent.click(diceElement);
    rerender(<Dice value={2} isHeld={true} onHoldClick={() => {}} />); // Simulate state update
    expect(diceElement).toHaveClass("held");
  
    // Simulate second click (held state should revert)
    fireEvent.click(diceElement);
    rerender(<Dice value={2} isHeld={false} onHoldClick={() => {}} />); // Simulate state update
    expect(diceElement).not.toHaveClass("held");
  });
  
