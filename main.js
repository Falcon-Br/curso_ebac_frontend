function verificaCampos(campoA, campoB) {

    if (campoB > campoA) {
        return 1
    } else if (campoB == campoA) {
        return 2
    } else {
        return 3
    }
}

function limpaTela() {

    document.getElementById('campo-a').style.border = '1px solid black'
    document.getElementById('campo-b').style.border = '1px solid black'

    document.querySelector('.mensagem-sucesso').style.display = 'none'
    document.querySelector('.mensagem-error').style.display = 'none'
    document.querySelector('.mensagem-aviso').style.display = 'none'
}


const form = document.getElementById('form-compara')

form.addEventListener('submit', function (e) {

    e.preventDefault()
    
    let tipoMensagem

    const campoA = document.getElementById('campo-a')
    const campoB = document.getElementById('campo-b')

    limpaTela()

    const msgSucesso = `Campo B: ${campoB.value} é maior que Campo A: ${campoA.value}. Formulário é válido.`
    const msgError = `Campo A: ${campoA.value} é maior que Campo B: ${campoB.value}. Formulário NÃO é válido.`
    const msgAviso = `Campo A: ${campoA.value} e Campo B: ${campoB.value}. são iguais. Força valores diferentes para os dois campos.`

    const containerMsgSucesso = document.querySelector('.mensagem-sucesso')
    const containerMsgError = document.querySelector('.mensagem-error')
    const containerMsgAviso = document.querySelector('.mensagem-aviso')

    if (campoA.value == '') {
       
        containerMsgAviso.style.display = 'block'
        containerMsgAviso.innerHTML = "É necessário preencher o campo A"
        campoA.style.border = '1px solid red'
     
        return
    }

    if (campoB.value == '') {
     
        containerMsgAviso.style.display = 'block'
        containerMsgAviso.innerHTML = "É necessário preencher o campo B"
        campoB.style.border = '1px solid red'

        return
    }

    tipoMensagem = verificaCampos(campoA.value, campoB.value)

    if ( tipoMensagem == 1) {
     
        containerMsgSucesso.innerHTML = msgSucesso
        containerMsgSucesso.style.display = 'block'

    } else if (tipoMensagem == 2) {
      
        containerMsgAviso.innerHTML = msgAviso
        containerMsgAviso.style.display = 'block'
        campoA.style.border = '1px solid red'
        campoB.style.border = '1px solid red'

    } else {
       
        containerMsgError.innerHTML = msgError
        containerMsgError.style.display = 'block'

    }

    campoA.value = ''
    campoB.value = ''

})