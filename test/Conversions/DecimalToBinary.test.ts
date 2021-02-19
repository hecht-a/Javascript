import { decimalToBinary } from "../../src/Conversions/DecimalToBinary";

describe(decimalToBinary, () => {
	it("should convert decimal to binary: 2 = 10", () => {
		expect(decimalToBinary(2)).toStrictEqual("10");
	});

	it("should convert decimal to binary: 7 = 111", () => {
		expect(decimalToBinary(7)).toStrictEqual("111");
	});

	it("should convert decimal to binary: 35 = 100011", () => {
		expect(decimalToBinary(35)).toStrictEqual("100011");
	});
});
