export function flashSort(list: number[]): number[] {
	const copy = list.slice();
	let min = copy[0];
	let max = 0;
	const n = copy.length;
	const m = Math.floor(0.45 * n);
	const l = new Array(m);

	for (let i = 1; i < n; ++i) {
		if (copy[i] < min) {
			min = copy[i];
		}
		if (copy[i] > copy[max]) {
			max = i;
		}
	}

	if (min === copy[max]) {
		return copy;
	}

	const c1 = (m - 1) / (copy[max] - min);

	for (let k = 0; k < m; k++) {
		l[k] = 0;
	}

	for (let j = 0; j < n; ++j) {
		const k = Math.floor(c1 * (copy[j] - min));
		++l[k];
	}

	for (let p = 1; p < m; ++p) {
		l[p] += l[p - 1];
	}

	let hold = copy[max];
	// eslint-disable-next-line prefer-destructuring
	copy[max] = copy[0];
	copy[0] = hold;

	// permutation
	let move = 0; let t; let flash;
	let j = 0;
	let k = m - 1;

	while (move < (n - 1)) {
		while (j > (l[k] - 1)) {
			++j;
			k = Math.floor(c1 * (copy[j] - min));
		}
		if (k < 0) { break; }
		flash = copy[j];
		while (j !== l[k]) {
			k = Math.floor(c1 * (flash - min));
			hold = copy[t = --l[k]];
			copy[t] = flash;
			flash = hold;
			++move;
		}
	}

	// insertion
	for (j = 1; j < n; j++) {
		hold = copy[j];
		let i = j - 1;
		while (i >= 0 && copy[i] > hold) {
			copy[i + 1] = copy[i--];
		}
		copy[i + 1] = hold;
	}
	return copy;
}
