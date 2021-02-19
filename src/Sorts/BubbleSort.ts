import { isSorted } from "../utils/isSorted";

export function bubbleSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();
	const len = list.length;

	for (let i = len - 1; i > 0; i--) {
		for (let j = len - 1; j > 0; j--) {
			if (copy[j] < copy[j - 1]) {
				[copy[j], copy[j - 1]] = [copy[j - 1], copy[j]];
			}
		}
	}
	return copy;
}

export function bubbleSortBis(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();
	while (!isSorted(copy)) {
		for (let i = 0; i < copy.length - 1; i++) {
			if (copy[i] > copy[i + 1]) {
				[copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
			}
		}
	}
	return copy;
}
