export function radixSort(list: number[], radix = 10): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();

	let maxLength = false;
	let placement = 1;

	while (!maxLength) {
		maxLength = true;
		const buckets: number[][] = [];

		for (let i = 0; i < radix; i++) {
			buckets.push([]);
		}

		for (let j = 0; j < copy.length; j++) {
			const tmp = copy[j] / placement;
			buckets[Math.floor(tmp % radix)].push(copy[j]);
			if (maxLength && tmp > 0) {
				maxLength = false;
			}
		}

		let a = 0;
		for (let b = 0; b < radix; b++) {
			const buck = buckets[b];
			for (let k = 0; k < buck.length; k++) {
				copy[a] = buck[k];
				a++;
			}
		}
		placement *= radix;
	}
	return copy;
}
