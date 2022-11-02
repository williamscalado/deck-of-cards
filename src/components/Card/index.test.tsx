import { describe, it } from "vitest";
import { render, screen } from "../../../test-utils";
import { Card } from "./index";
import { IDataCard } from "../../types";

const mockCard: IDataCard = {
	code: "abc123456",
	image: "imagem/logo.png",
	value: "2H",
	suit: "SPADES",
	point: "5",
};

describe("Card component", () => {
	it("renders without crash", async () => {
		render(<Card props={mockCard} />);
	});

	it("Should show content", () => {
		render(<Card props={mockCard} />);
		expect(screen.getByText("Ponto(s)")).toBeDefined();
	});

	it("Should show image card", () => {
		render(<Card props={mockCard} />);
		const displayedImage = document.querySelector("img") as HTMLImageElement;
		expect(displayedImage.src).toContain(mockCard.image);
		expect(displayedImage.alt).toContain(mockCard.suit);
	});

	it("Should show skeleton when loading", () => {
		render(<Card props={mockCard} loading={true} />);

		expect(document.querySelector("img") as HTMLImageElement).toBeNull();
		expect(screen.getByTestId("skeleton")).toBeTruthy();
	});
});
