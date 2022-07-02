function contar() {

    let ini = document.getElementById('txtin')
    let fim = document.getElementById('txtfm')
    let pas = document.getElementById('txtps')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = `Impossível Contar!` //Mensagem de ERRO!
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1f3c1}`
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1f3c1}`


    }
}