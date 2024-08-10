// script.js
$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        
        var taskText = $('#task-input').val();
        
        if (taskText !== '') {
            $('#task-list').append('<li>' + taskText + '</li>');
            $('#task-input').val(''); // Limpa o campo de input
        }
    });
    
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
