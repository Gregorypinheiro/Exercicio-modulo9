$(document).ready(function() {
    $('#addTask').click(function() {
        const taskText = $('#taskInput').val().trim();
        if (taskText !== '') {
            // Verifica se a tarefa já existe na lista
            const taskExists = $('#taskList li').toArray().some(function(item) {
                return $(item).text().trim() === taskText;
            });

            if (!taskExists) {
                const listItem = `<li><input type="checkbox">${taskText} <button class="deleteTask">Excluir</button></li>`;
                $('#taskList').append(listItem);
                $('#taskInput').val('');
            } else {
                alert('Essa tarefa já existe na lista!');
            }
        }
    });

    $(document).on('click', '.deleteTask', function() {
        $(this).parent().remove();
    });

    $(document).on('change', 'input[type="checkbox"]', function() {
        const taskItem = $(this).parent();
        taskItem.toggleClass('completed');
    });
});

