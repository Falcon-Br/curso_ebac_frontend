$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()
        
        const novaTarefa = $('#tarefa').val()
        if (novaTarefa !== ''){
            const novoItem = $(`<li>${novaTarefa}</li>`)
            $('#tarefa').val('')
            
            $(novoItem).appendTo('ul')
            
            $('#task-list').on('click', 'li', function(){
                $(this).toggleClass('checked')
            })
        }
        else{
            alert('Preencha o Campo')
        }
    })
})
