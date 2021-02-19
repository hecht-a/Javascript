export class DisjointSetTreeNode {
	key: string;

	parent: this;

	rank: number;

	public constructor(key: string) {
		this.key = key;
		this.parent = this;
		this.rank = 0;
	}
}
