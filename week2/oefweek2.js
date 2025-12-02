const days = ["maandag", "dinsdag","woensdag", "donderdag","vrijdag","zaterdag", "zondag"];

console.log(days);

//oef 2

const matrix = [
    ["7", "12", "19"]
    ["2", "4", "8"]
    ]

function matrixValue(row, col) {
    return matrix[row][col];
}

console.log(matrixValue);

//oef 3

const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
    console.log(number);
}


//oef 4

const colors = ["rood", "groen", "blauw", "geel", "paars"];

colors.forEach((color, index) => {
    console.log(index, color);
});

//oef 5

const woorden = [
  'mal',
  'snurkduif',
  'bromvlieg',
  'snottebel',
  'knotsgek',
  'pindakaas',
  'fluitketel',
  'smurfenmuts',
];


//oef 6
const willekeurigeGetallen = [3, 7, 2, 9, 4, 1, 8, 5, 6];
console.log(willekeurigeGetallen.filter(number => getallen > 10));

willekeurigeGetallen.pop();

willekeurigeGetallen.shift();

willekeurigeGetallen.push(12);

console.log(willekeurigeGetallen.every(number => number < 20));


//oef 7
const willekeurigeNamenArray = [
  ['Alice', 'Bob', 'Charlie'],
  ['David', 'Eva', 'Frank'],
  ['Grace', 'Hank', 'Ivy'],
  ['Jack', 'Kelly', 'Liam']
];

const flat = willekeurigeNamenArray.flat();
console.log(flat);

const nummers = 