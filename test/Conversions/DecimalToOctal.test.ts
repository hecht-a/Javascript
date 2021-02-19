import { decimalToOctal } from "../../src/Conversions/DecimalToOctal";

describe(decimalToOctal, () => {
	it("should convert decimal to octal: 2 = 2", () => {
		expect(decimalToOctal(2)).toStrictEqual(2);
	});

	it("should convert decimal to octal: 8 = 10", () => {
		expect(decimalToOctal(8)).toStrictEqual(10);
	});

	it("should convert decimal to octal: 65 = 101", () => {
		expect(decimalToOctal(65)).toStrictEqual(101);
	});

	it("should convert decimal to octal: 216 = 330", () => {
		expect(decimalToOctal(216)).toStrictEqual(330);
	});

	it("should convert decimal to octal: 512 = 1000", () => {
		expect(decimalToOctal(512)).toStrictEqual(1000);
	});
});
