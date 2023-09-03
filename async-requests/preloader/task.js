document.addEventListener("DOMContentLoaded", () => {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { 
            console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
        } else { 
            const loader = document.getElementById('loader');
            if (loader) {
                loader.classList.remove('loader_active');
            }

            const items = document.getElementById('items');

            let data = JSON.parse(xhr.responseText);
            if ("response" in data && "Valute" in data['response']) {
                for (var i in data['response']['Valute']) {
                    const element  = document.createElement('div');
                    element.className = 'item';
                    element.innerHTML = `
                        <div class="item__code">${data['response']['Valute'][i].CharCode}</div>
                        <div class="item__value">${data['response']['Valute'][i].Value}</div>
                        <div class="item__currency">руб.</div>
                    `;
                    items.appendChild(element);   
                }
            }
        }
    };
});