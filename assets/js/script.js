function calcularCustoViagem() {
    // Obtém os valores inseridos pelo usuário
    const precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
    const gastoMedio = parseFloat(document.getElementById('gastoMedio').value);
    const distancia = parseFloat(document.getElementById('distancia').value);

    // Validação dos inputs
    if (isNaN(precoCombustivel) || isNaN(gastoMedio) || isNaN(distancia)) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o consumo de combustível necessário
    const litrosNecessarios = distancia / gastoMedio;

    // Calcula o custo total da viagem
    const custoViagem = litrosNecessarios * precoCombustivel;

    // Exibe o resultado
    document.getElementById('resultado').innerText = `Você gastará em média: R$ ${custoViagem.toFixed(2)}`;
}