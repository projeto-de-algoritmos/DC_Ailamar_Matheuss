
let elementos = document.getElementById("main");
let botao = document.getElementById("botao");
let emb = document.getElementById("embaralhar");

botao.addEventListener("click", main);
emb.addEventListener("click", embaralhar);

var votingPop = [90, 80, 1, 4, 20,
    10, 100, 2, 50, 40,
    25, 35, 86, 92, 6,
    99, 300, 8, 5, 400,
    60, 30, 120, 3, 5];

var regVoters = [];


function embaralhar() {
    let aux = []

    for(let i = 0; i < 25; i++){
        aux.push(Math.floor(Math.random() * 100));
    }

    votingPop.splice(0, 25);
    votingPop.push(...aux);
}


function main() {

    votingPop.sort(() => Math.random() - 0.5);
    const aux = [...votingPop];
    
    elementos.innerHTML = `<p>vetor: ${votingPop}</p>`;
    let media = medianaMedianas(votingPop);
    const aux2 = mergeSort(aux);
    regVoters.splice(0, 25);
    regVoters.push(...aux2);
    elementos.innerHTML += `<p>mediana oráculo: ${media}</p>`;
    elementos.innerHTML += `<p>vetor ordenado: ${regVoters}</p>`;

    Plotly.newPlot('dotchart', data, layout);

}



function medianaV(vetor) {
    // insertionsort por padrao
    // compara os elementos, se a < b, troca [a, b] = [b, a]
    vetor.sort((a, b) => a - b);
    // mediana ordenada

    return vetor[2];
}

function medianaMedianas(amostral) {
    let medianas = [];
    let vetor = amostral;
    let end = vetor.length;
    do {
        for (let i = 0; i < end; i += 5) {
            medianas.push(medianaV(vetor.slice(i, i + 5)));
        }
        vetor = medianas;
        end = vetor.length;
        medianas = [];
    } while (vetor.length - 1 > 4);

    medianaV(vetor);

    return vetor[Math.floor((end - 1) / 2)];
}

/*
0  1   2   3  4
1  20  80  4  90 
10 100 2   50 40
60 30  120 3  5
*/

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right]
}

function mergeSort(array) {
    const half = array.length / 2;

    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array));
}




var point = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', 
            /* '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
            '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75',
            '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', */];

var trace1 = {
type: 'scatter',
x: point,
y: votingPop,
mode: 'markers',
name: 'Vetor desordenado',
marker: {
    color: 'rgba(156, 165, 196, 0.95)',
    line: {
    color: 'rgba(156, 165, 196, 1.0)',
    width: 1,
    },
    symbol: 'circle',
    size: 10
}
};

var trace2 = {
x: point,
y: regVoters,
mode: 'markers',
name: 'Vetor ordenado',
marker: {
    color: 'rgba(204, 204, 204, 0.95)',
    line: {
    color: 'rgba(217, 217, 217, 1.0)',
    width: 1,
    },
    symbol: 'circle',
    size: 10
}
};

var data = [trace1, trace2];

var layout = {
title: 'Inversões',
xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'rgb(102, 102, 102)',
    titlefont: {
    font: {
        color: 'rgb(204, 204, 204)'
    }
    },
    tickfont: {
    font: {
        color: 'rgb(102, 102, 102)'
    }
    },
    autotick: false,
    dtick: 1,
    ticks: 'outside',
    tickcolor: 'rgb(102, 102, 102)'
},
margin: {
    l: 40,
    r: 40,
    b: 50,
    t: 80
},
legend: {
    font: {
    size: 10,
    },
    yanchor: 'middle',
    xanchor: 'right'
},
width: 1000,
height: 600,
paper_bgcolor: 'rgb(254, 247, 234)',
plot_bgcolor: 'rgb(254, 247, 234)',
hovermode: 'closest'
};
