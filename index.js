// Vamos criar alguns arrays, e refletir a respeito.
// Crie um array com 3 itens do tipo String
const arrayDeStrings =["Bruno", "Tião","Dandara"]
console.log(arrayDeStrings)
console.table(arrayDeStrings)

// Crie um array com 3 itens do tipo Number
const arrayDeNumero = [100,200,300]
console.table(arrayDeNumero)

// Crie um array com uma String, um número e um booleano;
const arrayVariado = ["Lucas",30,false]
console.log(arrayVariado)

const nome = "Lucas"
const idade = 30
const menoridade = false
const arrayVariado2 = [nome,idade,menoridade]
console.table(arrayVariado2)

// Crie um array com apenas um valor. Um número.
const arrayUnico = ["Unico"]
console.log(arrayUnico)

// Crie um array sem nenhum valor dentro.
const arrayVazio = []
console.log(arrayVazio)




// Vamos tentar acessar índices específicos dos arrays 
//da última prática.
console.log(arrayVariado[2])

// Cheque o length do primeiro array. O que acontece 
//se tentarmos acessar o índice 3 deste array?
console.log(arrayVariado.length)  //3 entradas no índice
console.log(arrayVariado[3])  // exibe UNDEFINED pois não há item na posição 3 do array

// Verifique se o terceiro array inclui cada um dos itens;
 console.log (arrayVariado.includes("Lucas"))
 console.log (arrayVariado.includes(30))
 console.log (arrayVariado.includes(false))
 console.log (arrayVariado.includes("Lucas",30,false))

// No quarto array, imprima o valor do único item. 
//Observe qual o seu índice, e imprima seu tamanho.
console.log(arrayUnico[0])

console.log(arrayVariado2.indexOf(30))
console.log(arrayUnico.length)




// Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
 const arrayCopia = arrayDeStrings

// Faça push() de uma nova string no array copiado
arrayCopia.push("Labenu")

// Imprima os dois arrays. Há diferença?
console.table(arrayDeStrings)
console.table(arrayCopia)        // ambos ficaram iguais

// Como podemos ajustar?
const arrayCopiaCerta = arrayCopia.slice()
arrayCopiaCerta.push("Oliveira")
console.table(arrayCopiaCerta)         
console.table(arrayCopia)

// Com o array copiado corretamente,    
// remova os itens dos índices 2 e 3 do array copiado.          // .splice(0,1) - posição e quantidade
arrayCopiaCerta.splice(2,2)
console.log(arrayCopiaCerta)







// 1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.
const novoArray = [8, 43, 25, 13]

// 2. Depois disso, crie uma cópia deste array utilizando o método slice().

const novoArrayCopia = novoArray.slice()

// 3. No array copiado:

// Remova o último item 
novoArrayCopia.splice(3,1)
ou //novoArrayCopia.pop  pra remover o último item

// Em seguida adicione o número 6 no fim do   array.
novoArrayCopia.push(6)

// Depois, remova o número que está no índice 2 array.
novoArrayCopia.splice(2,1)             // console.log(novoArrayCopia.splice(2,1)) - Mostra apenas o item excluido

// Por fim, imprima os dois arrays.
console.table(novoArray)
console.table(novoArrayCopia)