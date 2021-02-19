export function cocktailShakerSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();
	for (let i = copy.length - 1; i > 0; i--) {
		for (let j = copy.length - 1; j > 0; j--) {
			if (copy[j] < copy[j - 1]) {
				[copy[j], copy[j - 1]] = [copy[j - 1], copy[j]];
			}
		}

		// Forwards
		for (let j = 0; j < i; j++) {
			if (copy[j] > copy[j + 1]) {
				[copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
			}
		}
	}

	return copy;
}
