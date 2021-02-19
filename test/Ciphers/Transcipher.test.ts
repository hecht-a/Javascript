import { transcipher } from "../../src/Ciphers/Transcipher";

describe(transcipher, () => {
	it("should transcript the text", () => {
		expect(transcipher("coucou")).toBe("pbhpbh");
	});

	it("should decrypt the texte", () => {
		expect(transcipher("pbhpbh")).toBe("coucou");
	});
});
