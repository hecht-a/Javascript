import { swap } from "./swap";

export function shuffle(list: number[]): number[] {
	let copy = list.slice();
	for (let i = copy.length; i; i--) {
		const m = Math.floor(Math.random() * i);
		copy = swap(copy, m, i - 1);
	}
	return copy;
}
