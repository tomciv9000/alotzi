import { render, screen } from "@testing-library/react";
import GameBoard from "./GameBoard";

test("renders the GameBoard component", () => {
  render(<GameBoard />);
  const gameBoardElement = screen.getByTestId("game-board");
  expect(gameBoardElement).toBeInTheDocument();
});