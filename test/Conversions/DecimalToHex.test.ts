import { decimalToHex } from "../../src/Conversions/DecimalToHex";

describe(decimalToHex, () => {
	it("should convert decimal to hexadecimal: 999098 = F3EBA", () => {
		expect(decimalToHex(999098)).toStrictEqual("F3EBA");
	});

	it("should convert decimal to hexadecimal: 123 = 7B", () => {
		expect(decimalToHex(123)).toStrictEqual("7B");
	});
});
