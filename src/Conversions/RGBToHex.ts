interface RGB {
	r: number;
	g: number;
	b: number;
}

export function RGBToHex(rgb: number[] | RGB): string {
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

	const toHex = (n: number): string => (n || "0").toString(16).padStart(2, "0");

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
