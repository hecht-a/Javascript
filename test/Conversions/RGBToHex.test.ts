import { RGBToHex } from "../../src/Conversions/RGBToHex";

describe(RGBToHex, () => {
	describe("Conversions with numbers", () => {
		it("should convert RGB to hexadecimal: [255, 255, 255] = #ffffff", () => {
			expect(RGBToHex([255, 255, 255])).toStrictEqual("#ffffff");
		});

		it("should convert RGB to hexadecimal: {r: 255, g: 255, b: 255} = #ffffff", () => {
			expect(RGBToHex({ r: 255, g: 255, b: 255 })).toStrictEqual("#ffffff");
		});

		it("should convert RGB to hexadecimal: [255, 99, 71] = #ff6347", () => {
			expect(RGBToHex({ r: 255, g: 99, b: 71 })).toStrictEqual("#ff6347");
		});

		it("should convert RGB to hexadecimal: {r: 255, g: 99, b: 71} = #ff6347", () => {
			expect(RGBToHex({ r: 255, g: 99, b: 71 })).toStrictEqual("#ff6347");
		});
	});

	describe("Conversions with strings", () => {
		it("should convert RGB to hexadecimal: ['255', '255', '255'] = #ffffff", () => {
			expect(RGBToHex(["255", "255", "255"])).toStrictEqual("#ffffff");
		});

		it("should convert RGB to hexadecimal: {r: '255', g: '255', b: '255'} = #ffffff", () => {
			expect(RGBToHex({ r: "255", g: "255", b: "255" })).toStrictEqual("#ffffff");
		});

		it("should convert RGB to hexadecimal: ['255', '99', '71'] = #ff6347", () => {
			expect(RGBToHex({ r: "255", g: "99", b: "71" })).toStrictEqual("#ff6347");
		});

		it("should convert RGB to hexadecimal: {r: '255', g: '99', b: '71'} = #ff6347", () => {
			expect(RGBToHex({ r: "255", g: "99", b: "71" })).toStrictEqual("#ff6347");
		});
	});
});
