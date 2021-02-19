import { rot13 } from "../../src/Ciphers/CaesarsCipher";

describe(rot13, () => {
	it("should encrypt the text: Uryyb Jbeyq = Hello World", () => {
		expect(rot13("Uryyb Jbeyq")).toStrictEqual("Hello World");
	});

	it("should encrypt the text: Hello World = Uryyb Jbeyq", () => {
		expect(rot13("Hello World")).toStrictEqual("Uryyb Jbeyq");
	});
});
