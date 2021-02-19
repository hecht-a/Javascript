/* eslint-disable @typescript-eslint/no-unused-expressions */
export class Node {
	data: number;

	left: Node;

	right: Node;

	constructor(data: number) {
		this.data = data;
		this.left = new Node(0);
		this.right = new Node(0);
	}
}
