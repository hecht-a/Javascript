export function quickSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}
	const copy = list.slice();

	const PIVOT = copy[0];
	const GREATER = [];
	const LESSER = [];

	for (let i = 1; i < copy.length; i++) {
		if (copy[i] > PIVOT) {
			GREATER.push(copy[i]);
		} else {
			LESSER.push(copy[i]);
		}
	}
	const sorted = quickSort(LESSER);
	sorted.push(PIVOT);
	return sorted.concat(quickSort(GREATER));
}
