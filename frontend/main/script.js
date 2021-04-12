(function main () {
    let teste = [20, 80, 1, 4, 90, 
                10, 100, 2, 50, 40,
                60, 30, 120, 3, 5]
    
    let media = mediana(teste);
    
    console.log(media);

})()

function medianaMedianas (vetor) {
    // insertion sort
    for (let i = 1, end = vetor.length; i < end; i++) {
        for (let j = i; j > 0; j--) {
            comparaTroca(vetor[j], vetor[j-1]);
        }
    }

}

function medianaV (vetor) {

    // ordena mediana em 9 iteracoes

    comparaTroca(vetor[0], vetor[4]);
    comparaTroca(vetor[1], vetor[4]);
    comparaTroca(vetor[2], vetor[4]);
    comparaTroca(vetor[3], vetor[4]);

    comparaTroca(vetor[0], vetor[3]);
    comparaTroca(vetor[1], vetor[3]);
    comparaTroca(vetor[2], vetor[3]);
    
    comparaTroca(vetor[0], vetor[2]);
    comparaTroca(vetor[1], vetor[2]);
    // mediana ordenada
    
    return vetor[2];
}

function comparaTroca (a, b) {
    if (b < a) [a, b] = [b, a];
}

function mediana (teste) {
    let medianas = [];
    for (let i = 0, end = teste.length; i < end; i+=5) {
        medianas.push(medianaV([teste[i], teste[i+1], teste[i+2], teste[i+3], teste[i+4]]));
    }
    return medianaMedianas(medianas);
}


/*
0  1   2   3  4
1  20  80  4  90 
10 100 2   50 40
60 30  120 3  5
*/