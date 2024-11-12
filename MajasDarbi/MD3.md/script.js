function count(from, to, choice, exclusions = []) {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Notīra iepriekšējo rezultātu

    for (let i = from; i <= to; i++) {
        // Ja skaitlis ir izslēgts, turpinām ar nākamo
        if (exclusions.includes(i)) continue;

        // Izvēles apstrāde
        if (choice === 'all') {
            output.innerHTML += i + ' ';
        } else if (choice === 'odd' && i % 2 !== 0) {
            output.innerHTML += i + ' ';
        } else if (choice === 'even' && i % 2 === 0) {
            output.innerHTML += i + ' ';
        }
    }
}
