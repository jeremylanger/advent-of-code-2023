const testInput = `Time:      7  15   30
Distance:  9  40  200`;

const input = `Time:        34     90     89     86
Distance:   204   1713   1210   1780`;

const part1 = () => {
	const getValuesFromLine = (line) => line.split(":")[1].split(" ").filter(x => x !== "").map(x => +x);

	const [timeLine, distanceLine] = input.split("\n");
	const times = getValuesFromLine(timeLine);
	const records = getValuesFromLine(distanceLine);

	let total = 1;
	for (i = 0; i < times.length; i++) {
		let time = times[i];
		let waysToWin = 0;
		for (let speed = 0; speed <= time; speed++) {
			const distance = speed * (time - speed);
			if (distance > records[i]) waysToWin++;
		}
		total *= waysToWin;
	}

	return total;
};
console.log(part1());

const part2 = () => {
	const getValuesFromLine = (line) => line.split(":")[1].split(" ").filter(x => x !== "").map(x => +x);

	const [timeLine, distanceLine] = input.split("\n");
	const times = getValuesFromLine(timeLine);
	const records = getValuesFromLine(distanceLine);
	const time = +times.join("");
	const record = +records.join("");

	let waysToWin = 0;
	for (i = 0; i < time; i++) {
		let speed = i;
		const distance = speed * (time - speed);
		if (distance > record) waysToWin++;
	}

	return waysToWin;
};
console.log(part2());