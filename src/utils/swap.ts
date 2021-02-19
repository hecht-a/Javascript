export function swap(list: number[], indexA: number, indexB: number): number[] {
	const copy = list.slice();
	[copy[indexA], copy[indexB]] = [copy[indexB], copy[indexA]];
	return copy;
}
