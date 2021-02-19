import { cocktailShakerSort } from "../../src/Sorts/CocktailShakerSort";

describe(cocktailShakerSort, () => {
	it("should sort the array", () => {
		const arr = [2, 7, 1, 4, 3];
		expect(cocktailShakerSort(arr)).toStrictEqual(arr.sort());
	});
});
