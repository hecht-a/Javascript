export class Dijkstra {
	private createdGraph: number[][][];

	vertices: number;

	public constructor(vertices: number, graph: number[][]) {
		this.vertices = vertices;
		this.createdGraph = this.createGraph(vertices, graph);
	}

	private createGraph(vertices: number, edges: number[][]): number[][][] {
		const adjencyList: number[][][] = [];
		for (let i = 0; i < vertices; i++) {
			adjencyList.push([]);
		}
		for (let i = 0; i < edges.length; i++) {
			adjencyList[edges[i][0]].push([edges[i][1], edges[i][2]]);
			adjencyList[edges[i][1]].push([edges[i][0], edges[i][2]]);
		}
		return adjencyList;
	}

	public djikstra(src: number): number[][] {
		const vis = Array(this.vertices).fill(0);
		const dist = [];
		for (let i = 0; i < this.vertices; i++) { dist.push([10000, -1]); }
		dist[src][0] = 0;

		for (let i = 0; i < this.vertices - 1; i++) {
			let mn = -1;
			for (let j = 0; j < this.vertices; j++) {
				if (vis[j] === 0) {
					if (mn === -1 || dist[j][0] < dist[mn][0]) { mn = j; }
				}
			}

			vis[mn] = 1;
			for (let j = 0; j < this.createdGraph[mn].length; j++) {
				const edge = this.createdGraph[mn][j];
				if (vis[edge[0]] === 0 && dist[edge[0]][0] > dist[mn][0] + edge[1]) {
					dist[edge[0]][0] = dist[mn][0] + edge[1];
					dist[edge[0]][1] = mn;
				}
			}
		}
		return dist;
	}
}
