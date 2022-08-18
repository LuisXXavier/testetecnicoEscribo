
function sumAll() {
    // Importo o valor digitado pelo HTML
    const parsedValue = parseInt(document.getElementById('inicial').value);
    var sumall = '';

    // Valor inicial da soma
    let sum = 0;

    // Loop até o valor escolhido
    for (let i = 0; i < parsedValue; i++) {
        // Verifico se o valor é dividendo
        if (!(i % 3) || !(i % 5)) {
            // Caso o valor seja dividido ele irá acrescentar com os valores do loop
            sum += i;
        }
    }

    // Retorno o resultado da soma
    document.write(sum);
}

