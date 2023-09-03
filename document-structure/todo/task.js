document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('task__input');
    const tasks = document.getElementById('tasks__list');

    function addNewTask(id, info, save = false) {
        if (tasks) {
            const task = document.createElement('div');
            task.id = id;
            task.className = 'task';
            task.innerHTML = `<div class="task__title">${info}</div><a href="#" class="task__remove">&times;</a>`;
            tasks.appendChild(task);    
    
            if (save) {
                localStorage.setItem(`task-${id}`, info); 

                const count = localStorage.getItem('tasksCount');
                if (count !== null) {
                    localStorage.setItem('tasksCount', count+1);             
                } else {
                    localStorage.setItem('tasksCount', 1);             
                }

                task.addEventListener("click" , (event) => {
                    event.preventDefault();
                    deleteTask(event.target.parentNode);
                });
            }    
        }
    }

    function deleteTask(element) {        
        if (element) {
            localStorage.clear();
            element.remove();

            const taskList = tasks.getElementsByClassName('task');
            for (let i = 0; i < taskList.length; i++) {
                taskList[i].id = i;
                localStorage.setItem(`task-${i}`, taskList[i].children[0].textContent); 
            }

            if (taskList.length > 0)
                localStorage.setItem('tasksCount', tasks.childElementCount);                       
        }
    }
  
    let taskCount = localStorage.getItem('tasksCount');
    if (taskCount !== null) {
        for (let i = 0; i < taskCount; i++) {
            let taskInfo = localStorage.getItem(`task-${i}`);
            if (taskInfo !== null) {
                addNewTask(i, taskInfo);
            }
        }
    }

    document.getElementById('tasks__add').addEventListener("click" , (event) => {
        event.preventDefault();
        if (input.value.trim()) {
            addNewTask(tasks.childElementCount, input.value, true);
        }
    });   

    document.querySelectorAll(".task__remove").forEach(function(item) {
        item.addEventListener("click" , (event) => {
            event.preventDefault();
            deleteTask(event.target.parentNode);
        });        
    });
});

