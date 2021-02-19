interface FinishingTimeList {
	node: number;
	finishTime: number;
}

export class TopologicalSorter {
	private graph: Record<number, number[]>;

	private isVisitedNode: Record<number, boolean>;

	private finishTimeCount: number;

	private finishingTimeList: FinishingTimeList[];

	private nextNode: number;

	public constructor(graph?: Record<number, number[]>) {
		this.graph = graph || {};
		this.isVisitedNode = {};
		this.finishTimeCount = 0;
		this.finishingTimeList = [];
		this.nextNode = 0;
	}

	public addOrder(nodeA: number, nodeB: number): TopologicalSorter {
		this.graph[nodeA] = this.graph[nodeA] || [];
		this.graph[nodeA].push(nodeB);
		return this;
	}

	public sortAndGetOrderedItems(): number | number[] {
		this.isVisitedNode = Object.create(null);
		this.finishTimeCount = 0;
		this.finishingTimeList = [];

		for (const node in this.graph) {
			if (Object.prototype.hasOwnProperty.call(this.graph, node) && !this.isVisitedNode[node]) {
				this.dfsTraverse(Number(node));
			}
		}

		this.finishingTimeList.sort((item1, item2) => (item1.finishTime > item2.finishTime
			? -1
			: 1));

		return this.finishingTimeList.map((value) => value.node);
	}

	private dfsTraverse(node: number): void {
		this.isVisitedNode[node] = true;
		if (this.graph[node]) {
			for (let i = 0; i < this.graph[node].length; i++) {
				this.nextNode = this.graph[node][i];
				if (this.isVisitedNode[this.nextNode]) {
					continue;
				}
				this.dfsTraverse(this.nextNode);
			}
		}

		this.finishingTimeList.push({
			node,
			finishTime: ++this.finishTimeCount,
		});
	}
}
