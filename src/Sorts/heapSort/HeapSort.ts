import { swap } from "../../utils/swap";
import { heapify } from "./heapify";
import { heapRoot } from "./heapRoot";

export function heapSortV1(list: number[]): number[] {
	let copy = list.slice();
	const { length } = copy;

	for (let i = Math.floor(length / 2) - 1; i > -1; i--) {
		copy = heapify(copy, i, length);
	}
	for (let j = length - 1; j > 0; j--) {
		const tmp = copy[0];
		copy[0] = copy[j];
		copy[j] = tmp;
		copy = heapify(copy, 0, j);
	}
	return copy;
}

export function heapSortV2(list: number[]): number[] {
	let copy = list.slice();
	let { length } = copy;

	for (let i = Math.floor(length / 2); i >= 0; i -= 1) {
		copy = heapRoot(copy, i, length);
	}

	for (let i = copy.length - 1; i > 0; i--) {
		copy = swap(copy, 0, i);
		length--;

		copy = heapRoot(copy, 0, length);
	}
	return copy;
}
