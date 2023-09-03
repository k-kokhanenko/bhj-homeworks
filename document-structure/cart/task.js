document.addEventListener("DOMContentLoaded", () => {
    const inc = document.querySelectorAll('.product__quantity-control_dec');

    function quantityControl(e, add = true) {    
        const parent = e.target.closest('.product__quantity-controls');
        let value = Number(parent.children[1].textContent.trim());

        add ? value++ : value--;
        if (value < 0)
            value = 1;

        parent.children[1].textContent = value;
    }

    document.querySelectorAll(".product__quantity-control_inc").forEach(function(item) {
        item.addEventListener("click" , (e) => {
            quantityControl(e);            
        });        
    });
    document.querySelectorAll(".product__quantity-control_dec").forEach(function(item) {
        item.addEventListener("click" , (e) => {
            quantityControl(e, false);            
        });        
    });

    document.querySelectorAll(".product__add").forEach(function(item) {
        item.addEventListener("click" , (e) => {
            const cart = document.querySelector('.cart__products');
            const parent = e.target.closest('.product');
    
            const element = cart.querySelector(`[data-id="${parent.dataset.id}"]`);
            if (element) {
                const count = element.querySelector('.cart__product-count');
                count.textContent = Number(parent.querySelector('.product__quantity-value').textContent) + Number(count.textContent);

            } else {
                const product = document.createElement('div');  
                product.className = 'cart__product';
                product.dataset.id = parent.dataset.id;            
                product.innerHTML = `
                    <img class="cart__product-image" src="${parent.querySelector('.product__image').src}">
                    <div class="cart__product-count">${parent.querySelector('.product__quantity-value').textContent}</div>`;
    
                cart.appendChild(product);    
            }            
        });        
    });
   
});