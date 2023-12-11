const testInput = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

const input = `seeds: 950527520 85181200 546703948 123777711 63627802 279111951 1141059215 246466925 1655973293 98210926 3948361820 92804510 2424412143 247735408 4140139679 82572647 2009732824 325159757 3575518161 370114248

seed-to-soil map:
3642212803 1631134559 163560083
490926575 928751267 67070832
557997407 23457277 146367872
1526937660 2215630922 150973756
3370882556 1217101081 21950620
1998387949 1553503793 77630766
1700281630 3586410917 298106319
1677911416 1187175123 22370214
1361013180 1890531530 165924480
157249059 169825149 28413033
1236300152 2104867413 110763509
3048056947 3311996711 274414206
1347063661 1173225604 13949519
3322471153 2056456010 42709335
3400388920 3884517236 61733835
704365279 355487241 15789127
3462122755 1794694642 95836888
4043589752 1302126249 251377544
3601338302 4254092795 40874501
3557959643 4210714136 43378659
3805772886 3946251071 237816866
3365180488 2099165345 5702068
185662092 19444885 4012392
209119369 371276368 153333015
2806369338 4184067937 26646199
720154406 524609383 275667693
189674484 0 19444885
3392833176 1209545337 7555744
362452384 800277076 128474191
1173225604 1239051701 63074548
2833015537 2366604678 215041410
2076018715 2581646088 730350623
0 198238182 157249059

soil-to-fertilizer map:
3460224655 4061418601 42469328
2583088941 2211297482 32584821
332145562 90342895 63482901
2528755615 1387266751 32998710
2197749180 696338617 193485827
2391235007 2169459779 41837703
395628463 1106056857 212736766
158816023 1996130240 173329539
608365229 553497263 142841354
2945065740 425270652 128226611
68473128 0 90342895
2615673762 153825796 271444856
2433072710 3107109424 95682905
3073292351 976556879 129499978
3969026580 3537847573 248317798
751206583 889824444 86732435
837939018 1420265461 575864779
1413803797 2243882303 783945383
4217344378 3460224655 77622918
3502693983 4103887929 191079367
0 1318793623 68473128
3693773350 3786165371 275253230
2887118618 3049162302 57947122
2561754325 3027827686 21334616

fertilizer-to-water map:
1751080383 1821072608 33265395
4137558434 4169230929 125736367
3296451041 3015767106 200702605
0 1326187179 494885429
3623687794 2963533004 52234102
3192345181 2859427144 104105860
1720274003 150099674 16362281
1535290150 1141203326 184983853
1736636284 166461955 14444099
2888685656 3812924581 152666193
3793268338 3216469711 344290096
494885429 0 80107449
2744325907 3668564832 144359749
2708433812 3965590774 35892095
3497153646 4042696781 126534148
4263294801 4011024286 31672495
1844603063 80107449 69992225
3041351849 2708433812 150993332
3675921896 3560759807 107805025
574992878 180906054 960297272
1784345778 1854338003 60257285
3783726921 4001482869 9541417

water-to-light map:
3535151283 3877657516 42746103
649917020 553881424 674909939
3807807238 1821616588 484912477
95679819 472295571 81585853
1324826959 286073377 186222194
4292719715 1819369007 2247581
177265672 1324471182 186577971
2102818048 3206912207 157155638
2259973686 2823586602 100381277
0 1228791363 95679819
3577897386 3851861395 25796121
363843643 0 286073377
2530300196 3364067845 487793550
3018093746 2306529065 90018685
3603693507 4090853565 204113731
2360354963 3920403619 169945233
1819369007 4090348852 504713
1819873720 2923967879 282944328
3108112431 2396547750 427038852

light-to-temperature map:
4211717977 1537920618 83249319
2812170666 2785100632 907832086
3720002752 3692932718 462018744
809029346 1621169937 408226713
2495104775 2468034741 317065891
1890424927 2029396650 438638091
2329063018 740254029 124497721
4182021496 4223726779 29696481
1217256059 864751750 673168868
2453560739 4253423260 41544036
740254029 4154951462 68775317

temperature-to-humidity map:
247604558 3495276000 30921272
1341115815 1344043806 205388222
1546504037 3081217791 414058209
1960562246 0 459661266
0 959204089 247604558
3388962113 1206808647 137235159
278525830 1549432028 563047162
841572992 459661266 499542823
2420223512 2112479190 968738601

humidity-to-location map:
358497203 1012762605 163293355
3035263355 2859367155 247612329
1021885490 1293357218 103090913
4143961841 3795114494 151005455
3578373583 4227561425 8426352
2859178122 2177370950 6068675
0 1639932830 187421121
521790558 232394351 43765724
3838880131 4235987777 10124834
1294200510 23652296 201098270
2865246797 3380887726 170016558
2177370950 4100409404 127152021
3282875684 3954902589 51287689
1124976403 1891601121 169224107
3334163373 3550904284 244210210
565556282 224750566 7643785
3586799935 2183439625 194442871
573200067 0 23652296
3781242806 3946119949 8782640
2716371460 3238081064 142806662
2304522971 2377882496 116771158
3790025446 4246112611 48854685
1495298780 447236157 565526448
596852363 1585957916 53974914
840337062 1827353951 64247170
187421121 276160075 171076082
2622152334 4006190278 94219126
2491050754 3106979484 131101580
650827277 1396448131 189509785
2421294129 2789610530 69756625
3849004965 2494653654 294956876
904584232 1176055960 117301258`;

// 50 98 2 // Destination range start, source range start, range length
//   50,51 destination range and 98,99 source range
//   98->50, 99->51
// 52 50 48
//   50->52, 51->53, 52->54, 53->55, 54->56, 55->57 ...97->99
// seed-to-soil map: // Source to destination

// Soil to fertilizer
// 0 15 37
//   15->0, 16->1 ... 51->36
// 37 52 2
//   52->37, 53->38
// 39 0 15
//   0->39, 1->40, ..., 14->53

// Seed 79 -> Soil 81
// Seed 14 -> Soil 14
// Seed 55 -> Soil 57
// Seed 13 -> Soil 13

// Soil 81 -> Fertilizer 81
// Soil 14 -> Fertilizer 53
// Soil 57 -> Fertilizer 57
// Soil 13 -> Fertilizer 52

// Can we just create a bunch of maps for this?
// seedToSoilMap = {
//   98: 50
//   99: 51
//   50: 52
//   51: 53
//   ...
// }

// Just parse the input into maps, then go through the logic:
// Could do a dynamic looping from map to map, but Imma just hard code it cuz it's faster
// If the map doesn't have the key, then use the same number and move on to the next map
// Then just have a variable at the end for the lowest location using Math.min

// Split by 2 newlines to get each map
// Shift the first from maps to get the seeds
// For each map...
//   Send it to a helper function `getFormattedMap`
//     Split by newline and shift the first element to get the name of the map and the keys
//     Add the key to the modes if it's not already in there (we can assume the map to map order is already in order in the input, so we can increment through these "modes" without any special logic)
//     For each key...
//       Split by space
//       Create a for loop that goes until the third value
// Init an empty locations array
// For each seed...
//   Init modeIndex to 0
//   Get modes[modeIndex]

// const mode = ['seed-to-soil map:', 'soil-to-fertilizer map:']
// const bigMap = {
// 	'seed-to-soil map:': {
// 		98: 50,
// 		99: 51,
// 		50: 52,
// 		51: 53,
// 	},
// }

// const part1 = () => {
// 	const bigMap = {};
// 	const modes = [];

// 	const getFormattedMap = (map) => {
// 		const formattedMap = {};
// 		const keys = map.split("\n");
// 		const name = keys.shift();

// 		if (!modes.includes(name)) modes.push(name);
// 		for (const key of keys) {
// 			const [destStart, sourceStart, range] = key.split(" ");
// 			for (let i = 0; i < range; i++) {
// 				formattedMap[+sourceStart + i] = +destStart + i;
// 			}
// 		}

// 		bigMap[name] = formattedMap;
// 	};

// 	const maps = testInput.split("\n\n");
// 	let seedsLine = maps.shift();
// 	for (const map of maps) {
// 		getFormattedMap(map);
// 	}

// 	// Get seeds into an array
// 	seedsLine = seedsLine.replace("seeds: ", "");
// 	const seeds = seedsLine.split(" ");
// 	let closestLocation = Infinity;
// 	// For each seed...
// 	for (const seed of seeds) {
// 		let curr = seed;
// 		for (const mode of modes) {
// 			curr = bigMap[mode][curr] ?? curr;
// 			// console.log(`${mode} ${seed}->${curr}`);
// 		}
// 		closestLocation = Math.min(curr, closestLocation);
// 	}

// 	return closestLocation;
// }
// console.log(part1());

// Ok, we're out of memory. Instead of using a key/value pair for each possible combo, what could we do?
// seedToSoilMap = [
//   { start: 98, end: 99, destinationDifference: -48 }
//   { start: 50, end: 97, destinationDifference: 2 }
// ]
// For each entry...
//   If curr (seed) is >= start AND curr <= end
//     Add destinationDifference to curr
//     Stop going through the entries in the "map"

// const part1 = () => {
// 	const bigMap = {};
// 	const modes = [];

// 	const getFormattedMap = (map) => {
// 		const formattedMap = [];
// 		const keys = map.split("\n");
// 		const name = keys.shift();

// 		if (!modes.includes(name)) modes.push(name);
// 		for (const key of keys) {
// 			const [destStart, sourceStart, range] = key.split(" ");
// 			const end = +sourceStart + +range - 1;
// 			const destinationDiff = +destStart - +sourceStart;
// 			formattedMap.push({ start: +sourceStart, end, destinationDiff });
// 		}

// 		bigMap[name] = formattedMap;
// 	};

// 	const getMappedValue = (curr, mode) => {
// 		for (const { start, end, destinationDiff } of bigMap[mode]) {
// 			if (curr >= start && curr <= end) {
// 				return curr + destinationDiff;
// 			}
// 		}

// 		return curr;
// 	}

// 	const maps = testInput.split("\n\n");
// 	let seedsLine = maps.shift();
// 	for (const map of maps) {
// 		getFormattedMap(map);
// 	}
// 	console.log(seedsLine)
// 	console.log(bigMap)

// 	// Get seeds into an array
// 	seedsLine = seedsLine.replace("seeds: ", "");
// 	const seeds = seedsLine.split(" ");
// 	let closestLocation = Infinity;
// 	// For each seed...
// 	for (const seed of seeds) {
// 		let curr = +seed;
// 		for (const mode of modes) {
// 			curr = getMappedValue(curr, mode);
// 			console.log(`${mode} ${seed}->${curr}`);
// 		}
// 		closestLocation = Math.min(curr, closestLocation);
// 	}

// 	return closestLocation;
// }
// console.log(part1());

// seeds: [
//   { start: 79, end: 92 },
//   { start: 55, end: 67 },
// ]

// THIS IS DEFINITELY A HARDCODED SOLUTION.
// I JUST LET THIS BAD BOY RUN FOR LIKE 15 MINUTES AND IT WORKED.
// PART 2 PROBABLY NEEDS AN ENTIRELY DIFFERENT APPROACH.
const part2 = () => {
	const bigMap = {};
	const modes = [];

	const getFormattedMap = (map) => {
		const formattedMap = [];
		const keys = map.split("\n");
		const name = keys.shift();

		if (!modes.includes(name)) modes.push(name);
		for (const key of keys) {
			const [destStart, sourceStart, range] = key.split(" ");
			const end = +sourceStart + +range - 1;
			const destinationDiff = +destStart - +sourceStart;
			formattedMap.push({ start: +sourceStart, end, destinationDiff });
		}

		bigMap[name] = formattedMap;
	};

	const getMappedValue = (curr, mode) => {
		for (const { start, end, destinationDiff } of bigMap[mode]) {
			if (curr >= start && curr <= end) {
				return curr + destinationDiff;
			}
		}

		return curr;
	}

	const maps = testInput.split("\n\n");
	let seedsLine = maps.shift();
	for (const map of maps) {
		getFormattedMap(map);
	}
	console.log(seedsLine)
	console.log(bigMap)

	// Get seeds into an array
	seedsLine = seedsLine.replace("seeds: ", "");
	seedsLine = seedsLine.split(" "); // ["79", "14", "55", "13"]
	let closestLocation = Infinity;
	let totalIterations = 0;
	for (let i = 0; i < seedsLine.length; i += 2) totalIterations += +seedsLine[i + 1];
	for (let i = 0; i < seedsLine.length; i += 2) {
		// console.log(i, seedsLine.length, `${(+seedsLine[i + 1]) / totalIterations}`);
		for (let j = 0; j < +seedsLine[i + 1]; j++) {
			let curr = +seedsLine[i] + j;
			for (const mode of modes) {
				curr = getMappedValue(curr, mode);
				// console.log(`${mode} ${seed}->${curr}`);
			}
			closestLocation = Math.min(curr, closestLocation);
		}
	}

	return closestLocation;
}
console.log(part2()); // Solution: 125742456
// If I wanted to spend more time on this, I'd think of the ranges like filters:
// For each range in a map...
//   Add the start and destinationDiff
//   Update the minimum ending value for the map

/*
{
	'seed-to-soil map:': [ // Min output: 50, Min input: 50
		{ start: 98, end: 99, destinationDiff: -48 }, // 50
		{ start: 50, end: 97, destinationDiff: 2 }    // 52
	],
	'soil-to-fertilizer map:': [ // Min output: 0, Min input: 0
		{ start: 15, end: 51, destinationDiff: -15 }, // 0
		{ start: 52, end: 53, destinationDiff: -15 }, // 37
		{ start: 0, end: 14, destinationDiff: 39 }    // 39
	],
	'fertilizer-to-water map:': [ // Min output: 0, Min input: 0
		{ start: 53, end: 60, destinationDiff: -4 },  // 49
		{ start: 11, end: 52, destinationDiff: -11 }, // 0
		{ start: 0, end: 6, destinationDiff: 42 },    // 42
		{ start: 7, end: 10, destinationDiff: 50 }    // 57
	],
	'water-to-light map:': [ // Min output: 18, Min input: 18
		{ start: 18, end: 24, destinationDiff: 70 },  // 88
		{ start: 25, end: 94, destinationDiff: -7 }   // 18
	],
	'light-to-temperature map:': [ Min output: 45, Min input: 45
		{ start: 77, end: 99, destinationDiff: -32 }, // 45
		{ start: 45, end: 63, destinationDiff: 36 },  // 81
		{ start: 64, end: 76, destinationDiff: 4 }    // 68
	],
	'temperature-to-humidity map:': [ // Min output: 0, Min input: 0
		{ start: 69, end: 69, destinationDiff: -69 }, // 0
		{ start: 0, end: 68, destinationDiff: 1 }     // 1
	],
	'humidity-to-location map:': [ // Min output: 56, Min input: 56
		{ start: 56, end: 92, destinationDiff: 4 },   // 60
		{ start: 93, end: 96, destinationDiff: -37 }  // 56
	]
}
*/