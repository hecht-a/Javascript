import { XORCipher } from "../../src/Ciphers/XORCipher";

describe(XORCipher, () => {
	it("should encrypt the text: text string = TESTSTRING", () => {
		expect(XORCipher("test string", 32)).toStrictEqual("TEST STRING");
	});

	it("should decrypt the text: TESTSTRING = test string", () => {
		expect(XORCipher("TESTSTRING", 32)).toStrictEqual("teststring");
	});
});
