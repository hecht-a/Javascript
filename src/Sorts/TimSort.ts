/**
 * @function performs insertion sort on the partition
 * @param {Array} array array to be sorted
 * @param {Number} left left index of partiton
 * @param {Number} right right index of partition
 */

function insertionSort(list: number[], left: number, right: number): number[] {
	const copy = list.slice();
	for (let i = left + 1; i <= right; i++) {
		const key = copy[i];
		let j = i - 1;
		while (j >= left && copy[j] > key) {
			copy[j + 1] = copy[j];
			j--;
		}
		copy[j + 1] = key;
	}
	return copy;
}

/**
 * @function merges two sorted partitions
 * @param {Array} array array to be sorted
 * @param {Number} left left index of partition
 * @param {Number} mid mid index of partition
 * @param {Number} right right index of partition
 */

function merge(list: number[], left: number, mid: number, right: number): void | number[] {
	const copy = list.slice();

	if (mid >= right) {
		return;
	}

	const len1 = mid - left + 1;
	const len2 = right - mid;
	const larr = Array(len1);
	const rarr = Array(len2);

	for (let i = 0; i < len1; i++) {
		larr[i] = copy[left + i];
	}

	for (let i = 0; i < len2; i++) {
		rarr[i] = copy[mid + 1 + i];
	}

	let i = 0; let j = 0; let k = left;
	while (i < larr.length && j < rarr.length) {
		if (larr[i] < rarr[j]) {
			copy[k++] = larr[i++];
		} else {
			copy[k++] = rarr[j++];
		}
	}

	while (i < larr.length) {
		copy[k++] = larr[i++];
	}

	while (j < rarr.length) {
		copy[k++] = rarr[j++];
	}

	return copy;
}

export function timSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	let copy = list.slice();

	const RUN = 32;
	const n = copy.length;
	// Sorting the partitions using Insertion Sort
	for (let i = 0; i < n; i += RUN) {
		copy = insertionSort(copy, i, Math.min(i + RUN - 1, n - 1));
	}
	for (let size = RUN; size < n; size *= 2) {
		for (let left = 0; left < n; left += 2 * size) {
			const mid = left + size - 1;
			const right = Math.min(left + 2 * size - 1, n - 1);
			const temp = merge(copy, left, mid, right);
			copy = temp || copy;
		}
	}
	return copy;
}
