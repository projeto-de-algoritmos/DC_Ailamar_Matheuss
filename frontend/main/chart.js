
var point = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', 
            /* '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
            '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75',
            '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', */];

var votingPop = [40, 45.7, 52, 53.6, 54.1, 54.2, 54.5, 54.7, 55.1, 56.6, 42, 52.7, 84.3, 51.7, 61.1, 55.3, 64.2, 91.1, 58.9, , 6, 7, 8, 9, 10,];

var regVoters = [49.1, 42, 52.7, 84.3, 51.7, 61.1, 55.3, 64.2, 91.1, 58.9];

var trace1 = {
type: 'scatter',
x: point,
y: votingPop,
mode: 'markers',
name: 'Vetor ordenado',
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
name: 'Vetor desordenado',
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

Plotly.newPlot('dotchart', data, layout);