function calculate() {
    let crop = document.getElementById("crop").value;
    let land = parseFloat(document.getElementById("land").value);

    if (!land || land <= 0) {
        alert("Enter valid land size");
        return;
    }

    let seedPerAcre = 0;
    let fertPerAcre = 0;
    let seedPrice = 0;
    let fertPrice = 0;

    if (crop === "maize") {
        seedPerAcre = 10;   // kg
        fertPerAcre = 50;   // kg
        seedPrice = 200;    // per kg
        fertPrice = 100;    // per kg
    }

    if (crop === "beans") {
        seedPerAcre = 8;
        fertPerAcre = 25;
        seedPrice = 180;
        fertPrice = 90;
    }

    let totalSeeds = seedPerAcre * land;
    let totalFert = fertPerAcre * land;

    let cost = (totalSeeds * seedPrice) + (totalFert * fertPrice);

    document.getElementById("result").innerHTML = `
        <h3>Results:</h3>
        Seeds needed: ${totalSeeds} kg <br>
        Fertilizer needed: ${totalFert} kg <br>
        Estimated cost: KES ${cost}
    `;
}