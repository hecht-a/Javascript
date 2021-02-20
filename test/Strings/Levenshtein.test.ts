import { levenstein } from "../../src/Strings/Levenshtein";

describe(levenstein, () => {
	it("should find the distance between the two words", () => {
		expect(levenstein("chien", "niche")).toStrictEqual(4);
		expect(levenstein("maison", "maçon")).toStrictEqual(2);
	});
});
