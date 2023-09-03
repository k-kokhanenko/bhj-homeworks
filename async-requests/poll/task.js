document.addEventListener("DOMContentLoaded", () => {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { 
            console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
        } else { 
            let data = JSON.parse(xhr.responseText);

            if ('data' in data) {
                if ('title' in data['data']) {
                    const pollTitle = document.getElementById('poll__title');
                    pollTitle.textContent = data['data']['title'];
                }

                if ('answers' in data['data']) {
                    const pollAnswers = document.getElementById('poll__answers');
                    data['data']['answers'].forEach(element => {
                        const button = document.createElement('button');
                        button.className = 'poll__answer';
                        button.textContent = element;
                        pollAnswers.appendChild(button);
                        
                        button.addEventListener("click" , (event) => {
                            alert('Спасибо, ваш голос засчитан!');
                        });   
                    });
                }    
            } 
        }
    };
});