// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays,
// chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
 const arrayExercicio3 = ["Teste", false, "Labe", 1382173821, "Aula"]
 const arrayExercicio3Copia = [true, false, 098954, "Tarefa"]
 const arrayExercicio3Copia2 = ["Olá","Coca", 37216362178, false, true]

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayExercicio3.unshift(55)
console.log(arrayExercicio3)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayExercicio3Copia.pop()
console.log(arrayExercicio3Copia)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayExercicio3Copia2.splice(1,1)
console.log(arrayExercicio3Copia2)