document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();

        xhr.upload.onprogress = (e) => { 
            progress.value = e.loaded / e.total; 
        }
        xhr.onload = () => {
            if (xhr.status != 200) { 
                console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
            } else { 
                alert('Загрузка успешно завершена.');
            }
        }

        const formData = new FormData(form);
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(formData);
    });
});