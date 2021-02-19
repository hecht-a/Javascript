import { hexToRGB } from "../../src/Conversions/HexToRGB";

describe(hexToRGB, () => {
	it("should convert hexadecimal to rgb: #ffffff = {r: 255, g: 255, b: 255}", () => {
		expect(hexToRGB("#ffffff")).toStrictEqual({ r: 255, g: 255, b: 255 });
	});

	it("should convert hexadecimal to rgb: ffffff = {r: 255, g: 255, b: 255}", () => {
		expect(hexToRGB("ffffff")).toStrictEqual({ r: 255, g: 255, b: 255 });
	});

	it("should convert hexadecimal to rgb: #fff = {r: 255, g: 255, b: 255}", () => {
		expect(hexToRGB("#fff")).toStrictEqual({ r: 255, g: 255, b: 255 });
	});

	it("should convert hexadecimal to rgb: fff = {r: 255, g: 255, b: 255}", () => {
		expect(hexToRGB("fff")).toStrictEqual({ r: 255, g: 255, b: 255 });
	});

	it("should convert hexadecimal to rgb: #ff6347 = {r: 255, g: 99, b: 71}", () => {
		expect(hexToRGB("#ff6347")).toStrictEqual({ r: 255, g: 99, b: 71 });
	});

	it("should convert hexadecimal to rgb: ff6347 = {r: 255, g: 99, b: 71}", () => {
		expect(hexToRGB("ff6347")).toStrictEqual({ r: 255, g: 99, b: 71 });
	});
});
