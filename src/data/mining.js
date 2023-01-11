export const ACTIONS = {
	mineSand: {
		time: 3,
		item: "iron",
		icon: require("@/assets/art/mining/OreGlass.png"),
		xp: 10,
		requiredLevel: 1
	},
	mineIron: {
		time: 3,
		item: "copper",
		icon: require("@/assets/art/mining/OreIron.png"),
		xp: 14,
		requiredLevel: 20
	},
	mineSilver: {
		time: 3,
		item: "bronze",
		icon: require("@/assets/art/mining/OreSilver.png"),
		xp: 18,
		requiredLevel: 40
	},
	mineGold: {
		time: 3,
		item: "cobalt",
		icon: require("@/assets/art/mining/OreGold.png"),
		xp: 22,
		requiredLevel: 60
	},
	mineTitanium: {
		time: 3,
		item: "manganese",
		icon: require("@/assets/art/mining/OreTitanium.png"),
		xp: 26,
		requiredLevel: 80
	},
	mineUranium: {
		time: 3,
		item: "tin",
		icon: require("@/assets/art/mining/OreUranium.png"),
		xp: 30,
		requiredLevel: 100
	},
	minePlasma: {
		time: 3,
		item: "silicate",
		icon: require("@/assets/art/mining/OrePlasma.png"),
		xp: 30,
		requiredLevel: 100
	},
	mineDiamond: {
		time: 3,
		item: "silver",
		icon: require("@/assets/art/mining/OreDiamond.png"),
		xp: 34,
		requiredLevel: 120
	},
	mineAlien: {
		time: 3,
		item: "bauxite",
		icon: require("@/assets/art/mining/OreAlien.gif"),
		xp: 38,
		requiredLevel: 140,
	},
	mineBluespace: {
		time: 3,
		item: "gold",
		icon: require("@/assets/art/mining/OreBluespace.png"),
		xp: 42,
		requiredLevel: 160
	},
	mineBananium: {
		time: 3,
		item: "dolomite",
		icon: require("@/assets/art/mining/OreBanana.png"),
		xp: 46,
		requiredLevel: 180
	},
	mineBananium: {
		time: 3,
		item: "obsidian",
		icon: require("@/assets/art/mining/OreBanana.png"),
		xp: 50,
		requiredLevel: 200
	},
	mineBananium: {
		time: 3,
		item: "sepiolite",
		icon: require("@/assets/art/mining/OreBanana.png"),
		xp: 50,
		requiredLevel: 200
	},
}

export const JOB = {
	id: "mining",
	name: "Mining",
	icon: require("@/assets/art/mining/icon.png"),
	color: "#95857a"
}
