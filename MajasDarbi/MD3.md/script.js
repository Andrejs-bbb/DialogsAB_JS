function count(from, to, choice, exclusions = []) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    for (let i = from; i <= to; i++) {
        if (exclusions.includes(i)) continue;

        if (choice === 'all') {
            output.innerHTML += i + ' ';
        } else if (choice === 'odd' && i % 2 !== 0) {
            output.innerHTML += i + ' ';
        } else if (choice === 'even' && i % 2 === 0) {
            output.innerHTML += i + ' ';
        }
    }
}
