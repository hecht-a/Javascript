export function insertionSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}
	const copy = list.slice();
	let j;
	for (let i = 1; i < copy.length; i++) {
		const tmp = copy[i]; // Copy of the current element.
		/* Check through the sorted part and compare with the number in tmp. If large, shift the number */
		for (j = i - 1; j >= 0 && (copy[j] > tmp); j--) {
			// Shift the number
			copy[j + 1] = copy[j];
		}
		// Insert the copied number at the correct position
		// in sorted part.
		copy[j + 1] = tmp;
	}
	return copy;
}
