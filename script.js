
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
});


function provjeriKviz() {

    let bodovi = 0;
    let ukupno = 5;

    let q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === "a") {
        bodovi++;
    }

    let q2 = Array.from(
        document.querySelectorAll('input[name="q2"]:checked')
    ).map(input => input.value);

    if (
        q2.length === 3 &&
        q2.includes("h1") &&
        q2.includes("h2") &&
        q2.includes("h3")
    ) {
        bodovi++;
    }

    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value === "b") {
        bodovi++;
    }

    let q4 = Array.from(
        document.querySelectorAll('input[name="q4"]:checked')
    ).map(input => input.value);

    if (
        q4.length === 3 &&
        q4.includes("boje") &&
        q4.includes("font") &&
        q4.includes("raspored")
    ) {
        bodovi++;
    }

    let q5 = document.querySelector('input[name="q5"]:checked');

    if (q5 && q5.value === "b") {
        bodovi++;
    }

    let rezultat = document.getElementById("rezultat");

    rezultat.innerHTML =
        "Osvojili ste " + bodovi + " od " + ukupno + " bodova!";

    if (bodovi === 5) {
        rezultat.innerHTML += "<br>Odlično! Sve ste tačno odgovorili!";
    } else if (bodovi >= 3) {
        rezultat.innerHTML += "<br>Bravo! Imate dobro znanje!";
    } else {
        rezultat.innerHTML += "<br>Potrebno je još malo vježbe!";
    }
}
