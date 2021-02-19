import { binaryToDecimal } from "../../src/Conversions/BinaryToDecimal";

describe(binaryToDecimal, () => {
	it("should convert binary to decimal: 111001 = 57", () => {
		expect(binaryToDecimal("111001")).toStrictEqual(57);
	});

	it("should convert binary to decimal: 101 = 5", () => {
		expect(binaryToDecimal("101")).toStrictEqual(5);
	});
});
