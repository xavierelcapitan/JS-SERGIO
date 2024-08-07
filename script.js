function genererChamps() {
    const nombreJoueurs = parseInt(document.getElementById("numJoueurs").value);
    const divChampsJoueurs = document.getElementById("champsJoueurs");
    divChampsJoueurs.innerHTML = ""; // Réinitialise les champs

    for (let i = 1; i <= nombreJoueurs; i++) {
        const nomJoueur = `joueur${i}`;
        const prixJoueur = `prix${i}`;
        const champs = `
            <input type="text" name="${nomJoueur}" placeholder="Joueur ${i}">
            <input type="number" name="${prixJoueur}" placeholder="Prix estimé">
            <br>
        `;
        divChampsJoueurs.insertAdjacentHTML("beforeend", champs);
    }
}

document.getElementById("formulairePrix").addEventListener("submit", function (event) {
    event.preventDefault();
    const prixCible = 500; // Prix cible (à définir)
    const champsPrix = document.querySelectorAll("[name^='prix']");
    const ecarts = Array.from(champsPrix).map(champ => Math.abs(parseInt(champ.value) - prixCible));
    const ecartMinimum = Math.min(...ecarts);
    const indexGagnant = ecarts.indexOf(ecartMinimum);
    const nomGagnant = document.getElementsByName(`joueur${indexGagnant + 1}`)[0].value;
    document.getElementById("resultat").textContent = `Le gagnant est ${nomGagnant} avec un écart de ${ecartMinimum}€ !`;
});