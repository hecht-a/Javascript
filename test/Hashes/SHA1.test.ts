import { SHA1 } from "../../src/Hashes/SHA1";

describe(SHA1, () => {
	it("should hash ''", () => {
		expect(new SHA1("").hash())
	    .toStrictEqual("da39a3ee5e6b4b0d3255bfef95601890afd80709");
	});
	const string = "Hashing test";
	it("should hash string (charSize=8)", () => {
		expect(new SHA1(string).hash())
			.toStrictEqual("95c04ab1d1216dcd13ff5fa9b33f6c11f40ecf8a");
	});

	it("should hash string (charSize=16)", () => {
		expect(new SHA1(string, 16).hash())
			.toStrictEqual("8d5e5daaa9f573f6071579f60d7a7ebe45c2ec02");
	});
});
