export function levenstein(firstSeq: string, secondSeq: string): number {
	const d = [];
	for (let i = 0; i <= firstSeq.length; i++) {
		d[i] = [i];
	}
	for (let j = 0; j <= secondSeq.length; j++) {
		d[0][j] = j;
	}
	for (let i = 1; i <= firstSeq.length; i++) {
		for (let j = 1; j <= secondSeq.length; j++) {
			const cost = firstSeq[i - 1] === secondSeq[j - 1]
				? 0
				: 1;
			d[i][j] = Math.min(
				d[i - 1][j] + 1,
				d[i][j - 1] + 1,
				d[i - 1][j - 1] + cost,
			);
		}
	}
	return d[firstSeq.length][secondSeq.length];
}
