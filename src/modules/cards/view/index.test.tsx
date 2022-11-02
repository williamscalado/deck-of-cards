import { describe, it } from "vitest";
import { Cards } from "./index";
import { fireEvent, render, screen } from "../../../../test-utils";

describe("Card component", () => {
	it("renders without crash", async () => {
		render(<Cards />);
	});

	it("Should show image when header render  ", () => {
		render(<Cards />);
		expect(screen.getByText("Olá,")).toBeDefined();
	});

	it("Should show image when loading", () => {
		render(<Cards />);
		expect(screen.getAllByTestId("img-loading")).toBeTruthy();
	});

	it("Should show button new card", () => {
		render(<Cards />);
		const btn = screen.getByTestId("new-card");
		expect(btn.textContent).toBe("Puxar carta");
		fireEvent.click(btn);
	});
});
