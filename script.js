const brawlers = [
    "8-Bit",
    "Alli",
    "Amber",
    "Angelo",
    "Ash",
    "Barley",
    "Bea",
    "Belle",
    "Berry",
    "Bibi",
    "Bolt",
    "Bo",
    "Bonnie",
    "Brock",
    "Bull",
    "Buster",
    "Buzz",
    "Byron",
    "Carl",
    "Charlie",
    "Chester",
    "Chuck",
    "Clancy",
    "Colette",
    "Colt",
    "Cordelius",
    "Crow",
    "Damian",
    "Darryl",
    "Doug",
    "Draco",
    "Dynamike",
    "Edgar",
    "El Primo",
    "Emz",
    "Eve",
    "Fang",
    "Finx",
    "Frank",
    "Gale",
    "Gene",
    "Gigi",
    "Glowy",
    "Gray",
    "Griff",
    "Grom",
    "Gus",
    "Hank",
    "Jacky",
    "Jae-Yong",
    "Janet",
    "Jessie",
    "Juju",
    "Kaze",
    "Kenji",
    "Kit",
    "Larry & Lawrie",
    "Leon",
    "Lily",
    "Lola",
    "Lou",
    "Lumi",
    "Maisie",
    "Mandy",
    "Max",
    "Meg",
    "Meeple",
    "Melodie",
    "Mico",
    "Mina",
    "Moe",
    "Mortis",
    "Mr. P",
    "Najia",
    "Nani",
    "Nita",
    "Nori",
    "Nova",
    "Ollie",
    "Otis",
    "Pam",
    "Pearl",
    "Penny",
    "Pierce",
    "Piper",
    "Poco",
    "Rico",
    "Rosa",
    "R-T",
    "Ruffs",
    "Sam",
    "Sandy",
    "Shade",
    "Shelly",
    "Sirius",
    "Spike",
    "Sprout",
    "Squawk",
    "Starr",
    "Stu",
    "Surge",
    "Tara",
    "Tick",
    "Trunk",
    "Willow",
    "Wendy",
    "Ziggy"
];

function sortearTrio(lista) {
    const indices = new Set();

    while (indices.size < 3) {
        indices.add(Math.floor(Math.random() * lista.length));
    }

    return [...indices].map(i => lista[i]);
}

document.getElementById("sortear").addEventListener("click", () => {
    const trio = sortearTrio(brawlers);

    document.getElementById("p1").textContent = trio[0];
    document.getElementById("p2").textContent = trio[1];
    document.getElementById("p3").textContent = trio[2];
});

document.getElementById("limpar").addEventListener("click", () => {
    document.getElementById("p1").textContent = "?";
    document.getElementById("p2").textContent = "?";
    document.getElementById("p3").textContent = "?";
});

