import { romanToDecimal } from "../../src/Conversions/RomanToDecimal";

describe(romanToDecimal, () => {
	it("should convert roman to decimal: XXIIVV = 28", () => {
		expect(romanToDecimal("XXIIVV")).toStrictEqual(28);
	});

	it("should convert roman to decimal: MDCCCIV = 28", () => {
		expect(romanToDecimal("MDCCCIV")).toStrictEqual(1804);
	});

	it("should convert roman to decimal: XXIIVV = 28", () => {
		expect(romanToDecimal("XXIVI")).toStrictEqual(25);
	});
});
