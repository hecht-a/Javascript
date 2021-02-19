export function selectionSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();

	const { length } = copy;
	for (let i = 0; i < length - 1; i++) {
		if (typeof copy[i] !== "number") {
			throw new TypeError("One of the copy in your array is not a number");
		}
		let min = i;
		for (let j = i + 1; j < length; j++) {
			if (copy[j] < copy[min]) {
				min = j;
			}
		}
		if (min !== i) {
			[copy[i], copy[min]] = [copy[min], copy[i]];
		}
	}
	return copy;
}
