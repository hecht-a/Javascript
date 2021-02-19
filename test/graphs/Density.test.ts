import { density } from "../../src/Graphs/Density";

describe(density, () => {
	it("should print the density of the network", () => {
		expect(density(10, 2)).toBe(0.044444444444444446);
	});

	it("should print the density of the network", () => {
		expect(density(20, 2)).toBe(0.010526315789473684);
	});

	it("should print the density of the network", () => {
		expect(density(20, 4)).toBe(0.021052631578947368);
	});
});
