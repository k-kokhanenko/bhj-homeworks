function showWelcome() {
    const div = document.getElementById('welcome');
    if (localStorage.user && div) {
        div.classList.add('welcome_active');
        div.textContent = `Добро пожаловать пользователь с id=${localStorage.user}`;

        const signin = document.getElementById('signin');
        if (signin) {
            signin.classList.remove('signin_active');
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showWelcome();

    const form = document.forms['signin__form'];
    form.addEventListener('submit', function(e) {            
        e.preventDefault();

        let formData = new FormData(document.forms['signin__form']);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", form.action);
        xhr.send(formData);
        xhr.onload = () =>{
            let response = JSON.parse(xhr.response);
            console.log(response);

            if (!response.success) {
                alert('Неверный логин/пароль');
            } else {
                localStorage.user = response.user_id;                
                showWelcome();
            }
        } 
        
        //xhr.send();
    });            
});

