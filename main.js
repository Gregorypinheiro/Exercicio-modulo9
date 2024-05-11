$(document).ready(function(){
    //adicona um ouvinte no evento de clique
    $('form button').ready(function(){
        $("form button").click(function(e){ 

            //verifica se o campo tarefa está vazio

                if($("#tarefa").val() === "" || $("#data").val() === ""){
                    alert('Por Favor, preencha os campos a baixo.')
                }else{

            // inpede que a página atualize o formulário 
                e.preventDefault()
            
            //verifica se a tarefa ja existe

                var tarefaNova = $("#tarefa").val()
                var tarefaE = []

                $("#corpo_da_tabela tr").each(function(){
                    var tarefaExistente = $(this).find('td:first').text();
                    tarefaE.push(tarefaExistente)
                })

                if (tarefaE.includes(tarefaNova)){
                    alert('Está tarefa já foi adicionada.')
                }else{

                //abre a tabela
                    $('section').slideDown()
                    $('table').slideDown()
                //Adiciona a linha na tabela
                    criarLinha() 
                //Limpa os campos do formulário após adicionar a tarefa
                    limparLinha() 
                //Ao clicar nos itens da lista, adicione um efeito que aplique uma linha em cima do texto (text-decoration: line-through).
                    riscar()
                    
                }



            
            
            }
    })
        
        $('section button').click(function(){
            //fecha a tabela
            $('section').slideUp()
            //atualiza a página
            window.location.reload()
            
        })
    })