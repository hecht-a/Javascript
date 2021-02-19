export function cycleSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();

	for (let i = 0; i < copy.length; i++) {
		let value = copy[i];
		let pos = i;

		for (let j = i + 1; j < copy.length; j++) {
			if (copy[j] < value) {
				pos++;
			}
		}

		if (pos === i) {
			continue;
		}

		while (value === copy[pos]) {
			pos++;
		}

		const oldValue = copy[pos];
		copy[pos] = value;
		value = oldValue;

		while (pos !== i) {
			pos = i;
			for (let j = i + 1; j < copy.length; j++) {
				if (copy[j] < value) {
					pos++;
				}
			}

			while (value === copy[pos]) {
				pos++;
			}
			const oldValueCycle = copy[pos];
			copy[pos] = value;
			value = oldValueCycle;
		}
	}
	return copy;
}
