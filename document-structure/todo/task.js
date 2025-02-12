document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('task__input');
    const tasks = document.getElementById('tasks__list');

    function addNewTask(info, save = false) {
        if (tasks) {
            const task = document.createElement('div');
            task.className = 'task';
            task.innerHTML = `<div class="task__title">${info}</div><a href="#" class="task__remove">&times;</a>`;
            tasks.appendChild(task);    

            if (save) {
                let tasksList = [];
                if (localStorage.getItem('tasks') !== null) {                    
                    tasksList = JSON.parse(localStorage.getItem('tasks'));                   
                }
                
                tasksList.push(info);
                localStorage.setItem('tasks', JSON.stringify(tasksList));

                task.addEventListener("click" , (event) => {
                    event.preventDefault();
                    deleteTask(event.target.parentNode);
                });
            }
        }
    }

    function deleteTask(element) {        
        if (element) {
            element.remove();
            
            let tasksList = [];
            const task = tasks.getElementsByClassName('task');
            for (let i = 0; i < task.length; i++) {
                tasksList.push(task[i].children[0].textContent);                
            }

            localStorage.clear();
            localStorage.setItem(`tasks`, JSON.stringify(tasksList)); 
        }
    }
  
    if (localStorage.getItem('tasks') !== null) {
        let tasksList = JSON.parse(localStorage.tasks);
        for (let i = 0; i < tasksList.length; i++) {
            addNewTask(tasksList[i]);
        }
    }

    document.getElementById('tasks__add').addEventListener("click" , (event) => {
        event.preventDefault();
        if (input.value.trim()) {            
            addNewTask(input.value, true);
            input.value = '';
            input.focus();
        }
    });   

    document.querySelectorAll(".task__remove").forEach(function(item) {
        item.addEventListener("click" , (event) => {
            event.preventDefault();
            deleteTask(event.target.parentNode);
        });        
    });
});

