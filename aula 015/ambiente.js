    let num = [5, 8, 4, 6, 9]
    num.sort() // ordem crescente
    num.push(1) // adicionando o valor 1
    console.log(num) // mostrar o valores do vetor
    console.log(` O vetor possui ${num.length} posições!`)
    console.log(` O primeiro número do vetor é ${num[0]}`)

    let pos = num.indexOf(9) // buscar o valor 9 no vetor
    if (pos == -1) {
        console.log(` O valor não foi encontrado!`)
    } else {
        console.log(` O valor 8 está na posição ${pos}`)

    }


    // num[valor do ídice na vetor] = valor que vai receber 
    // num.push() - adicionar um valor no proximo ídice automaticamente
    // num.length - mostrar quantidade de caracteres ou posições no vetor
    // num.sort - coloca os números em ordem crescente
    // num[índice] - mostrar valor
    // num.indexOf(07) - retorna o valor da chave