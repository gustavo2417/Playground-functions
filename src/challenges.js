// Desafio 1
function compareTrue(projectLL,projectPF) {
  if (projectLL === true && projectPF === true) {
    return true
  } else if (projectLL === false && projectPF === false) {
    return false
  } else {
    return false
  }  
}

// Desafio 2
function calcArea(base,height) {
let calculo = 0; 
return calculo = base*height/2
}
console.log(calcArea(51,1))

// Desafio 3
function splitSentence(phrase) {
  let strings = phrase.split(" ");
  return strings
}
console.log(splitSentence("foguete"))

// Desafio 4
function concatName(array) {
  let result = [];
  let last = array[array.length -1];
  let first = array[0];
return result = last + ", " + first
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins,ties) {
   let vitorias = wins * 3;
   let empates = ties;
   return footballPoints = vitorias + empates;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let maxNumer = Math.max(...numbers)
  for (let index = 0; index < numbers.length; index ++) {
    if (maxNumer === numbers[index]) {
      count ++
    }
   }
   return count
  }
console.log(highestCount([0, 0, 0]));
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (mouse < cat1 > cat2){
    return 'cat2'
}else if (mouse < cat2 > cat1) {
    return 'cat1'
}  else {
  return 'os gatos trombam e o rato foge'
  }
}
// Desafio 8
function fizzBuzz(primos) {
  let array = [];
  for (let i = 0; i < primos.length;i += 1) {
    if ((primos[i] % 3 === 0) && (primos[i] % 5 === 0)){
    array.push("fizzBuzz")
   }else if((primos[i] % 3)  === 0) {
      array.push("fizz")
    }else if ((primos[i] % 5) === 0) {
      array.push("buzz")
    }else {
      array.push("bug!")
    }
  }
  return array
}
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
