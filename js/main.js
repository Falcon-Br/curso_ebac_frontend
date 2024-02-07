$(document).ready(function(){

    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            telefone:{
                required:  true,
                minlength: 15
            },
            email:{
                required: true,
                email: true
            },
            cpf:{
                required: true,
                minlength: 14
            },
            endereco:{
                required: true
            },
            cep:{
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: 'O campo Nome não foi preenchido.',
            telefone: 'O campo Telefone não foi preenchido.',
            email: 'O campo Email não foi preenchido.',
            cpf: 'O campo CPF não foi preenchido.',  
            endereco: 'O campo Endereço não foi preenchido.',  
            cep: 'O campo CEP não foi preenchido.'
        }
    })
})
