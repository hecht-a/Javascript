interface RGB {
	r: number | string;
	g: number | string;
	b: number | string;
}

export function RGBToHex(rgb: (number | string)[] | RGB): string {
	let r;
	let g;
	let b;
	if (rgb instanceof Array) {
		[r, g, b] = rgb;
	} else {
		r = rgb.r;
		g = rgb.g;
		b = rgb.b;
	}

	const toHex = (n: number | string): string => (typeof n === "string"
		? Number.parseInt(n, 10)
		: n || "0").toString(16).padStart(2, "0");

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
