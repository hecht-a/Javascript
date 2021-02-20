type Comparator = -1 | 0 | 1;

export function comparator(v1: number, v2: number): Comparator {
	// eslint-disable-next-line no-nested-ternary
	if (v1 < v2) {
		return -1;
	}
	if (v2 < v1) {
		return 1;
	}
	return 0;
}
