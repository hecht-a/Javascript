import { decrypt } from "../../../src/Ciphers/VigenerCipher/Decrypt";

describe(decrypt, () => {
	it("should decrypt 'Jsopq Zstzg!' with the key 'code': Jsopq Zstzg! = Hello World!", () => {
		expect(decrypt("Jsopq Zstzg!", "code")).toStrictEqual("Hello World!");
	});
});
