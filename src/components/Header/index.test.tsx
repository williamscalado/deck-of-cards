import { describe, it } from "vitest";
import { render, screen } from "../../../test-utils";
import { Header } from "./index";
import React from "react";
import { fireEvent } from "@testing-library/react";

describe("Header component", () => {
	it("renders without crash", async () => {
		render(<Header />);
	});

	it("Should show content", () => {
		render(<Header />);
		expect(screen.getByText("Olá,")).toBeDefined();
	});

	it("Should show button exit", () => {
		render(<Header />);
		const btnExit = screen.getByTestId("btn-test-exit");
		expect(btnExit.textContent).toBe("Sair");
		fireEvent.click(btnExit);
	});
});
