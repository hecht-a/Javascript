export function wiggleSort(list: number[]): number[] {
	const copy = list.slice();
	for (let i = 0; i < copy.length; ++i) {
		const shouldNotBeLessThan = i % 2;
		const isLessThan = copy[i] < copy[i + 1];
		if (shouldNotBeLessThan && isLessThan) {
			[copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
		}
	}
	return copy;
}
