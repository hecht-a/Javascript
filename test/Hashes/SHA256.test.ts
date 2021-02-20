import { SHA256 } from "../../src/Hashes/SHA256";

describe(SHA256, () => {
	it("should hash ''", () => {
		expect(new SHA256("").hash())
			.toStrictEqual("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
	});

	const string = "Hashing test";
	it("should hash string (charSize=8)", () => {
		expect(new SHA256(string).hash())
			.toStrictEqual("27a6947478c4153ced3f82a81932501d703add116bee7c8048a84bcb00b8676c");
	});

	it("should hash string (charSize=16)", () => {
		expect(new SHA256(string, 16).hash())
			.toStrictEqual("a03830297a08d6e5588d56bd578896354b830ce86a68bec52de6a9536752558b");
	});
});
