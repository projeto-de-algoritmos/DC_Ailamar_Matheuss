let elementos = document.getElementById("main");

let botao = document.getElementById("botao");

botao.addEventListener("click", main);


function main () {
    let teste = [90, 80, 1, 4,  20, 
                10, 100, 2, 50, 40,
                99, 300, 8, 5, 400,
                60, 30, 120, 3, 5]
    
    let media = medianaMedianas(teste);
    console.log(media);
    elementos.innerHTML = `<p>vetor: ${teste}</p>`;
    
    elementos.innerHTML += `<p>media: ${media}</p>`;
}

function medianaV (vetor) {
    for (let i = 1, end = vetor.length; i < end; i++) {
        for (let j = i; j > 0; j--) {
            if (vetor[j] < vetor[j-1]) [vetor[j], vetor[j-1]] = [vetor[j-1], vetor[j]];
        }
    }
    // mediana ordenada
    console.log(vetor);

    return vetor[2];
}

function medianaMedianas (amostral) {
    let medianas = [];
    let vetor = amostral;
    let end = vetor.length;
    do{
        for (let i = 0; i < end; i+=5) {
            medianas.push(medianaV([vetor[i], vetor[i+1], vetor[i+2], vetor[i+3], vetor[i+4]]));
        }
        vetor = medianas;
        end = vetor.length;
        medianas = [];
    }while(vetor.length-1 > 4);

    medianaV(vetor);

    return vetor[Number.parseInt((end-1)/2)];
}

/*
0  1   2   3  4
1  20  80  4  90 
10 100 2   50 40
60 30  120 3  5
*/