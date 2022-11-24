// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const arrayNum = [93, 576, 7, 13, 43213]
const arrayString = ["Lucas", "Vogel", "de", "Oliveira"]
const arrayMix = [31278, "Knot", true, "Awa", false, 378912378921]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log (arrayNum.length)
console.log (arrayString.length)
console.log (arrayMix.length)

// Imprima cada um dos arrays acima, utilizando `console.log()`
console.log(arrayNum)
console.log(arrayString)
console.log(arrayMix)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(arrayNum[0])
console.log(arrayString[1])
console.log(arrayMix[2])

// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log().
// A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
console.log(arrayNum.includes(93))
console.log(arrayMix.includes("Água"))


