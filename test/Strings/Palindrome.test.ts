import { palindrome } from "../../src/Strings/Palindrome";

describe(palindrome, () => {
	it("should return true", () => {
		expect(palindrome("madam")).toBeTruthy();
	});

	it("should return false", () => {
		expect(palindrome("hello")).toBeFalsy();
	});
});
