export class SHA {
	message: string;

	private CHAR_SIZE: number;

	constructor(message: string, charSize?: number) {
		this.message = message;
		this.CHAR_SIZE = charSize || 8;
	}

	public pad(str: string, bits: number): string {
		let res = str;
		while (res.length % bits !== 0) {
			res = `0${res}`;
		}
		return res;
	}

	public chunkify(str: string, size: number): string[] {
		const chunks: string[] = [];
		for (let i = 0; i < str.length; i += size) {
			chunks.push(str.slice(i, i + size));
		}
		return chunks;
	}

	public rotateLeft(bits: string, turns: number): string {
		return bits.substr(turns) + bits.substr(0, turns);
	}

	public rotateRight(bits: string, turns: number): string {
		return bits.substr(bits.length - turns) + bits.substr(0, bits.length - turns);
	}

	public preProcess(): string {
		let m = `${this.message.split("")
			.map((e) => e.charCodeAt(0))
			.map((e) => e.toString(2))
			.map((e) => this.pad(e, 8))
			.join("")}1`;
		while (m.length % 512 !== 448) {
			m += "0";
		}
		let ml = (this.message.length * this.CHAR_SIZE).toString(2);
		ml = this.pad(ml, 8);
		ml = "0".repeat(64 - ml.length) + ml;
		return m + ml;
	}
}
