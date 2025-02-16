import { render, screen, fireEvent } from "@testing-library/react";
import RollButton from "./RollButton";

test("renders the RollButton component", () => {
  render(<RollButton onRoll={() => {}} />);
  const rollButton = screen.getByTestId("roll-button");
  expect(rollButton).toBeInTheDocument();
});

test("calls the roll function when clicked", () => {
  const mockRollFunction = jest.fn(); // Mock function to track calls

  render(<RollButton onRoll={mockRollFunction} />);
  const rollButton = screen.getByTestId("roll-button");

  fireEvent.click(rollButton);

  expect(mockRollFunction).toHaveBeenCalledTimes(1);
});
