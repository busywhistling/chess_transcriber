import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Credits from "./Credits";

describe('Credits', () => {
	test("shows credits", async () => {
		// ARRANGE
		render(<Credits />);

		// ACT

		// ASSERT
		// expect(screen.getByRole("heading")).toHaveTextContent("hello there");
		// expect(screen.getByRole("button")).toBeDisabled();
		screen.debug();
	});
});