import { encrypt } from "../../../src/Ciphers/VigenerCipher/Encrypt";

describe(encrypt, () => {
	it("should encrypt 'Hello World!' with the key 'code': Hello World! = Jsopq Zstzg!", () => {
		expect(encrypt("Hello World!", "code")).toStrictEqual("Jsopq Zstzg!");
	});
});
